// JSON

for (let i = 1; i < 10; i++) {
    let resultado = i * i;
    console.log(`${i} x ${i} = ` + resultado);
  }


// Distinguir entre par o impar

  for (let a = 0; a < 100; a++) {
        if  (a % 2 != 0) {
        console.log(a + " es impar");
    } else {
        console.log(a + " es par");
      }
  }
    


//While loop solo mostrando multiplos de 5 
let n = 0;
while (n < 50) {
    
    n++;
    if (n % 5 != 0) {
        continue
    }
    console.log(n)
}







/*

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
*/