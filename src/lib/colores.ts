// Traduce el nombre de color escrito por la usuaria (ej. "Rosa Pastel") a un hex
// aproximado, para pintar el punto de color en tarjetas y listados.
// Coincidencia parcial sobre palabras clave, así "Azul Marino" también matchea.
const MAPA_COLORES: Record<string, string> = {
    negro: '#1a1a1a',
    blanco: '#f8f8f8',
    perla: '#f3ece4',
    beige: '#d9c7ab',
    camel: '#c19a6b',
    terracotta: '#c1633d',
    rosa: '#f4b8c6',
    rojo: '#c0392b',
    azul: '#2e5fa3',
    celeste: '#7ec8e3',
    verde: '#3d8b5f',
    amarillo: '#e8c547',
    naranja: '#e08430',
    morado: '#7d5ba6',
    violeta: '#8e6bb0',
    gris: '#9a9a9a',
    plomo: '#7d7d7d',
    marron: '#6b4a34',
    dorado: '#c9a227',
    plateado: '#c0c0c0',
    crema: '#f0e6d2',
}

export const COLOR_NEUTRO = '#c9a48d'

export function obtenerColorHex(nombreColor?: string): string {
    const normalizado = (nombreColor || '').toLowerCase()
    const clave = Object.keys(MAPA_COLORES).find(k => normalizado.includes(k))
    return clave ? MAPA_COLORES[clave] : COLOR_NEUTRO
}
