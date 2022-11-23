// Clase de los productos:

class Producto {
    constructor(ID,Name,Price,Stock){
        this.ID = ID
        this.Name = Name
        this.Price = Price
        this.Stock = Stock
    }
}

// Lista de productos: 

const productsArray = []

const shampooEquilibrado = new Producto(1,'Shampoo Equilibrado',1200,100)
productsArray.push(shampooEquilibrado)
const acondicionador = new Producto(2,'Acondicionador',1500,100)
productsArray.push(acondicionador)
const serumCapilar = new Producto(3,'Sérum Capilar',2100,100)
productsArray.push(serumCapilar)

const jabonExfoliante = new Producto(1,'Jabón Exfoliante',800,100)
productsArray.push(jabonExfoliante)
const jabonDeCoco = new Producto(2,'Jabón de Coco',500,100)
productsArray.push(jabonDeCoco)
const jabonDeCalendula = new Producto(3,'Jabón de Calendula',700,100)
productsArray.push(jabonDeCalendula)
const jabonDeJazmin = new Producto(4,'Jabón de Jazmin',500,100)
productsArray.push(jabonDeJazmin)
const jabonDeMelon = new Producto(5,'Jabón de Melón',700,100)
productsArray.push(jabonDeMelon)

const aceiteEsencialDeMenta = new Producto(1,'Aceite Esencial de Menta',1000,100)
productsArray.push(aceiteEsencialDeMenta)
const aceiteEsencialDeMirra = new Producto(2,'Aceite Esencial de Mirra',1200,100)
productsArray.push(aceiteEsencialDeMirra)
const aceiteEsencialDeRosaMosqueta = new Producto(3,'Aceite Esencial de Rosa Mosqueta',1400,100)
productsArray.push(aceiteEsencialDeRosaMosqueta)
const aceiteEsencialDeLavanda = new Producto(4,'Aceite Esencial de Lavanda',1600,100)
productsArray.push(aceiteEsencialDeLavanda)

//console.log(productsArray)

const divProductos = document.querySelector('#divProductos')

productsArray.forEach(producto => {

    divProductos.innerHTML += `
    <div id="${producto.id}" class="cardProducto">
    <div class="card-body">
    <h5 class="card-title">${producto.Name}</h5>
    <p class="card-text">${producto.Price}</p>
    </div>
    </div>
    `
})