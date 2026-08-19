// La base guarda las fechas en UTC, pero el negocio opera en Perú (UTC-5).
// Sin esto, una venta hecha a las 8 PM en Lima cae en el día siguiente en UTC
// y no se contaría en "Ventas Hoy" ni en el cuadre de caja de esa jornada.
export const ZONA_HORARIA_NEGOCIO = 'America/Lima'

// Perú no usa horario de verano, así que el desfase es constante todo el año.
const HORAS_DETRAS_DE_UTC = 5

/** Devuelve la fecha del negocio como 'YYYY-MM-DD' (en-CA ya usa ese formato). */
export function fechaLocalNegocio(fecha: Date | string = new Date()): string {
    const d = typeof fecha === 'string' ? new Date(fecha) : fecha
    return d.toLocaleDateString('en-CA', { timeZone: ZONA_HORARIA_NEGOCIO })
}

/**
 * Instante UTC en que empezó el día de hoy según la hora del negocio.
 * Sirve para filtrar en la base sin cortar a medianoche UTC.
 * Ej: 00:00 del 17/08 en Lima == 05:00 UTC del 17/08.
 */
export function inicioDelDiaNegocio(fecha: Date = new Date()): Date {
    const [anio, mes, dia] = fechaLocalNegocio(fecha).split('-').map(Number)
    return new Date(Date.UTC(anio, mes - 1, dia, HORAS_DETRAS_DE_UTC, 0, 0))
}
