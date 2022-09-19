
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// funcion modal
const modalCloseFunc = function () { modal.classList.add('closed') }

// evento modal 
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


document.addEventListener('DOMContentLoaded', e => { getProducts() })


const carrito = [];
const allProducts = []

const getProducts = async () => {
  const response = await fetch('../json/products.json');
  const allProducts = await response.json()
  console.log(allProducts)
}




const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

let chosenProduct = allProducts[0];


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductId = document.querySelectorAll(".id")


//cambiar de slides para ver los otros
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    //cambiar el producto elegido
    chosenProduct = sneakers[index];

    //cambiar el texto al del producto elegido
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    //colores
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});



const precioTotalCarrito = () => {
      let precioTotal = 0
      precioTotal = carrito.length * 25000
      return precioTotal;
    }


precioTotal = precioTotalCarrito()


const agregarProducto = (e) => {
  const productoActual = chosenProduct.id
  carrito.push(productoActual)
  precioTotalCarrito()
  Swal.fire(
    'Producto Agregado!',
    `Su producto ha sido removido del carrito! Tiene ${carrito.length} productos en su carrito. El total de su compra actual es $${precioTotalCarrito(precioTotal)}`,
    'success'
  )
  console.log(carrito);
}

const removerProducto = (e) => {
  const productoActual = chosenProduct.id
  if (chosenProduct.id == productoActual) {
    carrito.pop(productoActual)
    precioTotalCarrito()
    Swal.fire(
      'Producto Removido!',
      `Su producto ha sido removido del carrito! Su carrito tiene ${carrito.length} productos. El total de su compra actual es $${precioTotalCarrito(precioTotal)}`,
      'success'
    )
    console.log(carrito);
    
}
}

const productButton = document.querySelector(".productButton")
const addButton = document.querySelector(".addButton");;
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const checkoutBtn = document.querySelector("#checkoutBtn")
const removerButton = document.querySelector(".removerButton")

addButton.addEventListener("click", agregarProducto);


productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

removerButton.addEventListener("click", removerProducto);


checkoutBtn.addEventListener("click", () => {
  Swal.fire(
    'Thank you!',
    'Your purchase has been completed!',
    'success'
  )
});



close.addEventListener("click", () => {
  payment.style.display = "none";
});



const ProductListContainer = document.querySelector('#productListContainer')



 

const renderizarListaProductos = () => {
  ProductListContainer.innerHTML = ''
  products.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.classList.add('.features')
    productCard.setAttribute('data-id', chosenProduct.id)
    productCard.innerHTML = `
          <div class="feature">
         <h3>${product.name}</h3>
         <img src="${product.colors.img}" alt="${product.img}"/>
        <h3>${product.price}</h3>
        <button class="button-add" onclick="add('product-1', 50)">Agregar</button>
        </div>
          `
    ProductListContainer.append(ProcuctCard)
  })
  const productCards = document.querySelectorAll(".features")
  console.log(productCards);
}


// const renderizarDatosProductos = (e) => {
//   const productIdSeleccionado = e.target.closest('.menuTab').getAttribute('data-id')
//   const productSeleccionado = allProducts.find((pokemon) => product.id == productIdSeleccionado)

//   cardName.textContent = productSeleccionado.name
//   cardId.textContent = `#${productSeleccionado.id}`
//   cardType.textContent = productSeleccionado.type
//   cardDesc.textContent = productSeleccionado.desc
//   cardLink.setAttribute('href', productSeleccionado.url)
//   cardTop.style.backgroundImage = `url(${productSeleccionado.img})`
// }



// const getAllProducts = async () => {
//   try {
//     const response = await fetch('../json/products.json')
//     const data = await response.json()
//     allProducts = data
//     renderizarListaProductos(allProducts)
//   } catch (error) {
//     alert('Ups! Hubo un problema, intentarlo nuevamente mas tarde')
//     console.log(error)
//   }
// }


