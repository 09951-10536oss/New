function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('searchInput');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterAndSearch();
        });
    });

    searchInput.addEventListener('input', filterAndSearch);
}

function filterAndSearch() {
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const filtered = productsData.filter(p => {
        const matchCat = activeCategory === 'all' || p.category === activeCategory;
        const matchSearch = p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm);
        return matchCat && matchSearch;
    });

    renderProducts(filtered);
}
