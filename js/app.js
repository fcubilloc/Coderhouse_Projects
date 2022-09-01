
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// funcion modal
const modalCloseFunc = function () { modal.classList.add('closed') }

// evento modal 
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


const getProducts = async () => {
  const response = await fetch('./js/products.json')
  const products = await response.json()
  return products}

  getProducts()
  const products = getProducts()
  console.log(products);
  

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

let chosenProduct = products[0];


const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


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


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const checkoutBtn = document.querySelector("#checkoutBtn")

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// Traté de hacer que tire mensajes diferentes dependiendo 
// de los valores del formulario pero no pude hacerlo funcionar. 
// Dejo el codigo comentado para seguirlo más adelante 

// const nombre = document.getElementById("name")
// const phoneNumber = document.getElementById("phoneNumber")
// const address = document.getElementById("address")
// const cardInfo = document.getElementById("cardInfo")
// const mmCard = document.getElementById("mmCard").val()
// const yyyyCard = document.getElementById("yyyyCard").val()
// const cvvCard = document.getElementById("cvvCard").val()


// checkoutBtn.addEventListener("click", () => {
//      if (nombre == '' || phoneNumber == '' || address == '' || cardInfo == '' || mmCard == '' || yyyyCard == '' || cvvCard == '' ){
//       Swal.fire({
//         icon: 'warning',
//         title: 'Something went wrong!',
//         text: 'Please check the missing fields.',
//         footer: '<a href="">Why do I have this issue?</a>'
//       })
//     }else if (nombre == "John Doe" || phoneNumber == "+1 234 5678" || address == "Elton St 21 22-145" || cardInfo == "Card Number" || mmCard == "mm" || yyyyCard == "yyyy"|| cvvCard == "cvv"){
//       Swal.fire({
//         icon: 'warning',
//         title: 'Something went wrong!',
//         text: 'Please check the missing fields and fill the form correctly.',
//         footer: '<a href="">Why do I have this issue?</a>'
//       })
//     }else{
//       Swal.fire(
//         'Thank you!',
//         'Your purchase has been completed!',
//         'success'
//       )
//     }   


// });

checkoutBtn.addEventListener("click", () => {
  Swal.fire(
    'Thank you!',
    'Your purchase has been completed!',
    'success'
  )});



close.addEventListener("click", () => {
  payment.style.display = "none";
});


