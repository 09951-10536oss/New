function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div style="text-align:center;">
            <img src="${product.image}" style="width:100%; max-height:220px; object-fit:cover; border-radius:12px; margin-bottom:15px;">
            <h2 class="glow-text" style="color:#38bdf8; margin-bottom:10px; font-size:1.4rem;">${product.name}</h2>
            <p style="color:#cbd5e1; margin-bottom:15px; font-size:0.95rem; line-height:1.5;">${product.description}</p>
            <h3 style="color:#f43f5e; font-size:1.6rem; margin-bottom:20px;">${formatPrice(product.price)}</h3>
            <button class="btn btn-success btn-block float-anim" onclick="addToCart('${product.id}'); closeModal();">ใส่ลงตะกร้า 🛒</button>
        </div>
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}
