function renderProducts(productsList) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    if (productsList.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#94a3b8; font-size:1.2rem; padding:40px;">ไม่พบสินค้าที่คุณค้นหา</p>';
        return;
    }

    productsList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card fade-in-up';
        card.innerHTML = `
            <div class="product-img-wrap">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title bounce-hover">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-primary btn-block bounce-hover" onclick="openProductModal('${product.id}')">ดูรายละเอียด</button>
                    <button class="btn btn-success bounce-hover" onclick="addToCart('${product.id}')">🛒</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
                  }
