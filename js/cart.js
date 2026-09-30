let cart = [];

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    toggleCart(true);
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartCount.innerText = totalQty;
    cartTotalPrice.innerText = formatPrice(totalPrice);

    cartItems.innerHTML = cart.length === 0 ? '<p style="text-align:center; color:#94a3b8; margin-top:20px;">ไม่มีสินค้าในตะกร้า</p>' : '';

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <strong style="color:white;">${item.name}</strong><br>
                <small style="color:#38bdf8;">${formatPrice(item.price)} x ${item.qty}</small>
            </div>
            <button onclick="removeFromCart('${item.id}')" style="background:none; border:none; color:#ef4444; cursor:pointer; font-weight:bold; font-size:1.1rem;">❌</button>
        `;
        cartItems.appendChild(div);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function toggleCart(open) {
    const drawer = document.getElementById('cartDrawer');
    if (open) drawer.classList.add('open');
    else drawer.classList.remove('open');
}
