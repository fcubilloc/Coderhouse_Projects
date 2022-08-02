
function calcularEdad(fechaNacimiento) {
  let hoy = new Date();
  let cumple = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - cumple.getFullYear();
  let m = hoy.getMonth() - cumple.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumple.getDate())) {
      edad--;
  }
  return edad;
}

const nombreUsuario = prompt('Por favor, ingresa tu nombre')
let edad = calcularEdad(prompt('Por favor ingresa tu edad en formato YYYY/MM/DD'));
if(edad >= 18){
  alert("Bienvenido " + nombreUsuario);
}else{
  alert("Lo sentimos " + nombreUsuario + ", este sitio es solo para mayores de edad");
}
/*
Esta funcion la encontré googleando metodos de validacion de la edad del usuario. Me gustaria saber como hacer para poder detener la ejecucion de la pagina o redireccionar en caso que el usuario sea menor pero bueno, por ahora es basico jaja
*/


let carrito = []
// spoiler a los arrays que no vimos todavía pero quedan en blanco para no mandar cualquier cosa y que esté todo mal jaja

class Productos {
  constructor(id, marca, tipo, descripcion, precio, stock) {
      this.id = id
      this.marca = marca
      this.tipo = tipo
      this.descripcion = descripcion
      this.precio = precio
      this.stock = stock

      
  }

  vender(cantidad) {
    this.stock = this.stock - cantidad
}

  calcularPrecioIva() {
  let precioIva = this.precio * 1.21;
  console.log(precioIva);
  return precioIva;
}
}


const cerveza1 = new Productos('1', 'Temple', 'Honey', 'Cerveza Temple Honey Lata 473ml', 275, 48)
const cerveza2 = new Productos('7', 'Patagonia', 'IPA', 'Cerveza Patagonia 24.7. Session IPA con Sauco Lata 410ml', 275, 48,)
const cerveza3 = new Productos('3', 'Peñon', 'Lager', 'Cerveza Peñon del Aguila Doppelbock  Lata 473ml', 300, 24, )
const cerveza4 = new Productos('4', 'Berliner', 'Pils', 'Cerveza Berliner Pilsner, alemana, Botella 473ml', 350, 48,)



const cervezas = [cerveza1, cerveza2, cerveza3, cerveza4]


console.log(cerveza4)
cerveza1.calcularPrecioIva()






const editarProductoSeleccionado = (productoSeleccionado) => {
  const productoElegido = {
      id: productoSeleccionado.id,
      marca: productoSeleccionado.marca,
      modelo: productoSeleccionado.descripcion,
      tipo: productoSeleccionado.tipo,
      cantidad: 1,
      precio: productoSeleccionado.precio,
  }

  productoElegido.cantidad = Number(prompt('Cuantas unidades quiere sumar al carrito?'))

  return productoElegido
}


const seleccionarProducto = () => {
  const seleccionUsuario = prompt('Elegi la cerveza que quieras comprar. Tenemos las marcas Temple, Patagonia, Peñon y Berliner').toLowerCase()

  switch (seleccionUsuario) {
      case 'temple':
          console.log('Elegiste Temple')
          carrito.push(editarProductoSeleccionado(cerveza1))
          break
      case 'patagonia':
          console.log('Elegiste Patagonia')
          carrito.push(editarProductoSeleccionado(cerveza2))
          break
      case 'peñon':
          console.log('Elegiste Peñon')
          carrito.push(editarProductoSeleccionado(cerveza3))
          break
      case 'estrella':
            console.log('Elegiste Berliner')
            carrito.push(editarProductoSeleccionado(cerveza4))
            break    
      default:
          console.log('Por favor, elegi una marca correcta')
          break
  }

  if (confirm('Desea agregar otro producto a su compra?')) {
      seleccionarProducto()
  }
}

const sumarTotalCarrito = () => {
  let sumaTotalCarrito = 0
  for (const producto of carrito) {
      sumaTotalCarrito += producto.precio * producto.cantidad
  }
  return sumaTotalCarrito
}

seleccionarProducto()

alert('Gracias por su compra, su total es de $' + sumarTotalCarrito())