"use client";
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import BarcodeScanner from '@/components/BarcodeScanner';
import { buscarProductoPorCodigo, registrarRecepcionMercaderia } from '@/app/actions/recepcion';
import { Package, ScanLine, AlertCircle, PlusCircle, Save } from 'lucide-react';
import { toast } from 'sonner';

export default function RecepcionMercaderiaPage() {
    const [codigoEscaneado, setCodigoEscaneado] = useState<string | null>(null);
    const [isProductoNuevo, setIsProductoNuevo] = useState(false);
    const [loading, setLoading] = useState(false);

    // Estados del Formulario
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('Blusas');
    const [colorPrincipal, setColorPrincipal] = useState('Beige');
    const [costoInversion, setCostoInversion] = useState('');
    const [precioVenta, setPrecioVenta] = useState('');

    // Matriz de Tallas (El "Bulto" de Lima)
    const [tallas, setTallas] = useState([
        { talla: 'S', cantidad: 1 },
        { talla: 'M', cantidad: 1 },
        { talla: 'L', cantidad: 1 },
    ]);

    // Cálculos Financieros
    const costo = parseFloat(costoInversion) || 0;
    const precio = parseFloat(precioVenta) || 0;
    const margenNeto = precio > 0 ? (precio - costo).toFixed(2) : '0.00';
    const porcentajeGanancia = costo > 0 ? (((precio - costo) / costo) * 100).toFixed(1) : '0.0';

    const handleScan = async (codigo: string) => {
        setLoading(true);
        setCodigoEscaneado(codigo);

        toast.info('Buscando código en la base de datos...');
        const res = await buscarProductoPorCodigo(codigo);

        if (res.success && res.producto) {
            toast.success('Producto encontrado. Listo para actualizar stock.');
            setIsProductoNuevo(false);
            setNombre(res.producto.nombre);
            setCategoria(res.producto.categoria);
            setColorPrincipal(res.producto.color_principal);
            setCostoInversion(res.producto.costo_inversion.toString());
            setPrecioVenta(res.producto.precio_venta.toString());
        } else {
            toast.warning('Código nuevo detectado. Completa los datos para darlo de alta.');
            setIsProductoNuevo(true);
            // Limpiar formulario para nuevo ingreso
            setNombre('');
            setCostoInversion('');
            setPrecioVenta('');
        }
        setLoading(false);
    };

    const agregarTalla = () => {
        setTallas([...tallas, { talla: '', cantidad: 1 }]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!nombre || !costoInversion || !precioVenta) {
            toast.error('Completa los campos obligatorios.');
            return;
        }

        setLoading(true);
        const res = await registrarRecepcionMercaderia({
            codigo_barras: codigoEscaneado || undefined,
            nombre,
            categoria,
            color_principal: colorPrincipal,
            costo_inversion: parseFloat(costoInversion),
            precio_venta: parseFloat(precioVenta),
            tallas: tallas.filter(t => t.talla.trim() !== '') // Evitar tallas vacías
        });

        if (res.success) {
            toast.success(res.message);
            // Resetear vista para escanear la siguiente prenda
            setCodigoEscaneado(null);
            setIsProductoNuevo(false);
        } else {
            toast.error(res.error);
        }
        setLoading(false);
    };

    return (
        <Layout>
            <div className="space-y-6 animate-fade-in pb-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <ScanLine className="h-6 w-6" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-extrabold text-foreground">Recepción Rápida</h1>
                        <p className="text-sm text-muted-foreground mt-0.5">Escanea prendas de proveedor y actualiza stock e ingresos al instante.</p>
                    </div>
                </div>

                {!codigoEscaneado ? (
                    <div className="mt-8">
                        <BarcodeScanner onScanSuccess={handleScan} />
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => handleScan(prompt("Ingresa el código EAN manualmente:") || "")}
                                className="text-sm font-medium text-primary hover:underline"
                            >
                                ¿No lee la cámara? Ingresar código manualmente
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-card rounded-2xl shadow-sm border border-border p-6 animate-scale-in">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-primary text-primary-foreground font-mono text-sm rounded-lg shadow-sm">
                                    {codigoEscaneado}
                                </span>
                                {isProductoNuevo ? (
                                    <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-md">
                                        <AlertCircle className="h-3 w-3" /> Producto Nuevo
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-md">
                                        <Package className="h-3 w-3" /> Actualizando Stock
                                    </span>
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => setCodigoEscaneado(null)}
                                className="text-sm font-medium text-muted-foreground hover:text-destructive transition-colors"
                            >
                                Cancelar y escanear otro
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Bloque 1: Identificación */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Nombre Base de la Prenda *</label>
                                    <input
                                        type="text"
                                        required
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        placeholder="Ej. Blusa Satinada Manga Larga"
                                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Categoría</label>
                                    <select
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-primary"
                                    >
                                        <option value="Blusas">Blusas</option>
                                        <option value="Pantalones">Pantalones</option>
                                        <option value="Vestidos">Vestidos</option>
                                        <option value="Accesorios">Accesorios</option>
                                    </select>
                                </div>
                            </div>

                            {/* Bloque 2: Finanzas */}
                            <div className="bg-muted/30 p-5 rounded-2xl border border-border grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                <div>
                                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Costo de Inversión (S/.) *</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        required
                                        value={costoInversion}
                                        onChange={(e) => setCostoInversion(e.target.value)}
                                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-bold text-foreground focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Precio de Venta (S/.) *</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        required
                                        value={precioVenta}
                                        onChange={(e) => setPrecioVenta(e.target.value)}
                                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-bold text-foreground focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div className="bg-primary/5 p-3 rounded-xl border border-primary/20 flex flex-col justify-center">
                                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Métrica de Ganancia</span>
                                    <span className="text-lg font-extrabold text-foreground">S/ {margenNeto}</span>
                                    <span className="text-xs text-muted-foreground">Rentabilidad: {porcentajeGanancia}%</span>
                                </div>
                            </div>

                            {/* Bloque 3: Matriz de Tallas */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="text-sm font-bold text-foreground">Matriz de Ingreso (Tallas recibidas)</label>
                                    <button
                                        type="button"
                                        onClick={agregarTalla}
                                        className="flex items-center gap-1 text-xs font-bold text-primary hover:opacity-80"
                                    >
                                        <PlusCircle className="h-4 w-4" /> Añadir Talla
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {tallas.map((t, index) => (
                                        <div key={index} className="flex gap-3 items-center bg-background p-3 rounded-xl border border-border">
                                            <div className="flex-1">
                                                <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Talla</label>
                                                <input
                                                    type="text"
                                                    placeholder="S, M, L..."
                                                    value={t.talla}
                                                    onChange={(e) => {
                                                        const newTallas = [...tallas];
                                                        newTallas[index].talla = e.target.value;
                                                        setTallas(newTallas);
                                                    }}
                                                    className="w-full bg-transparent text-sm font-bold focus:outline-none"
                                                    required
                                                />
                                            </div>
                                            <div className="w-px h-8 bg-border"></div>
                                            <div className="w-32">
                                                <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Cant. Recibida</label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={t.cantidad}
                                                    onChange={(e) => {
                                                        const newTallas = [...tallas];
                                                        newTallas[index].cantidad = parseInt(e.target.value) || 0;
                                                        setTallas(newTallas);
                                                    }}
                                                    className="w-full bg-transparent text-lg font-extrabold text-primary focus:outline-none"
                                                    required
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setTallas(tallas.filter((_, i) => i !== index))}
                                                className="text-muted-foreground hover:text-destructive p-2"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex justify-center items-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
                                >
                                    <Save className="h-5 w-5" />
                                    {loading ? 'Procesando inventario...' : 'Confirmar e Ingresar a Caja Fuerte'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </Layout>
    );
}