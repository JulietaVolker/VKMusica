let pintarCarrito = () => {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
     <h1 class="modal-header-title">Carrito</h1>
     `
    modalContainer.append(modalHeader)

    const modalButton = document.createElement("h1")
    modalButton.innerText = "X"
    modalButton.className = "modal-header-button"

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalButton)

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `
      total a pagar: ${total} $
   `
    modalContainer.append(totalBuying)
    verCarrito.addEventListener("click", pintarCarrito)
}

let pintarProductos = () => {
    carrito.forEach(product => {
        const carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = ` 
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>
     <button id=${product.id} class="restar"> - </button>
    <p id="cantidad" class="cantidad">Cantidad : ${product.cantidad}</p>
    <button id="${product.id}" class="sumar"> + </button>
     <p>Total: ${product.cantidad * product.precio}</p>
     <button id="${product.id}" class="eliminar"> ❌ </button>
 `
        modalContainer.append(carritoContent)
    })

    const botonRestar = document.querySelectorAll(".restar")
    botonRestar.forEach(btn => {
        btn.addEventListener('click', btnRestar)
    })

    const botonSumar = document.querySelectorAll('.sumar')
    botonSumar.forEach(btn => {
        btn.addEventListener('click', btnSumar)
    })

    const botonEliminar = document.querySelectorAll('.eliminar')
    botonEliminar.forEach(btn => {
        btn.addEventListener('click', btnEliminar)
    })

    verCarrito.addEventListener("click", carrito)
}

function btnRestar(e) {
    const id = parseInt(e.target.id)
    const producto = carrito.findIndex((e => e.id === id) && (e => e.cantidad > 1))

    carrito[producto].cantidad--

    saveLocal()
    pintarCarrito()
    pintarProductos()
}

function btnSumar(e) {
    const id = parseInt(e.target.id)
    const producto = carrito.findIndex(e => e.id === id)
    carrito[producto].cantidad++

    saveLocal()
    pintarCarrito()
    pintarProductos()
}


function btnEliminar(e) {
    const eliminarProducto = parseInt(e.target.id)
    const botonEliminar = carrito.findIndex(e => e.id === eliminarProducto)
    carrito.splice(botonEliminar, 1)

    saveLocal()
    pintarCarrito()
    pintarProductos()
}

verCarrito.addEventListener("click", pintarCarrito)
verCarrito.addEventListener("click", pintarProductos)

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })

    pintarCarrito()
    saveLocal()
    carritoCounter()
}

const carritoCounter = () => {
    cantidadCarrito.style.display = "block"
    const carritoLength = carrito.length
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}

carritoCounter()
