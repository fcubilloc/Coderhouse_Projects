
/*
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
*/




const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");





//cambiar de slides para ver los otros
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //cambiar el producto elegido
    choosenProduct = products[index];

    //cambiar el texto al del producto elegido
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //colores
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


let carrito = []


class Productos {
  constructor(id, modelo, talles, colors, precio, stock) {
      this.id = id
      this.modelo = modelo
      this.talles = talles
      this.colors = colors
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


const sneaker1 = new Productos('1', 'Air Force', [41, 42, 43], [{code: "negro", img: "./img/air.png"},{code: "azul",img: "./img/air2.png"}], 25000, 50)
const sneaker2 = new Productos('2', 'Air Jordan', [41, 42], [ { code: "lightgray", img: "./img/jordan.png", }, { code: "green", img: "./img/jordan2.png", }, ], 24000, 49,)
const sneaker3 = new Productos('3', 'Blazer', [41, 42, 43, 44], [ { code: "lightgray", img: "./img/blazer.png", }, { code: "green", img: "./img/blazer2.png", }, ], 21000, 24, )
const sneaker4 = new Productos('4', 'Crater', [39, 40, 41, 42, 43], [ { code: "black", img: "./img/crater.png", }, { code: "lightgray", img: "./img/crater2.png", }, ], 24000, 36,)
const sneaker5 = new Productos('4', 'Hippie', [38, 39, 40, 41, 42], [{ code: "gray", img: "./img/hippie.png", }, { code: "black", img: "./img/hippie2.png",}], 20000, 48,)



const sneakers = [sneaker1, sneaker2, sneaker3, sneaker4, sneaker5]


console.log(sneaker4)
sneaker1.calcularPrecioIva()






const editarProductoSeleccionado = (productoSeleccionado) => {
  const productoElegido = {
      id: productoSeleccionado.id,
      modelo: productoSeleccionado.modelo,
      talle: 0,
      color: '',
      cantidad: 1,
      precio: productoSeleccionado.precio,
  }

  productoElegido.talle = Number(prompt('Elija Talle, tenemos los siguientes en stock: ' + productoSeleccionado.talles.join('-')))
    productoElegido.color = prompt('Elija Color, tenemos los siguientes en stock: ' + productoSeleccionado.colores.join(', ')).toLowerCase()
    productoElegido.cantidad = Number(prompt('Cuantas unidades quiere sumar al carrito?'))

  return productoElegido
}


const seleccionarProducto = () => {
  const seleccionUsuario = prompt('Elegi el modelo que quieras comprar. Tenemos los siguientes en stock: Air Force - Jordan - Blazer - Crater - Hippie').toLowerCase()

  switch (seleccionUsuario) {
      case 'air force':
          console.log('Elegiste Air Force')
          carrito.push(editarProductoSeleccionado(sneaker1))
          break
      case 'jordan':
          console.log('Elegiste Air Jordan')
          carrito.push(editarProductoSeleccionado(sneaker2))
          break
      case 'blazer':
          console.log('Elegiste Blazer')
          carrito.push(editarProductoSeleccionado(sneaker3))
          break
      case 'crater':
            console.log('Elegiste Crater')
            carrito.push(editarProductoSeleccionado(sneaker4))
            break    
      case 'hippie':
              console.log('Elegiste Hippie')
              carrito.push(editarProductoSeleccionado(sneaker5))
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