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
    console.log('EN LA FUNCION');
    console.log(productos);


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
    console.log("prods" ,prods)
    console.log(e.target.id)

    const comprar = prods.find(elem => elem.id === parseInt(e.target.id))
    console.log("comprar", comprar)
    
    Toastify({

        text: "Se agrego al carrito",

        duration: 3000,

        style: {
            background: "linear-gradient(to right, #38b000, #70E000)",
        }

    }).showToast();

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
        console.log(carrito)
    }
    console.log(carrito);
    carritoCounter()
    saveLocal()
}

const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

JSON.parse(localStorage.getItem("carrito"))