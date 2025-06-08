export function actualizarCarrito(nuevoCarrito) {

  localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));

  window.dispatchEvent(new CustomEvent('carritoActualizadoTarjeta'));

}
 