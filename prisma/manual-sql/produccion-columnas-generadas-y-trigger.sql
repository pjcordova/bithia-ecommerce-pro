-- Estas piezas viven directamente en la base de producción de Railway y no
-- son expresables con `prisma db push` (columnas GENERATED ALWAYS AS STORED
-- y un trigger). Se sacaron por introspección (pg_get_functiondef /
-- pg_get_triggerdef) el 2026-08-21 para poder reproducir el mismo
-- comportamiento en cualquier base de prueba (local o staging).
--
-- Aplicar en orden, contra una base que ya tenga las tablas creadas
-- (`npx prisma db push`).

-- 1. Columnas generadas -------------------------------------------------

ALTER TABLE productos
  DROP COLUMN IF EXISTS margen_neto;
ALTER TABLE productos
  ADD COLUMN margen_neto DECIMAL(10, 2)
  GENERATED ALWAYS AS (precio_venta - costo_inversion) STORED;

ALTER TABLE detalle_ventas
  DROP COLUMN IF EXISTS utilidad_subtotal;
ALTER TABLE detalle_ventas
  ADD COLUMN utilidad_subtotal DECIMAL(10, 2)
  GENERATED ALWAYS AS
    ((precio_venta_unitario - costo_inversion_unitario) * (cantidad)::numeric) STORED;

-- 2. Trigger de descuento de inventario ----------------------------------
-- AFTER INSERT en detalle_ventas: resta inventario_tallas y registra el
-- movimiento de salida en el kardex. Es lo que hace posible el descuento
-- automático de stock, tanto desde el POS (tienda física) como desde el
-- nuevo endpoint /api/pedidos/descontar-stock (pedidos de bithia-web).

CREATE OR REPLACE FUNCTION public.fn_descontar_inventario()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
BEGIN
  UPDATE inventario_tallas
  SET cantidad = cantidad - NEW.cantidad
  WHERE producto_id = NEW.producto_id
    AND talla = NEW.talla
    AND color = NEW.color;

  INSERT INTO movimientos_inventario (producto_id, talla, color, tipo, cantidad, motivo, usuario_id)
  SELECT NEW.producto_id, NEW.talla, NEW.color, 'salida', NEW.cantidad,
         'Venta #' || NEW.venta_id::TEXT, v.usuario_id
  FROM ventas v
  WHERE v.id = NEW.venta_id;

  RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS trg_descontar_inventario ON detalle_ventas;
CREATE TRIGGER trg_descontar_inventario
  AFTER INSERT ON public.detalle_ventas
  FOR EACH ROW
  EXECUTE FUNCTION fn_descontar_inventario();
