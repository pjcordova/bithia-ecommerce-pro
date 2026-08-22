-- Agrega el código puente con bithia-web a nivel de color (no de producto).
-- Antes, bithia-web mandaba un codigo_lote que se matcheaba contra
-- productos.lote, pero un producto puede agrupar varios colores bajo el
-- mismo lote (se reciben juntos) — eso era ambiguo: no había forma de saber
-- qué color descontar. Ver docs/integracion-erp-stock.md (repo bithia-web).
--
-- Migración aditiva y segura: no borra ni renombra nada. Aplicar contra la
-- base de producción cuando el PR de descuento de stock esté listo.

ALTER TABLE producto_colores
  ADD COLUMN IF NOT EXISTS codigo_lote TEXT;

ALTER TABLE producto_colores
  ADD CONSTRAINT producto_colores_codigo_lote_key UNIQUE (codigo_lote);

-- Backfill: para productos que HOY solo tienen un color, el lote del
-- producto ya identifica ese color sin ambigüedad — se le puede asignar
-- directo, sin esperar a que se reponga stock. Los productos con más de un
-- color quedan sin código hasta la próxima recepción de cada color (recién
-- ahí se genera bien, uno por color).
WITH productos_un_color AS (
  SELECT producto_id
  FROM producto_colores
  GROUP BY producto_id
  HAVING COUNT(*) = 1
)
UPDATE producto_colores pc
SET codigo_lote = p.lote
FROM productos p, productos_un_color u
WHERE pc.producto_id = u.producto_id
  AND pc.producto_id = p.id
  AND p.lote IS NOT NULL
  AND pc.codigo_lote IS NULL;
