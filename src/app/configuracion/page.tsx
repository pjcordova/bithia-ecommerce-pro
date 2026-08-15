"use client";
import React, { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { AdminRoute } from '@/components/AdminRoute'
import { useAuth } from '@/context/AuthContext'
import { obtenerConfiguracionEmpresa, actualizarConfiguracionEmpresa } from '@/app/actions/configuracion'
import { obtenerPersonal, crearPersonal, eliminarPersonal } from '@/app/actions/auth'
import { Settings, Building, Users, Moon, Sun, Trash2, Plus, Save, Lock } from 'lucide-react'
import { toast } from 'sonner'

function ConfiguracionContent() {
  const { user } = useAuth()

  const [loadingEmpresa, setLoadingEmpresa] = useState(true)
  const [nombreEmpresa, setNombreEmpresa] = useState('Bithia Brand')
  const [whatsapp, setWhatsapp] = useState('')
  const [guardandoEmpresa, setGuardandoEmpresa] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(false)

  const [personal, setPersonal] = useState<any[]>([])
  const [loadingPersonal, setLoadingPersonal] = useState(true)
  const [nuevoNombre, setNuevoNombre] = useState('')
  const [nuevoEmail, setNuevoEmail] = useState('')
  const [nuevoPassword, setNuevoPassword] = useState('')
  const [nuevoPasswordConfirm, setNuevoPasswordConfirm] = useState('')
  const [nuevoRol, setNuevoRol] = useState<'admin' | 'staff'>('staff')
  const [guardandoStaff, setGuardandoStaff] = useState(false)
  const [eliminandoId, setEliminandoId] = useState<string | null>(null)

  const cargarEmpresa = async () => {
    setLoadingEmpresa(true)
    const res = await obtenerConfiguracionEmpresa()
    if (res.success && res.config) {
      setNombreEmpresa(res.config.nombre_empresa)
      setWhatsapp(res.config.whatsapp_corporativo || '')
    }
    setLoadingEmpresa(false)
  }

  const cargarPersonal = async () => {
    setLoadingPersonal(true)
    const res = await obtenerPersonal()
    if (res.success) {
      setPersonal(res.personal)
    } else {
      toast.error('Error al cargar el personal desde Railway')
    }
    setLoadingPersonal(false)
  }

  useEffect(() => {
    cargarEmpresa()
    cargarPersonal()
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

  const handleSaveEmpresa = async (e: React.FormEvent) => {
    e.preventDefault()
    setGuardandoEmpresa(true)
    const res = await actualizarConfiguracionEmpresa({
      nombre_empresa: nombreEmpresa,
      whatsapp_corporativo: whatsapp,
    })
    setGuardandoEmpresa(false)
    if (res.success) {
      toast.success(res.message)
    } else {
      toast.error(res.error)
    }
  }

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nuevoNombre || !nuevoEmail || !nuevoPassword) {
      toast.error('Completa los campos obligatorios')
      return
    }
    if (nuevoPassword !== nuevoPasswordConfirm) {
      toast.error('Las contraseñas no coinciden')
      return
    }
    setGuardandoStaff(true)
    const res = await crearPersonal({
      nombre: nuevoNombre,
      email: nuevoEmail,
      password: nuevoPassword,
      rol: nuevoRol,
    })
    setGuardandoStaff(false)

    if (res.success) {
      toast.success(res.message)
      setNuevoNombre('')
      setNuevoEmail('')
      setNuevoPassword('')
      setNuevoPasswordConfirm('')
      setNuevoRol('staff')
      cargarPersonal()
    } else {
      toast.error(res.error)
    }
  }

  const handleEliminarStaff = async (id: string) => {
    if (!user) return
    setEliminandoId(id)
    const res = await eliminarPersonal(id, user.id)
    setEliminandoId(null)

    if (res.success) {
      toast.success(res.message)
      cargarPersonal()
    } else {
      toast.error(res.error)
    }
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
          {loadingEmpresa ? (
            <p className="text-sm text-muted-foreground text-center py-6">Sincronizando...</p>
          ) : (
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
              disabled={guardandoEmpresa}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95 transition-all disabled:opacity-50"
            >
              <Save className="h-4 w-4" /> {guardandoEmpresa ? 'Guardando...' : 'Guardar Ajustes'}
            </button>
          </form>
          )}
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
            <p className="text-xs text-muted-foreground">Administra quiénes tienen acceso al sistema y sus roles. Las cuentas creadas aquí pueden iniciar sesión de inmediato.</p>
          </div>
        </div>

        <form onSubmit={handleAddStaff} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 pt-2 border-t border-border">
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
              onChange={e => setNuevoRol(e.target.value as 'admin' | 'staff')}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="staff">Vendedora (Staff)</option>
              <option value="admin">Administradora (Admin)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1 flex items-center gap-1">
              <Lock className="h-3 w-3" /> Contraseña
            </label>
            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={nuevoPassword}
              onChange={e => setNuevoPassword(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="Repite la contraseña"
              value={nuevoPasswordConfirm}
              onChange={e => setNuevoPasswordConfirm(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              disabled={guardandoStaff}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-2 text-sm font-bold text-primary-foreground hover:opacity-95 transition-all shadow-sm disabled:opacity-50"
            >
              <Plus className="h-4 w-4" /> {guardandoStaff ? 'Agregando...' : 'Agregar Personal'}
            </button>
          </div>
        </form>

        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Equipo Activo</h4>
          {loadingPersonal ? (
            <p className="text-sm text-muted-foreground text-center py-6">Sincronizando...</p>
          ) : personal.length === 0 ? (
            <p className="text-sm text-muted-foreground">No hay personal registrado adicional.</p>
          ) : (
            personal.map((member: any) => (
              <div key={member.id} className="flex items-center justify-between rounded-xl bg-muted/40 p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary font-bold">
                    {member.nombre?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {member.nombre}
                      {member.id === user?.id && <span className="ml-1.5 text-[10px] font-bold text-primary">(Tú)</span>}
                    </p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${member.rol === 'admin' ? 'bg-primary/10 text-primary' : 'bg-secondary text-foreground'}`}>
                    {member.rol === 'admin' ? 'Admin' : 'Staff'}
                  </span>
                  <button
                    onClick={() => handleEliminarStaff(member.id)}
                    disabled={eliminandoId === member.id}
                    className="p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all disabled:opacity-50"
                    title="Eliminar usuario"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
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
