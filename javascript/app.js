const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")
const url = "../api/products.json"

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

fetch(url)
    .then(res => res.json())
    .then(data => mostrarProductos(data))

function mostrarProductos(productos) {

    const contenedorProduct = document.querySelector('#container')

    productos.forEach(product => {
        let card = document.createElement('div')
        card.className = "card"
        card.innerHTML = `
                        <img src = "${product.img}">
                        <h3 class="title"> ${product.nombre} </h3>
                        <p class="price">${product.precio}</p>
                        <button class="comprar" id="${product.id}">Comprar</button>
                        `

        contenedorProduct.appendChild(card)
    })
    const btnComprar = document.querySelectorAll('.comprar')
    btnComprar.forEach(btn => {
        btn.addEventListener('click', (e) => agregarCarrito(e, productos))
    })
}

function agregarCarrito(e, prods) {

    Toastify({

        text: "Se agrego al carrito",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #38b000, #70E000)",
        }

    }).showToast();

    const comprar = prods.find(elem => elem.id === parseInt(e.target.id))
    console.log("comprar", comprar)
    const existe = carrito.some((p) => p.id === comprar.id)

    if (existe) {
        carrito.map((p) => {
            if (p.id === comprar.id) {
                p.cantidad++
            }
        })
    } else {
        carrito.push({
            id: comprar.id,
            img: comprar.img,
            nombre: comprar.nombre,
            precio: comprar.precio,
            cantidad: comprar.cantidad,
        })
    }
    carritoCounter()
    saveLocal()
}

function btnSumar(e) {
    console.log("click")
    const id = e.target.id
    console.log(id);
    const producto = carrito.findIndex(e => e.id === id)
    console.log("producto", producto);
    carrito[index].cantidad++

    saveLocal()
    pintarCarrito()
}

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

JSON.parse(localStorage.getItem("carrito"))
