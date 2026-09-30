document.addEventListener('DOMContentLoaded', () => {
    // เรนเดอร์สินค้าตั้งต้นและตั้งค่าตัวกรอง
    renderProducts(productsData);
    setupFilters();

    // Event Listeners สำหรับการทำงานต่างๆ
    document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
    document.getElementById('closeCart').addEventListener('click', () => toggleCart(false));
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if(cart.length === 0) {
            alert('กรุณาเลือกสินค้าลงตะกร้าก่อนชำระเงิน');
        } else {
            alert('ขอบคุณที่อุดหนุน! ระบบจำลองการชำระเงินเสร็จสมบูรณ์');
            cart = [];
            updateCartUI();
            toggleCart(false);
        }
    });
});
