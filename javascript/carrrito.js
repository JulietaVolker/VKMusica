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


    carrito.forEach(product => {
        const carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = ` 
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>
     <button class="restar"> - </button>
    <p>Cantidad : ${product.cantidad}</p>
    <button class="sumar"> + </button>
     <p>Total: ${product.cantidad * product.precio}</p>
     <button class="delete-product"> ❌ </button>
 `
        modalContainer.append(carritoContent)
        pintarCarrito()
    })

    const botonRestar = document.querySelectorAll('.restar')
    botonRestar.forEach(btn => {
        btn.addEventListener('click', (e) => botonRestar(e, product))
    })
}

function botonRestar() {
    if (e.cantidad !== 1) {
        e.cantidad--
    }
    saveLocal()
    pintarcarrito()
}



// let carritoContent = carritoContent.querySelector(".restar")
// restar.addEventListener("click", () => {
//     if (product.cantidad !== 1) {
//         product.cantidad--
//     }
//     saveLocal()
//     pintarcarrito()
// })



// let sumar = carritoContent.querySelectorAll(".sumar")
// sumar.addEventListener("click", () => {
//     product.cantidad++
//     saveLocal()
//     pintarCarrito()
// })



// let eliminar = carritoContent.querySelectorAll(".delete-product")
// eliminar.addEventListener("click", () => {
//     eliminarProducto(product.id)
// })






verCarrito.addEventListener("click", pintarCarrito)


const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
const totalBuying = document.createElement("div")
totalBuying.className = "total-content"
totalBuying.innerHTML = `
      total a pagar: ${total} $
   `
modalContainer.append(totalBuying)


verCarrito.addEventListener("click", pintarCarrito)


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
    const carritoLength = agregarCarrito.length
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
}


carritoCounter()
