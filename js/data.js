
// const products = [
//     {
//         id: 1, title: 'Air Force', size: [41, 42, 43], colors: [{ code: "negro", img: "./img/air.png" }, { code: "azul", img: "./img/air2.png" }], price: 25000, stock: 50
//     },
//     {
//         id: 2, title: 'Air Jordan', size: [41, 42], colors: [{ code: "lightgray", img: "./img/jordan.png" }, { code: "green", img: "./img/jordan2.png" }], price: 24000, stock: 49
//     },
//     {
//         id: 3, title: 'Blazer', size: [41, 42, 43, 44], colors: [{ code: "lightgray", img: "./img/blazer.png" }, { code: "green", img: "./img/blazer2.png" },], price: 21000, stock: 24
//     },
//     {
//         id: 4, title: 'Crater', size: [39, 40, 41, 42, 43], colors: [{ code: "black", img: "./img/crater.png" }, { code: "lightgray", img: "./img/crater2.png" },], price: 24000, stock: 36
//     },
//     {
//         id: 5, title: 'Hippie', size: [38, 39, 40, 41, 42], colors: [{ code: "gray", img: "./img/hippie.png" }, { code: "black", img: "./img/hippie2.png" }], price: 20000, stock: 48
//     }
// ]

class Products {
    constructor(id, title, sizes, colors, price, stock) {
        this.id = id
        this.title = title
        this.sizes = sizes
        this.colors = colors
        this.price = price
        this.stock = stock
  
        
    }
}

const sneaker1 = new Products('1', 'Air Force', [41, 42, 43], [{code: "black", img: "./img/air.png"},{code: "blue",img: "./img/air2.png"}], 25000, 50)
const sneaker2 = new Products('2', 'Air Jordan', [41, 42], [ { code: "lightgray", img: "./img/jordan.png", }, { code: "green", img: "./img/jordan2.png", }, ], 24000, 49,)
const sneaker3 = new Products('3', 'Blazer', [41, 42, 43, 44], [ { code: "lightgray", img: "./img/blazer.png", }, { code: "green", img: "./img/blazer2.png", }, ], 21000, 24, )
const sneaker4 = new Products('4', 'Crater', [39, 40, 41, 42, 43], [ { code: "black", img: "./img/crater.png", }, { code: "lightgray", img: "./img/crater2.png", }, ], 24000, 36,)
const sneaker5 = new Products('4', 'Hippie', [38, 39, 40, 41, 42], [{ code: "gray", img: "./img/hippie.png", }, { code: "black", img: "./img/hippie2.png",}], 20000, 48,)
    
    
    
const sneakers = [sneaker1, sneaker2, sneaker3, sneaker4, sneaker5]
    
    