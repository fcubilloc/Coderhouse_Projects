
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

const cervezas = []
const vinos = []
const carrito = []
// spoiler a los arrays que no vimos todavía pero quedan en blanco para no mandar cualquier cosa y que esté todo mal jaja

class Cerveza {
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



const cerveza1 = new Cerveza('1', 'Temple', 'Honey', 'Cerveza Temple Honey Lata 473ml', 300, 48)
const cerveza2 = new Cerveza('2', 'Temple', 'IPA', 'Cerveza Temple Wolf IPA Lata 473ml', 350, 36, )
const cerveza3 = new Cerveza('3', 'Temple', 'Ale', 'Cerveza Temple Scottish Ale Lata 473ml', 300, 24, )
const cerveza4 = new Cerveza('4', 'Temple', 'Lager', 'Cerveza Temple Cosmica Lager Lata 473ml', 350, 48,)
const cerveza5 = new Cerveza('5', 'Patagonia', 'Ale', 'Cerveza Patagonia Bohemian Pilsener Lata 410ml', 300, 48,)
const cerveza6 = new Cerveza('6', 'Patagonia', 'Lager', 'Cerveza Patagonia Amber Lager Lata 410ml', 275, 48,)
const cerveza7 = new Cerveza('7', 'Patagonia', 'IPA', 'Cerveza Patagonia 24.7. Session IPA con Sauco Lata 410ml', 300, 48,)
console.log(cerveza4)
cerveza1.calcularPrecioIva()






