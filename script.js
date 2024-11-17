const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = [];

//abrir modal do carrinho
cartBtn.addEventListener("click", function name() {
    updateCartModal()
    cartModal.style.display = "flex"
})

//fechar nodal quando clicar fora
cartModal.addEventListener("click", function name(event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function () {
    cartModal.style.display = "none"
})

//Evento de click para add ao carrinho
menu.addEventListener("click", function name(event) {

    let parentButton = event.target.closest(".add-to-cart-btn")

    if (parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name, price)
    }
})


//função para add ao carrinho

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name)

    // condição para somar itens repetidos

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name, price, quantity: 1,
        })
    }

    updateCartModal()
}

//Atualiza carrinho

function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
        <div class="flex items-center justify-between">
            <div>
                <p class="font-bold">${item.name}</p>
                <p> Qtd: ${item.quantity}</p>
                <p class="font-medium mb-2"> R$ ${item.price.toFixed(2)}</p>
            </div>

             <button> 
             Remover
             </button>

        </div>  
        `
        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement)
    })

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency", currency: "BRL"

    });



}











/*
let cart = [];

//abrir modal do carrinho
cartBtn.addEventListener("click", function () {
    cartModal.style.display = "flex"
})

//fechar nodal quando clicar fora

cartModal.addEventListener("click", function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", function () {
    cartModal.style.display = "none"
})

menu.addEventListener("click", function (event) {
    //console.log(event.target)

    let parentButton = event.target.closest(".add-to-cart-btn")
    if (parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

        addToCart(name, price)
    }
})

//Função para adcioinar ao carrinho
function addToCart(name, price) {
    const existeItem = cart.find(item => item.name === name)
    if (existeItem) {
        //Se o item ja existe aumenta apenas a quantidade +1
        existeItem.quantity += 1;

    } else {
        cart.push({
            name, price, quantity: 1
        })
    }

    updateCartModal()

}

//Atualiza carrinho
function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemsElement = document.createElement("div");
        cartItemsElement.innerHTML = `
        <div>
            <div>
                 <p>${item.name}</p>
                 <p>${item.quantity}</p>
                 <p>${item.price}</p>
            </div>
            <div>
            <button> Remover </button>
            </div>
        </div> 
        `
        cartItemsContainer.appendChild(cart)
    })

}
    
*/