"use client";
import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Barcode from 'react-barcode'
import { Layout } from '@/components/Layout'
import { obtenerProductosInventario, registrarRecepcionMercaderia } from '@/app/actions/recepcion'
import { actualizarProducto, cambiarEstadoProducto, ajustarStockManual, obtenerMovimientos, eliminarProducto } from '@/app/actions/productos'
import { useAuth } from '@/context/AuthContext'
import { obtenerColorHex } from '@/lib/colores'
import { Package, Search, Plus, AlertTriangle, Tag, ScanLine, Download, Printer, Barcode as BarcodeIcon, Image as ImageIcon, Eye, TrendingUp, ChevronLeft, ChevronRight, Pencil, History, Ban, RotateCcw, ArrowUpCircle, ArrowDownCircle, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

const STOCK_BAJO_THRESHOLD = 3

// Agrupa las filas de stock por color, para mostrar las tallas de cada color juntas
function agruparPorColor(inventarioTallas: any[]): { color: string; tallas: any[] }[] {
  const mapa = new Map<string, any[]>()
  ;(inventarioTallas || []).forEach(t => {
    const lista = mapa.get(t.color) || []
    lista.push(t)
    mapa.set(t.color, lista)
  })
  return Array.from(mapa.entries())
    .map(([color, tallas]) => ({ color, tallas }))
    .sort((a, b) => a.color.localeCompare(b.color))
}

export default function InventarioPage() {
  const { user } = useAuth()
  const [inventario, setInventario] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [filtroCategoria, setFiltroCategoria] = useState('TODAS')
  const [mostrarInactivos, setMostrarInactivos] = useState(false)
  const [soloStockBajo, setSoloStockBajo] = useState(false)

  // Paginación
  const [paginaActual, setPaginaActual] = useState(1)
  const elementosPorPagina = 10

  // Modal Carga Manual
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [sku, setSku] = useState('')
  const [categoria, setCategoria] = useState('Blusas')
  const [precio, setPrecio] = useState('')
  const [costo, setCosto] = useState('')
  const [imagenUrl, setImagenUrl] = useState('')
  const [uploadingImage, setUploadingImage] = useState(false)
  // Ingreso agrupado por color: cada color con su foto y sus tallas
  type BloqueColor = {
    color: string
    imagen_url: string
    subiendoFoto: boolean
    tallas: { talla: string; cantidad: string }[]
  }
  const [bloques, setBloques] = useState<BloqueColor[]>([
    { color: '', imagen_url: '', subiendoFoto: false, tallas: [{ talla: 'M', cantidad: '' }] },
  ])

  const actualizarBloque = (i: number, cambios: Partial<BloqueColor>) => {
    setBloques(prev => prev.map((b, idx) => idx === i ? { ...b, ...cambios } : b))
  }

  const subirFotoColor = async (indiceBloque: number, file: File) => {
    actualizarBloque(indiceBloque, { subiendoFoto: true })
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'bithia_preset')
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/rrh7xuqq/image/upload`, { method: 'POST', body: formData })
      const data = await res.json()
      if (data.secure_url) {
        actualizarBloque(indiceBloque, { imagen_url: data.secure_url, subiendoFoto: false })
        toast.success('Foto del color subida')
      } else {
        actualizarBloque(indiceBloque, { subiendoFoto: false })
        toast.error(data.error?.message || 'Error al subir la foto')
      }
    } catch {
      actualizarBloque(indiceBloque, { subiendoFoto: false })
      toast.error('Error de conexión al subir la foto')
    }
  }

  // Modal Etiqueta / Código de Barras
  const [etiquetaModalOpen, setEtiquetaModalOpen] = useState(false)

  // Modal Detalle Ampliado de Prenda
  const [detalleModalOpen, setDetalleModalOpen] = useState(false)
  const [productoSeleccionado, setProductoSeleccionado] = useState<any>(null)

  // Edición de prenda (dentro del modal de detalle)
  const [modoEdicion, setModoEdicion] = useState(false)
  // Color elegido en el detalle, para mostrar la foto que le corresponde
  const [colorVistaDetalle, setColorVistaDetalle] = useState<string | null>(null)
  const [editNombre, setEditNombre] = useState('')
  const [editCategoria, setEditCategoria] = useState('Blusas')
  const [editColor, setEditColor] = useState('')
  const [editCosto, setEditCosto] = useState('')
  const [editPrecio, setEditPrecio] = useState('')
  const [editImagenUrl, setEditImagenUrl] = useState('')
  const [editUploadingImage, setEditUploadingImage] = useState(false)
  const [guardandoEdicion, setGuardandoEdicion] = useState(false)

  // Dar de baja / reactivar prenda
  const [confirmBajaOpen, setConfirmBajaOpen] = useState(false)
  const [cambiandoEstado, setCambiandoEstado] = useState(false)
  const [confirmEliminarOpen, setConfirmEliminarOpen] = useState(false)
  const [eliminandoProducto, setEliminandoProducto] = useState(false)

  // Kardex de movimientos
  const [movimientos, setMovimientos] = useState<any[]>([])
  const [loadingMovimientos, setLoadingMovimientos] = useState(false)
  const [mostrarFormAjuste, setMostrarFormAjuste] = useState(false)
  const [ajusteTalla, setAjusteTalla] = useState('')
  const [ajusteColor, setAjusteColor] = useState('')
  const [ajusteTipo, setAjusteTipo] = useState<'ingreso' | 'salida' | 'ajuste'>('salida')
  const [ajusteCantidad, setAjusteCantidad] = useState('')
  const [ajusteMotivo, setAjusteMotivo] = useState('')
  const [guardandoAjuste, setGuardandoAjuste] = useState(false)

  // mostrarCargando=false es el refresco silencioso de fondo: no vuelve a
  // mostrar el spinner ni un toast de error puntual, solo actualiza la
  // lista si la consulta salió bien.
  const cargarInventario = async (mostrarCargando = true) => {
    if (mostrarCargando) setLoading(true)
    const res = await obtenerProductosInventario()
    if (res.success) {
      setInventario(res.productos)
    } else if (mostrarCargando) {
      toast.error('Error al cargar el inventario desde Railway')
    }
    if (mostrarCargando) setLoading(false)
    return res.productos || []
  }

  useEffect(() => {
    cargarInventario()

    // Refresco silencioso cada segundo: si el stock cambió (venta en el
    // POS, o un pedido de bithia-web que ya se confirmó), la dueña lo ve
    // casi al instante sin recargar la página. Se pausa si la pestaña no
    // está a la vista.
    const intervalo = setInterval(() => {
      if (document.visibilityState === "visible") cargarInventario(false)
    }, 1000)
    return () => clearInterval(intervalo)
  }, [])

  const cargarMovimientos = async (productoId: string) => {
    setLoadingMovimientos(true)
    const res = await obtenerMovimientos(productoId)
    setMovimientos(res.movimientos || [])
    setLoadingMovimientos(false)
  }

  // KPIs de salud del inventario (siempre sobre el total, sin filtros de búsqueda/categoría aplicados).
  // Valor y Unidades solo cuentan prendas activas, para que las 4 tarjetas sean consistentes entre sí
  // y coincidan con lo que se ve en la tabla por defecto (que oculta las inactivas).
  const kpis = useMemo(() => {
    let valorTotal = 0
    let unidadesTotales = 0
    let prendasStockBajo = 0
    let prendasInactivas = 0

    inventario.forEach(item => {
      const stockItem = item.inventario_tallas?.reduce((s: number, t: any) => s + t.cantidad, 0) || 0
      if (item.activo === false) {
        prendasInactivas++
        return
      }
      valorTotal += stockItem * Number(item.costo_inversion || 0)
      unidadesTotales += stockItem
      if (stockItem <= STOCK_BAJO_THRESHOLD) {
        prendasStockBajo++
      }
    })

    return { valorTotal, unidadesTotales, prendasStockBajo, prendasInactivas }
  }, [inventario])

  // Filtrado de productos
  const productosFiltrados = useMemo(() => {
    return inventario.filter(item => {
      const itemNombre = item.nombre?.toLowerCase() || ''
      const itemCodigo = item.codigo_barras?.toLowerCase() || ''
      const matchText = itemNombre.includes(busqueda.toLowerCase()) || itemCodigo.includes(busqueda.toLowerCase())
      const matchCat = filtroCategoria === 'TODAS' || item.categoria === filtroCategoria
      const matchActivo = mostrarInactivos ? true : item.activo !== false
      const stockItem = item.inventario_tallas?.reduce((s: number, t: any) => s + t.cantidad, 0) || 0
      const matchStockBajo = soloStockBajo ? stockItem <= STOCK_BAJO_THRESHOLD : true
      return matchText && matchCat && matchActivo && matchStockBajo
    })
  }, [inventario, busqueda, filtroCategoria, mostrarInactivos, soloStockBajo])

  // Resetear a la página 1 cuando cambie la búsqueda o el filtro
  useEffect(() => {
    setPaginaActual(1)
  }, [busqueda, filtroCategoria, mostrarInactivos, soloStockBajo])

  // Productos paginados para renderizar solo 10 a la vez
  const { productosPaginados, totalPaginas } = useMemo(() => {
    const total = Math.ceil(productosFiltrados.length / elementosPorPagina) || 1
    const inicio = (paginaActual - 1) * elementosPorPagina
    const fin = inicio + elementosPorPagina
    return {
      productosPaginados: productosFiltrados.slice(inicio, fin),
      totalPaginas: total
    }
  }, [productosFiltrados, paginaActual])

  // Subida de imagen a Cloudinary (Cloud Name: rrh7xuqq)
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'bithia_preset')

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/rrh7xuqq/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      )
      const data = await res.json()
      if (data.secure_url) {
        setImagenUrl(data.secure_url)
        toast.success('Imagen subida a la nube correctamente')
      } else {
        toast.error(data.error?.message || 'Error al subir la imagen a Cloudinary')
      }
    } catch (error) {
      console.error(error)
      toast.error('Error de conexión al subir la imagen')
    } finally {
      setUploadingImage(false)
    }
  }

  const handleCrearProducto = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nombre || !precio) {
      toast.error('Por favor completa los campos obligatorios')
      return
    }

    // Aplanar los bloques a filas color+talla, descartando lo incompleto
    const bloquesValidos = bloques.filter(b => b.color.trim() !== '')
    const filasValidas = bloquesValidos.flatMap(b =>
      b.tallas
        .filter(t => t.talla.trim() !== '' && parseInt(t.cantidad) > 0)
        .map(t => ({ talla: t.talla.trim(), color: b.color.trim(), cantidad: parseInt(t.cantidad) }))
    )
    if (filasValidas.length === 0) {
      toast.error('Agrega al menos un color con su talla y cantidad')
      return
    }

    // El color del producto resume los colores cargados, para mostrarlo en listados
    const coloresUnicos = Array.from(new Set(filasValidas.map(v => v.color)))
    // La primera foto de color sirve de imagen general de la prenda
    const primeraFoto = bloquesValidos.find(b => b.imagen_url)?.imagen_url

    const res = await registrarRecepcionMercaderia({
      codigo_barras: sku || undefined,
      nombre,
      categoria,
      color_principal: coloresUnicos.join(', '),
      costo_inversion: parseFloat(costo) || 0,
      precio_venta: parseFloat(precio),
      imagen_url: imagenUrl || primeraFoto || undefined,
      tallas: filasValidas,
      fotosPorColor: bloquesValidos
        .filter(b => b.imagen_url)
        .map(b => ({ color: b.color.trim(), imagen_url: b.imagen_url })),
      usuarioNombre: user?.name,
      usuario_id: user?.id,
    })

    if (res.success) {
      toast.success(res.message || 'Prenda registrada con éxito')
      setIsModalOpen(false)
      setNombre('')
      setSku('')
      setPrecio('')
      setCosto('')
      setImagenUrl('')
      setBloques([{ color: '', imagen_url: '', subiendoFoto: false, tallas: [{ talla: 'M', cantidad: '' }] }])
      cargarInventario()
    } else {
      toast.error(res.error || 'Error al guardar la prenda')
    }
  }

  // Abre el modal de detalle para una prenda, reseteando sub-vistas (edición/kardex)
  const handleAbrirDetalle = (item: any) => {
    setProductoSeleccionado(item)
    setModoEdicion(false)
    setMostrarFormAjuste(false)
    setMovimientos([])
    // Arranca mostrando el primer color de la prenda
    setColorVistaDetalle(agruparPorColor(item.inventario_tallas)[0]?.color ?? null)
    setDetalleModalOpen(true)
    cargarMovimientos(item.id)
  }

  const handleCerrarDetalle = () => {
    setDetalleModalOpen(false)
    setModoEdicion(false)
    setMostrarFormAjuste(false)
  }

  const handleAbrirEdicion = () => {
    setEditNombre(productoSeleccionado.nombre || '')
    setEditCategoria(productoSeleccionado.categoria || 'Blusas')
    setEditColor(productoSeleccionado.color_principal || '')
    setEditCosto(String(productoSeleccionado.costo_inversion || ''))
    setEditPrecio(String(productoSeleccionado.precio_venta || ''))
    setEditImagenUrl(productoSeleccionado.imagen_url || '')
    setModoEdicion(true)
  }

  const handleEditImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setEditUploadingImage(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'bithia_preset')

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/rrh7xuqq/image/upload`, { method: 'POST', body: formData })
      const data = await res.json()
      if (data.secure_url) {
        setEditImagenUrl(data.secure_url)
        toast.success('Imagen subida a la nube correctamente')
      } else {
        toast.error(data.error?.message || 'Error al subir la imagen a Cloudinary')
      }
    } catch (error) {
      console.error(error)
      toast.error('Error de conexión al subir la imagen')
    } finally {
      setEditUploadingImage(false)
    }
  }

  const handleGuardarEdicion = async () => {
    if (!editNombre || !editPrecio) {
      toast.error('Nombre y precio son obligatorios')
      return
    }
    setGuardandoEdicion(true)
    const res = await actualizarProducto(productoSeleccionado.id, {
      nombre: editNombre,
      categoria: editCategoria,
      color_principal: editColor || 'General',
      costo_inversion: parseFloat(editCosto) || 0,
      precio_venta: parseFloat(editPrecio),
      imagen_url: editImagenUrl || undefined,
    })
    setGuardandoEdicion(false)

    if (res.success) {
      toast.success(res.message)
      const productosActualizados = await cargarInventario()
      const actualizado = productosActualizados.find((p: any) => p.id === productoSeleccionado.id)
      if (actualizado) setProductoSeleccionado(actualizado)
      setModoEdicion(false)
    } else {
      toast.error(res.error)
    }
  }

  const handleConfirmarCambioEstado = async () => {
    setCambiandoEstado(true)
    const nuevoEstado = productoSeleccionado.activo === false
    const res = await cambiarEstadoProducto(productoSeleccionado.id, nuevoEstado)
    setCambiandoEstado(false)
    setConfirmBajaOpen(false)

    if (res.success) {
      toast.success(res.message)
      handleCerrarDetalle()
      cargarInventario()
    } else {
      toast.error(res.error)
    }
  }

  const handleConfirmarEliminar = async () => {
    setEliminandoProducto(true)
    const res = await eliminarProducto(productoSeleccionado.id)
    setEliminandoProducto(false)
    setConfirmEliminarOpen(false)

    if (res.success) {
      toast.success(res.message)
      handleCerrarDetalle()
      cargarInventario()
    } else {
      toast.error(res.error)
    }
  }

  // Foto del color que se está viendo; si ese color no tiene, la general de la prenda
  const fotoDelColorSeleccionado =
    productoSeleccionado?.producto_colores?.find((c: any) => c.color === colorVistaDetalle)?.imagen_url
    || productoSeleccionado?.imagen_url
    || null

  const handleGuardarAjuste = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ajusteTalla || !ajusteColor.trim() || !ajusteCantidad || !ajusteMotivo.trim()) {
      toast.error('Completa color, talla, cantidad y motivo del ajuste')
      return
    }
    setGuardandoAjuste(true)
    const res = await ajustarStockManual({
      producto_id: productoSeleccionado.id,
      talla: ajusteTalla,
      color: ajusteColor.trim(),
      cantidad: parseInt(ajusteCantidad),
      tipo: ajusteTipo,
      motivo: ajusteMotivo.trim(),
      usuarioNombre: user?.name,
      usuario_id: user?.id,
    })
    setGuardandoAjuste(false)

    if (res.success) {
      toast.success(res.message)
      setAjusteTalla('')
      setAjusteColor('')
      setAjusteCantidad('')
      setAjusteMotivo('')
      setAjusteTipo('salida')
      setMostrarFormAjuste(false)
      await cargarMovimientos(productoSeleccionado.id)
      const productosActualizados = await cargarInventario()
      const actualizado = productosActualizados.find((p: any) => p.id === productoSeleccionado.id)
      if (actualizado) setProductoSeleccionado(actualizado)
    } else {
      toast.error(res.error)
    }
  }

  // Exportar a CSV ordenado
  const exportarCSV = () => {
    if (productosFiltrados.length === 0) {
      toast.warning('No hay datos para exportar')
      return
    }

    // Escapa comillas dobles duplicándolas, para que un nombre como Vestido "Luna" no rompa las columnas
    const csvField = (value: string) => `"${String(value).replace(/"/g, '""')}"`

    const headers = ['Nombre', 'Código / EAN', 'Lote', 'Categoría', 'Precio Venta (S/.)', 'Costo Inversión (S/.)', 'Margen (S/.)', 'Stock Total', 'Desglose Color y Talla']
    const rows = productosFiltrados.map(item => {
      const totalStock = item.inventario_tallas?.reduce((acc: number, t: any) => acc + t.cantidad, 0) || 0
      const tallasString = item.inventario_tallas?.map((t: any) => `${t.color} ${t.talla}: ${t.cantidad}`).join(' | ') || 'Sin stock'
      const margen = Number(item.precio_venta || 0) - Number(item.costo_inversion || 0)

      return [
        csvField(item.nombre),
        csvField(item.codigo_barras || 'N/A'),
        csvField(item.lote || 'N/A'),
        csvField(item.categoria),
        Number(item.precio_venta || 0).toFixed(2),
        Number(item.costo_inversion || 0).toFixed(2),
        margen.toFixed(2),
        totalStock,
        csvField(tallasString)
      ]
    })

    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n")
    // BOM al inicio: sin esto, Excel en Windows interpreta el UTF-8 como ANSI y las tildes/ñ salen corruptas
    const blob = new Blob(["﻿" + csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `inventario_bithia_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    toast.success('Reporte de inventario exportado con éxito')
  }

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">Inventario y Stock</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Control global de prendas, tallas, costos y existencias en boutique.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={exportarCSV}
              className="flex items-center justify-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 text-sm font-bold text-foreground shadow-sm hover:bg-muted/50 transition-all"
            >
              <Download className="h-4 w-4" /> Exportar CSV
            </button>
            <Link
              href="/inventario/recepcion"
              className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-bold text-foreground shadow-sm hover:opacity-95 transition-all"
            >
              <ScanLine className="h-4 w-4" /> Escáner Rápido
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
            >
              <Plus className="h-4 w-4" /> Carga Manual
            </button>
          </div>
        </div>

        {/* KPIs de Salud del Inventario */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Valor de Inventario</p>
            <p className="text-xl font-extrabold text-foreground mt-1">S/ {kpis.valorTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Capital invertido en stock</p>
          </div>
          <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Unidades Totales</p>
            <p className="text-xl font-extrabold text-foreground mt-1">{kpis.unidadesTotales}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">En {inventario.length} prendas registradas</p>
          </div>
          <button
            type="button"
            onClick={() => setSoloStockBajo(v => !v)}
            className={`text-left rounded-2xl p-5 shadow-sm border transition-all ${soloStockBajo ? 'bg-amber-500/10 border-amber-500' : 'bg-card border-border hover:border-amber-500/50'}`}
          >
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
              <AlertTriangle className="h-3 w-3 text-amber-500" /> Stock Bajo
            </p>
            <p className="text-xl font-extrabold text-amber-600 mt-1">{kpis.prendasStockBajo}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{soloStockBajo ? 'Filtrando — clic para quitar' : 'Clic para filtrar'}</p>
          </button>
          <div className="rounded-2xl bg-card p-5 shadow-sm border border-border">
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Inactivas</p>
            <p className="text-xl font-extrabold text-foreground mt-1">{kpis.prendasInactivas}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">Dadas de baja</p>
          </div>
        </div>

        {/* Filtros y Buscador */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre o código de barras..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
          <select
            value={filtroCategoria}
            onChange={e => setFiltroCategoria(e.target.value)}
            className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          >
            <option value="TODAS">Todas las Categorías</option>
            <option value="Blusas">Blusas</option>
            <option value="Pantalones">Pantalones</option>
            <option value="Vestidos">Vestidos</option>
            <option value="Accesorios">Accesorios</option>
          </select>
          <label className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm cursor-pointer select-none whitespace-nowrap">
            <input
              type="checkbox"
              checked={mostrarInactivos}
              onChange={e => setMostrarInactivos(e.target.checked)}
              className="rounded accent-primary h-4 w-4"
            />
            Mostrar inactivos
          </label>
        </div>

        {/* Tabla de Inventario con Paginación */}
        <div className="rounded-2xl bg-card shadow-sm border border-border overflow-hidden flex flex-col justify-between">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  <th className="py-3 px-6">Producto</th>
                  <th className="py-3 px-4">Código / EAN / Lote</th>
                  <th className="py-3 px-4">Categoría</th>
                  <th className="py-3 px-4">Tallas y Stock</th>
                  <th className="py-3 px-4 text-right">Precio Venta</th>
                  <th className="py-3 px-4 text-right">Stock Total</th>
                  <th className="py-3 px-6 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-muted-foreground">
                      Sincronizando inventario con la nube...
                    </td>
                  </tr>
                ) : productosPaginados.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-muted-foreground">
                      No se encontraron prendas registradas en el inventario.
                    </td>
                  </tr>
                ) : (
                  productosPaginados.map(item => {
                    const precioSeguro = Number(item.precio_venta || 0)
                    const totalStock = item.inventario_tallas?.reduce((acc: number, t: any) => acc + t.cantidad, 0) || 0

                    return (
                      <tr key={item.id} className={`hover:bg-muted/30 transition-colors ${item.activo === false ? 'opacity-50' : ''}`}>
                        <td className="py-4 px-6 font-semibold text-foreground flex items-center gap-3">
                          {item.imagen_url ? (
                            <img src={item.imagen_url} alt={item.nombre} className="h-10 w-10 rounded-xl object-cover border border-border shadow-sm" />
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <Package className="h-5 w-5" />
                            </div>
                          )}
                          <div>
                            <p className="font-bold text-foreground flex items-center gap-2">
                              {item.nombre || 'Sin nombre'}
                              {item.activo === false && (
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-destructive/10 text-destructive">Inactivo</span>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">Inversión: S/ {Number(item.costo_inversion || 0).toFixed(2)}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-mono text-xs text-foreground font-bold">{item.codigo_barras || 'N/A'}</div>
                          {item.lote && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-extrabold bg-primary/10 text-primary font-mono">
                              Lote: {item.lote}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-foreground">
                            <Tag className="h-3 w-3" /> {item.categoria || 'General'}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            {item.inventario_tallas?.map((t: any) => (
                              <span key={t.id} className="px-2 py-0.5 bg-muted rounded text-xs font-bold text-foreground flex items-center gap-1" title={`${t.color} · Talla ${t.talla}`}>
                                <span
                                  className="h-2 w-2 rounded-full border border-black/10 flex-shrink-0"
                                  style={{ backgroundColor: obtenerColorHex(t.color) }}
                                />
                                {t.talla}: {t.cantidad}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-foreground">S/ {precioSeguro.toFixed(2)}</td>
                        <td className="py-4 px-4 text-right">
                          <span className={`font-extrabold ${totalStock <= STOCK_BAJO_THRESHOLD ? 'text-destructive' : 'text-foreground'}`}>
                            {totalStock} {totalStock <= STOCK_BAJO_THRESHOLD && '⚠️'}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => handleAbrirDetalle(item)}
                              title="Ver Detalle, Editar y Kardex"
                              className="p-2 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all inline-flex items-center gap-1 text-xs font-bold"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => {
                                setProductoSeleccionado(item)
                                setEtiquetaModalOpen(true)
                              }}
                              title="Generar Etiqueta"
                              className="p-2 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground transition-all inline-flex items-center gap-1 text-xs font-bold"
                            >
                              <BarcodeIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Barra de Paginación Inferior */}
          {!loading && productosFiltrados.length > 0 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/20">
              <p className="text-xs font-medium text-muted-foreground">
                Mostrando <span className="font-bold text-foreground">{((paginaActual - 1) * elementosPorPagina) + 1}</span> a <span className="font-bold text-foreground">{Math.min(paginaActual * elementosPorPagina, productosFiltrados.length)}</span> de <span className="font-bold text-foreground">{productosFiltrados.length}</span> prendas
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
                  disabled={paginaActual === 1}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border bg-card text-xs font-bold text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <ChevronLeft className="h-4 w-4" /> Anterior
                </button>
                <span className="text-xs font-bold px-3 py-1 bg-secondary text-foreground rounded-xl">
                  Página {paginaActual} de {totalPaginas}
                </span>
                <button
                  onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))}
                  disabled={paginaActual === totalPaginas}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-border bg-card text-xs font-bold text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  Siguiente <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Carga Manual */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-lg rounded-3xl bg-background border border-border p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <h3 className="text-xl font-extrabold text-foreground">Registrar Nueva Prenda</h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground font-bold transition-colors"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCrearProducto} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Nombre del Producto *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Vestido Elegante Nude"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Código / SKU</label>
                    <input
                      type="text"
                      placeholder="Auto-generar si está vacío"
                      value={sku}
                      onChange={e => setSku(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Categoría</label>
                    <select
                      value={categoria}
                      onChange={e => setCategoria(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    >
                      <option value="Blusas">Blusas</option>
                      <option value="Pantalones">Pantalones</option>
                      <option value="Vestidos">Vestidos</option>
                      <option value="Accesorios">Accesorios</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Fotografía de la Prenda</label>
                  <div className="flex items-center gap-4">
                    {imagenUrl ? (
                      <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-border shadow-sm group">
                        <img src={imagenUrl} alt="Preview" className="h-full w-full object-cover" />
                        <button
                          type="button"
                          onClick={() => setImagenUrl('')}
                          className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold"
                        >
                          Quitar
                        </button>
                      </div>
                    ) : (
                      <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl p-6 cursor-pointer hover:border-primary transition-all bg-card/50">
                        <ImageIcon className="h-6 w-6 text-muted-foreground mb-1" />
                        <span className="text-xs font-bold text-foreground">
                          {uploadingImage ? 'Subiendo a Cloudinary...' : 'Haz clic para seleccionar o tomar foto'}
                        </span>
                        <span className="text-[10px] text-muted-foreground mt-0.5">PNG, JPG o WEBP</span>
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploadingImage} />
                      </label>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Costo (S/.)</label>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="25.00"
                      value={costo}
                      onChange={e => setCosto(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Precio (S/.) *</label>
                    <input
                      type="number"
                      step="0.1"
                      required
                      placeholder="49.90"
                      value={precio}
                      onChange={e => setPrecio(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                  </div>
                </div>

                {/* Stock inicial agrupado por color, cada uno con su foto */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">Colores y Stock Inicial *</label>
                    <button
                      type="button"
                      onClick={() => setBloques([...bloques, { color: '', imagen_url: '', subiendoFoto: false, tallas: [{ talla: 'M', cantidad: '' }] }])}
                      className="flex items-center gap-1 text-xs font-bold text-primary hover:opacity-80"
                    >
                      <Plus className="h-3.5 w-3.5" /> Añadir Color
                    </button>
                  </div>
                  <p className="text-[11px] text-muted-foreground mb-3">
                    Cada color con su foto y las tallas que tienes de ese color.
                  </p>

                  <div className="space-y-4">
                    {bloques.map((bloque, bi) => (
                      <div key={bi} className="bg-card p-4 rounded-2xl border border-border space-y-3">
                        <div className="flex gap-3 items-start">
                          {/* Foto de este color */}
                          <div className="flex-shrink-0">
                            {bloque.imagen_url ? (
                              <div className="relative h-20 w-20 rounded-xl overflow-hidden border border-border shadow-sm group">
                                <img src={bloque.imagen_url} alt={bloque.color} className="h-full w-full object-cover" />
                                <button
                                  type="button"
                                  onClick={() => actualizarBloque(bi, { imagen_url: '' })}
                                  className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold"
                                >
                                  Quitar
                                </button>
                              </div>
                            ) : (
                              <label className="h-20 w-20 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary transition-all text-center px-1">
                                <ImageIcon className="h-4 w-4 text-muted-foreground mb-0.5" />
                                <span className="text-[9px] font-bold text-muted-foreground leading-tight">
                                  {bloque.subiendoFoto ? 'Subiendo...' : 'Foto de este color'}
                                </span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                  disabled={bloque.subiendoFoto}
                                  onChange={e => {
                                    const file = e.target.files?.[0]
                                    if (file) subirFotoColor(bi, file)
                                  }}
                                />
                              </label>
                            )}
                          </div>

                          {/* Nombre del color */}
                          <div className="flex-1 min-w-0">
                            <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Color</label>
                            <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2">
                              <span
                                className="h-4 w-4 rounded-full border border-black/10 shadow-sm flex-shrink-0"
                                style={{ backgroundColor: obtenerColorHex(bloque.color) }}
                              />
                              <input
                                type="text"
                                placeholder="Negro, Rosa, Floreado..."
                                value={bloque.color}
                                onChange={e => actualizarBloque(bi, { color: e.target.value })}
                                className="w-full bg-transparent text-sm font-bold text-foreground focus:outline-none"
                              />
                            </div>
                          </div>

                          {bloques.length > 1 && (
                            <button
                              type="button"
                              onClick={() => setBloques(bloques.filter((_, i) => i !== bi))}
                              className="text-muted-foreground hover:text-destructive p-1.5 mt-5"
                              title="Quitar este color"
                            >
                              ✕
                            </button>
                          )}
                        </div>

                        {/* Tallas de este color */}
                        <div className="pl-1">
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase">
                              Tallas de {bloque.color.trim() || 'este color'}
                            </label>
                            <button
                              type="button"
                              onClick={() => actualizarBloque(bi, { tallas: [...bloque.tallas, { talla: '', cantidad: '' }] })}
                              className="text-[11px] font-bold text-primary hover:opacity-80"
                            >
                              + Añadir talla
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {bloque.tallas.map((t, ti) => (
                              <div key={ti} className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2">
                                <select
                                  value={t.talla}
                                  onChange={e => {
                                    const nuevas = [...bloque.tallas]
                                    nuevas[ti].talla = e.target.value
                                    actualizarBloque(bi, { tallas: nuevas })
                                  }}
                                  className="bg-transparent text-sm font-bold text-foreground focus:outline-none"
                                >
                                  <option value="">--</option>
                                  <option value="XS">XS</option>
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="L">L</option>
                                  <option value="XL">XL</option>
                                  <option value="Única">Única</option>
                                </select>
                                <span className="text-muted-foreground text-xs">×</span>
                                <input
                                  type="number"
                                  min="1"
                                  placeholder="0"
                                  value={t.cantidad}
                                  onChange={e => {
                                    const nuevas = [...bloque.tallas]
                                    nuevas[ti].cantidad = e.target.value
                                    actualizarBloque(bi, { tallas: nuevas })
                                  }}
                                  className="w-12 bg-transparent text-base font-extrabold text-primary focus:outline-none"
                                />
                                {bloque.tallas.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => actualizarBloque(bi, { tallas: bloque.tallas.filter((_, i) => i !== ti) })}
                                    className="text-muted-foreground hover:text-destructive text-xs"
                                  >
                                    ✕
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-6 border-t border-border mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-2xl px-5 py-3 text-sm font-bold text-muted-foreground hover:bg-muted transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={uploadingImage}
                    className="rounded-2xl bg-primary px-6 py-3 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    Guardar Prenda
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal Detalle Ampliado / Editar / Kardex */}
        {detalleModalOpen && productoSeleccionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-xl rounded-3xl bg-background border border-border p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Package className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground flex items-center gap-2">
                      {productoSeleccionado.nombre}
                      {productoSeleccionado.activo === false && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">Inactivo</span>
                      )}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">SKU: {productoSeleccionado.codigo_barras || 'N/A'}</p>
                    {productoSeleccionado.lote && (
                      <p className="text-xs text-primary font-bold font-mono mt-0.5">Lote de Ingreso: {productoSeleccionado.lote}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {!modoEdicion && (
                    <button
                      type="button"
                      onClick={handleAbrirEdicion}
                      title="Editar prenda"
                      className="h-8 w-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center text-foreground transition-colors"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setConfirmBajaOpen(true)}
                    title={productoSeleccionado.activo === false ? 'Reactivar prenda' : 'Dar de baja (ocultar sin borrar)'}
                    className="h-8 w-8 rounded-full bg-secondary hover:bg-amber-500 hover:text-white flex items-center justify-center text-foreground transition-colors"
                  >
                    {productoSeleccionado.activo === false ? <RotateCcw className="h-3.5 w-3.5" /> : <Ban className="h-3.5 w-3.5" />}
                  </button>
                  {!modoEdicion && (
                    <button
                      type="button"
                      onClick={() => setConfirmEliminarOpen(true)}
                      title="Eliminar prenda permanentemente"
                      className="h-8 w-8 rounded-full bg-secondary hover:bg-destructive hover:text-white flex items-center justify-center text-foreground transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleCerrarDetalle}
                    className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground font-bold transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {modoEdicion ? (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Fotografía</label>
                      <div className="flex items-center gap-4">
                        {editImagenUrl ? (
                          <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-border shadow-sm group flex-shrink-0">
                            <img src={editImagenUrl} alt="Preview" className="h-full w-full object-cover" />
                            <button
                              type="button"
                              onClick={() => setEditImagenUrl('')}
                              className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold"
                            >
                              Quitar
                            </button>
                          </div>
                        ) : (
                          <label className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl p-4 cursor-pointer hover:border-primary transition-all bg-card/50">
                            <ImageIcon className="h-5 w-5 text-muted-foreground mb-1" />
                            <span className="text-xs font-bold text-foreground">
                              {editUploadingImage ? 'Subiendo...' : 'Subir foto'}
                            </span>
                            <input type="file" accept="image/*" onChange={handleEditImageUpload} className="hidden" disabled={editUploadingImage} />
                          </label>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Nombre *</label>
                        <input
                          type="text"
                          required
                          value={editNombre}
                          onChange={e => setEditNombre(e.target.value)}
                          className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Categoría</label>
                          <select
                            value={editCategoria}
                            onChange={e => setEditCategoria(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="Blusas">Blusas</option>
                            <option value="Pantalones">Pantalones</option>
                            <option value="Vestidos">Vestidos</option>
                            <option value="Accesorios">Accesorios</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Color</label>
                          <input
                            type="text"
                            value={editColor}
                            onChange={e => setEditColor(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Costo (S/.)</label>
                          <input
                            type="number"
                            step="0.1"
                            value={editCosto}
                            onChange={e => setEditCosto(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Precio (S/.) *</label>
                          <input
                            type="number"
                            step="0.1"
                            required
                            value={editPrecio}
                            onChange={e => setEditPrecio(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                    <button
                      type="button"
                      onClick={() => setModoEdicion(false)}
                      className="rounded-2xl px-5 py-2.5 text-sm font-bold text-muted-foreground hover:bg-muted transition-all"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={handleGuardarEdicion}
                      disabled={guardandoEdicion || editUploadingImage}
                      className="rounded-2xl bg-primary px-6 py-2.5 text-sm font-extrabold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
                    >
                      {guardandoEdicion ? 'Guardando...' : 'Guardar Cambios'}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center justify-center bg-muted/40 rounded-2xl p-4 border border-border/60 min-h-[220px]">
                      {fotoDelColorSeleccionado ? (
                        <img
                          src={fotoDelColorSeleccionado}
                          alt={`${productoSeleccionado.nombre} ${colorVistaDetalle || ''}`}
                          className="max-h-[240px] w-full object-cover rounded-xl shadow-md border border-border"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                          <ImageIcon className="h-12 w-12 mb-2 opacity-50" />
                          <p className="text-xs font-medium">Sin fotografía registrada</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Categoría</span>
                          <p className="text-sm font-bold text-foreground mt-0.5 flex items-center gap-1.5">
                            <Tag className="h-3.5 w-3.5 text-primary" /> {productoSeleccionado.categoria}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Costo Inversión</span>
                            <p className="text-sm font-bold text-foreground mt-0.5">S/ {Number(productoSeleccionado.costo_inversion || 0).toFixed(2)}</p>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Precio Venta</span>
                            <p className="text-base font-black text-primary mt-0.5">S/ {Number(productoSeleccionado.precio_venta || 0).toFixed(2)}</p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-border">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Margen de Ganancia Neto</span>
                          <p className="text-sm font-extrabold text-emerald-600 mt-0.5 flex items-center gap-1">
                            <TrendingUp className="h-4 w-4" />
                            S/ {(Number(productoSeleccionado.precio_venta || 0) - Number(productoSeleccionado.costo_inversion || 0)).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">Desglose de Stock por Color y Talla</span>
                        <div className="space-y-2">
                          {agruparPorColor(productoSeleccionado.inventario_tallas).map(grupo => (
                            <div key={grupo.color}>
                              {/* Al tocar el color se muestra su foto arriba */}
                              <button
                                type="button"
                                onClick={() => setColorVistaDetalle(grupo.color)}
                                title={`Ver foto de ${grupo.color}`}
                                className={`flex items-center gap-1.5 mb-1 rounded-lg px-1.5 py-0.5 -ml-1.5 transition-all ${
                                  colorVistaDetalle === grupo.color ? 'bg-primary/10' : 'hover:bg-muted'
                                }`}
                              >
                                <span
                                  className={`h-3 w-3 rounded-full border shadow-sm flex-shrink-0 transition-all ${
                                    colorVistaDetalle === grupo.color ? 'border-primary border-2 scale-110' : 'border-black/10'
                                  }`}
                                  style={{ backgroundColor: obtenerColorHex(grupo.color) }}
                                />
                                <span className={`text-[11px] font-bold ${colorVistaDetalle === grupo.color ? 'text-primary' : 'text-foreground'}`}>
                                  {grupo.color}
                                </span>
                              </button>
                              <div className="flex flex-wrap gap-2 pl-4.5">
                                {grupo.tallas.map((t: any) => (
                                  <div key={t.id} className="px-3 py-1.5 bg-secondary rounded-xl text-xs font-bold text-foreground flex items-center gap-1.5 shadow-sm">
                                    <span>{t.talla}:</span>
                                    <span className="text-primary font-extrabold">{t.cantidad} un.</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kardex de Movimientos */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                        <History className="h-4 w-4 text-primary" /> Kardex de Movimientos
                      </h4>
                      <button
                        type="button"
                        onClick={() => setMostrarFormAjuste(v => !v)}
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                      >
                        <Plus className="h-3.5 w-3.5" /> Ajustar Stock
                      </button>
                    </div>

                    {mostrarFormAjuste && (
                      <form onSubmit={handleGuardarAjuste} className="mb-4 p-4 rounded-2xl bg-muted/30 border border-border grid grid-cols-2 sm:grid-cols-4 gap-3 items-end">
                        <div>
                          <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Color</label>
                          <div className="flex items-center gap-1.5">
                            <span
                              className="h-3.5 w-3.5 rounded-full border border-black/10 flex-shrink-0"
                              style={{ backgroundColor: obtenerColorHex(ajusteColor) }}
                            />
                            <input
                              type="text"
                              list="colores-existentes"
                              placeholder="Negro, Rosa..."
                              value={ajusteColor}
                              onChange={e => setAjusteColor(e.target.value)}
                              required
                              className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-foreground"
                            />
                          </div>
                          <datalist id="colores-existentes">
                            {Array.from(new Set(productoSeleccionado.inventario_tallas?.map((t: any) => t.color) || [])).map((c: any) => (
                              <option key={c} value={c} />
                            ))}
                          </datalist>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Talla</label>
                          <input
                            type="text"
                            list="tallas-existentes"
                            placeholder="S, M, L..."
                            value={ajusteTalla}
                            onChange={e => setAjusteTalla(e.target.value)}
                            required
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-foreground"
                          />
                          <datalist id="tallas-existentes">
                            {Array.from(new Set(productoSeleccionado.inventario_tallas?.map((t: any) => t.talla) || [])).map((t: any) => (
                              <option key={t} value={t} />
                            ))}
                          </datalist>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Tipo</label>
                          <select
                            value={ajusteTipo}
                            onChange={e => setAjusteTipo(e.target.value as 'ingreso' | 'salida' | 'ajuste')}
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-foreground"
                          >
                            <option value="salida">Salida (merma/pérdida)</option>
                            <option value="ajuste">Ajuste (corrección)</option>
                            <option value="ingreso">Ingreso manual</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Cantidad</label>
                          <input
                            type="number"
                            min="1"
                            required
                            value={ajusteCantidad}
                            onChange={e => setAjusteCantidad(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm font-bold text-foreground"
                          />
                        </div>
                        <div className="flex items-end">
                          <button
                            type="button"
                            onClick={() => setMostrarFormAjuste(false)}
                            className="w-full rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground hover:bg-muted transition-all"
                          >
                            Cancelar
                          </button>
                        </div>
                        <div className="col-span-2 sm:col-span-4">
                          <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">Motivo *</label>
                          <input
                            type="text"
                            required
                            placeholder="Ej. Prenda manchada, conteo físico, devolución a proveedor..."
                            value={ajusteMotivo}
                            onChange={e => setAjusteMotivo(e.target.value)}
                            className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground"
                          />
                        </div>
                        <div className="col-span-2 sm:col-span-4 flex justify-end">
                          <button
                            type="submit"
                            disabled={guardandoAjuste}
                            className="rounded-xl bg-primary px-5 py-2.5 text-xs font-extrabold text-primary-foreground shadow-sm hover:opacity-95 transition-all disabled:opacity-50"
                          >
                            {guardandoAjuste ? 'Guardando...' : 'Registrar Movimiento'}
                          </button>
                        </div>
                      </form>
                    )}

                    <div className="max-h-[220px] overflow-y-auto space-y-2 pr-1">
                      {loadingMovimientos ? (
                        <p className="text-xs text-muted-foreground text-center py-4">Cargando historial...</p>
                      ) : movimientos.length === 0 ? (
                        <p className="text-xs text-muted-foreground text-center py-4">Sin movimientos registrados todavía.</p>
                      ) : (
                        movimientos.map((m: any) => (
                          <div key={m.id} className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-muted/30 border border-border/60">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className={`h-7 w-7 flex-shrink-0 rounded-full flex items-center justify-center ${m.tipo === 'salida' ? 'bg-destructive/10 text-destructive' : m.tipo === 'ajuste' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                {m.tipo === 'salida' ? <ArrowDownCircle className="h-4 w-4" /> : <ArrowUpCircle className="h-4 w-4" />}
                              </span>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-foreground truncate">{m.motivo || (m.tipo === 'ingreso' ? 'Ingreso de stock' : m.tipo === 'salida' ? 'Salida de stock' : 'Ajuste de stock')}</p>
                                <p className="text-[10px] text-muted-foreground">{m.color} · Talla {m.talla} · {new Date(m.fecha_hora).toLocaleString('es-PE', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</p>
                              </div>
                            </div>
                            <span className={`text-sm font-extrabold flex-shrink-0 ${m.tipo === 'salida' ? 'text-destructive' : 'text-emerald-600'}`}>
                              {m.tipo === 'salida' ? '-' : '+'}{m.cantidad}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-6 border-t border-border mt-6">
                    <button
                      type="button"
                      onClick={handleCerrarDetalle}
                      className="rounded-2xl bg-secondary px-6 py-2.5 text-xs font-bold text-foreground hover:opacity-90 transition-all"
                    >
                      Cerrar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Modal Confirmación Dar de Baja / Reactivar */}
        {confirmBajaOpen && productoSeleccionado && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-3xl bg-background border border-border p-6 shadow-2xl text-center">
              <div className={`h-12 w-12 rounded-full mx-auto mb-4 flex items-center justify-center ${productoSeleccionado.activo === false ? 'bg-emerald-100 text-emerald-600' : 'bg-destructive/10 text-destructive'}`}>
                {productoSeleccionado.activo === false ? <RotateCcw className="h-6 w-6" /> : <Ban className="h-6 w-6" />}
              </div>
              <h4 className="text-base font-extrabold text-foreground mb-1">
                {productoSeleccionado.activo === false ? '¿Reactivar esta prenda?' : '¿Dar de baja esta prenda?'}
              </h4>
              <p className="text-xs text-muted-foreground mb-6">
                {productoSeleccionado.activo === false
                  ? `"${productoSeleccionado.nombre}" volverá a aparecer en el listado activo del inventario.`
                  : `"${productoSeleccionado.nombre}" dejará de aparecer en el inventario activo. Su historial de ventas y movimientos se conserva.`}
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setConfirmBajaOpen(false)}
                  className="flex-1 rounded-xl bg-secondary py-2.5 text-xs font-bold text-foreground hover:opacity-90 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmarCambioEstado}
                  disabled={cambiandoEstado}
                  className={`flex-1 rounded-xl py-2.5 text-xs font-extrabold text-white shadow-md transition-all disabled:opacity-50 ${productoSeleccionado.activo === false ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-destructive hover:opacity-90'}`}
                >
                  {cambiandoEstado ? 'Procesando...' : productoSeleccionado.activo === false ? 'Reactivar' : 'Dar de Baja'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Confirmación Eliminar Permanentemente */}
        {confirmEliminarOpen && productoSeleccionado && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-3xl bg-background border border-border p-6 shadow-2xl text-center">
              <div className="h-12 w-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-destructive/10 text-destructive">
                <Trash2 className="h-6 w-6" />
              </div>
              <h4 className="text-base font-extrabold text-foreground mb-1">¿Eliminar esta prenda?</h4>
              <p className="text-xs text-muted-foreground mb-4">
                "{productoSeleccionado.nombre}" se borrará de forma permanente, junto con su stock y su historial de movimientos. Esta acción no se puede deshacer.
              </p>
              <div className="text-[11px] text-muted-foreground bg-muted/50 border border-border rounded-xl p-3 mb-6 text-left">
                Si la prenda ya tuvo ventas, el sistema no la va a eliminar para no perder el historial. En ese caso usa <span className="font-bold text-foreground">Dar de baja</span>, que la oculta del inventario.
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setConfirmEliminarOpen(false)}
                  className="flex-1 rounded-xl bg-secondary py-2.5 text-xs font-bold text-foreground hover:opacity-90 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleConfirmarEliminar}
                  disabled={eliminandoProducto}
                  className="flex-1 rounded-xl bg-destructive py-2.5 text-xs font-extrabold text-white shadow-md hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {eliminandoProducto ? 'Eliminando...' : 'Eliminar'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Etiqueta */}
        {etiquetaModalOpen && productoSeleccionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
            <div className="w-full max-w-sm rounded-3xl bg-white border border-border p-8 text-black shadow-2xl relative text-center">
              <h4 className="font-extrabold text-lg text-slate-900 mb-0.5">BITHIA BRAND</h4>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4">Etiqueta de Prenda</p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6 flex flex-col items-center">
                <p className="font-bold text-slate-800 text-sm mb-1">{productoSeleccionado.nombre}</p>
                <p className="text-xs text-slate-500 mb-3">Categoría: {productoSeleccionado.categoria}</p>

                <div className="my-2 bg-white p-2 rounded-xl border border-slate-200 shadow-sm overflow-hidden w-full flex justify-center">
                  <Barcode
                    value={productoSeleccionado.codigo_barras || "BITHIA-001"}
                    width={1.4}
                    height={45}
                    fontSize={11}
                    background="#ffffff"
                    lineColor="#0f172a"
                  />
                </div>

                <div className="text-xl font-black text-slate-900 tracking-tight mt-2">
                  S/ {Number(productoSeleccionado.precio_venta).toFixed(2)}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setEtiquetaModalOpen(false)}
                  className="flex-1 rounded-xl bg-slate-100 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-200 transition-all"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 flex items-center justify-center gap-1 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-md"
                >
                  <Printer className="h-3.5 w-3.5" /> Imprimir
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  )
}