// display local storage item 
const displayLocalStorage = () => {
    const cart = getCart()
    for (product in cart) {
        displayProducts(product)
    }
}

// add product btn handel 
const addProduct = () => {
    const inputField = document.getElementById('input-value');
    const productName = inputField.value;
    //    display in the ui 
    displayProducts(productName)

    // set local sotrage 
    addProductToCart(productName)

    inputField.value = '';
}

// dispaly ui function 
const displayProducts = name => {
    const productList = document.getElementById('porduct-list');
    const li = document.createElement('li');
    li.innerText = name;
    productList.appendChild(li)
}

// get locl storage 
const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    } else {
        cartObj = {}
    }
    return cartObj;
}

// set items local storage 
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
}

// handel remove btn 
const removeItems = () => {
    document.getElementById('porduct-list').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorage();