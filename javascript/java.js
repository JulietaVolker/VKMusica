const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach(addToCardButton => {
    addToCardButton.addEventListener('click', addToCardClicked);
})

const shoppingCartVientosContainer = document.querySelector('.shopping-CartVientosContainer')

function addToCardClicked(event) {
    const button = event.target
    const vientos__art = button.closest('.vientos__art')
    console.log("vientos__art", vientos__art);

    const vientos__title = vientos__art.querySelector('.title').textContent
    const vientos__price = vientos__art.querySelector('.precio').textContent
    const vientos__img = vientos__art.querySelector('img').src

    addVientosToShoppingCart(vientos__title, vientos__price, vientos__img)
}

function addVientosToShoppingCart(vientos__title, vientos__price, vientos__img) {
    const shoppingCartRow = document.createElement('div')
    const shoppingCartContent = `<div class="row shoppingCartViento">
    <div class="col-6">
        <div class="shopping-cart-vientos d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src= ${vientos__img} class="shopping-cart-image" alt="">
            <h3 class="shopping-cart-vientos-title shoppingCartVientostitle text-truncate ml-3 mb-0">
                ${vientos__title}
            </h3>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-vientos d-flex align-item-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartVientosPrice">${vientos__price}</p>
        </div>
    </div>
    <div class="col-4">
        <div class="shopping-cart-quantity d-flex justify content-between align-items-center h-100 border-bottom">
            <input type="number" class="shopping-cart-quantity-input shoppingCartVientosQuantity" value="1">
            <button class="btn btn-danger buttonDelate" type="button">X</button>
        </div>
    </div>
</div>`;
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartVientosContainer.append(shoppingCartRow)

shoppingCartRow.querySelector('.buttonDelate').addEventListener('click', removeShoppingCartItem)

shoppingCartRow.querySelector('.shoppingCartVientosQuantity').addEventListener ('change', quantityChanged)

    updateShoppingCartTotal()
}
    function updateShoppingCartTotal() {
        let total = 0
        const shoppingCartTotal = document.querySelector('.shoppingCartTotal')

        const shoppingCartVientos = document.querySelectorAll('.shoppingCartViento')

        console.log("shoppingCartVientos", shoppingCartVientos);

        shoppingCartVientos.forEach((shoppingCartViento) => {
            const shoppingCartVientoPriceElement = shoppingCartViento.querySelector('.shoppingCartVientosPrice')

            console.log("shoppingCartVientoPriceElement", shoppingCartVientoPriceElement)

            const shoppingCartVientoPrice = Number(shoppingCartVientoPriceElement.textContent.replace('$', ''))

            console.log("shoppingCartVientoPrice", shoppingCartVientoPrice);

            const shoppingCartVientoQuantityElement = shoppingCartViento.querySelector('.shoppingCartVientosQuantity')

            const shoppingCartVientosQuantity = Number(shoppingCartVientoQuantityElement.value)

            total = total + shoppingCartVientoPrice * shoppingCartVientosQuantity

           console.log("shoppingCartVientosQuantity", total);

           shoppingCartTotal.innerHTML = `$ ${total.toFixed(2)}`
        })
}

function removeShoppingCartItem(event) {
    const buttonClicked = event.target
    buttonClicked.closest('.shoppingCartViento').remove()
    updateShoppingCartTotal()
}

function quantityChanged(event) {
    const input = event.target
    if (input.value <= 0) {
        input.value = 1
    }
    updateShoppingCartTotal()
}
