/**
 * Formatea una fecha en el formato de fecha local.
 *
 * @param {string} dateStr - La fecha a formatear.
 * @param {string} locale - El código de idioma para usar al formatear la fecha.
 * @param {Intl.DateTimeFormatOptions} options - Opciones de formato de fecha.
 * @return {string} La fecha formateada.
 */

export function formatDate(dateStr, locale, options) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, options);
}