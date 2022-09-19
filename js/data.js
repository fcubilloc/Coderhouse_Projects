
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
const sneaker2 = new Products('2', 'Air Jordan', [41, 42], [ { code: "lightgray", img: "./img/jordan.png", }, { code: "green", img: "./img/jordan2.png", }, ], 25000, 49,)
const sneaker3 = new Products('3', 'Blazer', [41, 42, 43, 44], [ { code: "lightgray", img: "./img/blazer.png", }, { code: "green", img: "./img/blazer2.png", }, ], 25000, 24, )
const sneaker4 = new Products('4', 'Crater', [39, 40, 41, 42, 43], [ { code: "black", img: "./img/crater.png", }, { code: "lightgray", img: "./img/crater2.png", }, ], 25000, 36,)
const sneaker5 = new Products('4', 'Hippie', [38, 39, 40, 41, 42], [{ code: "gray", img: "./img/hippie.png", }, { code: "black", img: "./img/hippie2.png",}], 25000, 48,)
    
    
    
const sneakers = [sneaker1, sneaker2, sneaker3, sneaker4, sneaker5]
    
    