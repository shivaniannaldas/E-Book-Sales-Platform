document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const bookElement = this.closest('.book');
            const title = bookElement.getAttribute('data-title');
            const price = parseFloat(bookElement.getAttribute('data-price'));

            // Add item to cart
            cart.push({ title, price });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${title} has been added to the cart!`);
        });
    });
});
