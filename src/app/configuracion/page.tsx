"use client";
import React, { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute' // Mantengo tus importaciones originales
import { useApp } from '@/context/AppContext'
import { Settings, Building, Users, Moon, Sun, Trash2, Plus, Save } from 'lucide-react'
import { toast } from 'sonner'

function ConfiguracionContent() {
  // 1. Traemos las variables con los nombres exactos del AppContext y usamos alias
  const {
    configuracion,
    updateConfiguracion: actualizarEmpresa,
    staffList: staff,
    agregarStaff,
    eliminarStaff
  } = useApp()

  // 2. Leemos las propiedades correctas de la base de datos (nombre_empresa y whatsapp_corporativo)
  const [nombreEmpresa, setNombreEmpresa] = useState(configuracion?.nombre_empresa || 'Bithia Brand')
  const [whatsapp, setWhatsapp] = useState(configuracion?.whatsapp_corporativo || '+51 942 275 208')

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [nuevoNombre, setNuevoNombre] = useState('')
  const [nuevoEmail, setNuevoEmail] = useState('')
  const [nuevoPassword, setNuevoPassword] = useState('')
  const [nuevoRol, setNuevoRol] = useState<'ADMIN' | 'USER'>('USER')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setIsDarkMode(isDark)
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('bithia_theme', 'light')
      setIsDarkMode(false)
      toast.info('Tema Claro activado')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('bithia_theme', 'dark')
      setIsDarkMode(true)
      toast.success('Tema Oscuro activado')
    }
  }

  const handleSaveEmpresa = (e: React.FormEvent) => {
    e.preventDefault()
    // Le enviamos los nombres exactos que espera el tipo ConfiguracionEmpresa
    actualizarEmpresa({
      nombre_empresa: nombreEmpresa,
      whatsapp_corporativo: whatsapp
    })
    toast.success('Ajustes de empresa guardados')
  }

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nuevoNombre || !nuevoEmail) {
      toast.error('Completa los campos obligatorios')
      return
    }
    agregarStaff({
      name: nuevoNombre,
      email: nuevoEmail,
      password: nuevoPassword || '123456',
      role: nuevoRol
    })
    setNuevoNombre('')
    setNuevoEmail('')
    setNuevoPassword('')
    toast.success('Personal agregado correctamente')
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Configuración</h1>
        <p className="text-sm text-muted-foreground mt-1">Ajustes globales del sistema y gestión del equipo de Bithia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ajustes de Empresa */}
        <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Building className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">Datos de la Empresa</h3>
          </div>
          <form onSubmit={handleSaveEmpresa} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Nombre Comercial</label>
              <input
                type="text"
                value={nombreEmpresa}
                onChange={e => setNombreEmpresa(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">WhatsApp Corporativo</label>
              <input
                type="text"
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all"
            >
              <Save className="h-4 w-4" /> Guardar Ajustes
            </button>
          </form>
        </div>

        {/* Apariencia / Modo Nocturno */}
        <div className="rounded-2xl bg-card p-6 shadow-sm border border-border flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-xl bg-accent/10 text-accent">
                <Settings className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">Apariencia del Sistema</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Personaliza la interfaz visual de Bithia ERP para adaptarla a tus preferencias de iluminación.
            </p>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4 border border-border">
            <div className="flex items-center gap-3">
              {isDarkMode ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-amber-500" />}
              <div>
                <p className="text-sm font-bold text-foreground">Modo Nocturno</p>
                <p className="text-xs text-muted-foreground">Cambia el tema visual del sistema</p>
              </div>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDarkMode ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Gestión de Staff */}
      <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-foreground">Gestión de Staff y Permisos</h3>
            <p className="text-xs text-muted-foreground">Administra quiénes tienen acceso al sistema y sus roles.</p>
          </div>
        </div>

        <form onSubmit={handleAddStaff} className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6 pt-2 border-t border-border">
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Nombre</label>
            <input
              type="text"
              placeholder="Ej. María Pérez"
              value={nuevoNombre}
              onChange={e => setNuevoNombre(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Correo</label>
            <input
              type="email"
              placeholder="correo@bithia.com"
              value={nuevoEmail}
              onChange={e => setNuevoEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Rol</label>
            <select
              value={nuevoRol}
              onChange={e => setNuevoRol(e.target.value as 'ADMIN' | 'USER')}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="USER">Vendedora (User)</option>
              <option value="ADMIN">Administradora (Admin)</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-2 text-sm font-bold text-primary-foreground hover:opacity-95 transition-all shadow-sm"
            >
              <Plus className="h-4 w-4" /> Agregar Personal
            </button>
          </div>
        </form>

        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Equipo Activo</h4>
          {staff && staff.length > 0 ? (
            staff.map((member: any) => (
              <div key={member.id} className="flex items-center justify-between rounded-xl bg-muted/40 p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary font-bold">
                    {member.name?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${member.role === 'ADMIN' ? 'bg-primary/10 text-primary' : 'bg-secondary text-foreground'}`}>
                    {member.role}
                  </span>
                  {member.role !== 'ADMIN' && (
                    <button
                      onClick={() => eliminarStaff(member.id)}
                      className="p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
                      title="Eliminar usuario"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No hay personal registrado adicional.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ConfiguracionPage() {
  return (
    <AdminRoute>
      <Layout>
        <ConfiguracionContent />
      </Layout>
    </AdminRoute>
  )
}