export const formatVND = (priceText) => {
   return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(priceText);
};
