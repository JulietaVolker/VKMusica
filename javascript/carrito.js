const pintarcarrito = () => {
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

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}</p>
        <span class="restar"> - </span>
        <p>Cantidad : ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ❌ </span>
    `

        modalContainer.append(carritoContent)

        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--
            }
            saveLocal()
            pintarcarrito()
        })

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () =>{
            product.cantidad++
            saveLocal()
            pintarcarrito()
        })

        let eliminar = carritoContent.querySelector(".delete-product")
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id)
        })
    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `
    total a pagar: ${total} $
    `
    modalContainer.append(totalBuying)
}

VerCarrito.addEventListener("click", pintarcarrito)

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id)
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })

    pintarcarrito()
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
