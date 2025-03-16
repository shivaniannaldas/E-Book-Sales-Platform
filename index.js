document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter-link');
    const bookItems = document.querySelectorAll('.book-item');
    const searchBar = document.getElementById('search-bar');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedCategory = this.getAttribute('data-category');

            bookItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Add search functionality
    searchBar.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();

        bookItems.forEach(item => {
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            const author = item.querySelector('.card-text').textContent.toLowerCase();

            if (title.includes(searchText) || author.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


function filterBooks(category, searchTerm) {
    let hasResults = false;

    bookItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const title = item.querySelector('.card-title').textContent.toLowerCase();
        const matchesCategory = (category === 'all' || itemCategory === category);
        const matchesSearch = title.includes(searchTerm);

        // Show item if it matches both category and search term
        if (matchesCategory && matchesSearch) {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    // Show "No results found" message if no items are displayed
    noResultsMessage.style.display = hasResults ? 'none' : 'block';
}

