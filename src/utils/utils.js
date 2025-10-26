
export const formatPrice = (value) => {
    if (!value && value !== 0) return "$0,00";
    return Number(value).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
};