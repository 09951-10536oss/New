document.addEventListener('DOMContentLoaded', () => {
    // ควบคุมแอนิเมชันของตัวหนังสือเมื่อเมาส์ชี้
    document.querySelectorAll('.section-title').forEach(el => {
        el.addEventListener('mouseover', () => {
            el.classList.add('glow-text');
        });
        el.addEventListener('mouseout', () => {
            el.classList.remove('glow-text');
        });
    });
});
