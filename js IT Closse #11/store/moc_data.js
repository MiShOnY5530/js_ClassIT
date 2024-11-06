function fetchProducts() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('products', JSON.stringify(data));
        })
        .catch(error => console.error('Error:', error));
}

fetchProducts();





window.onload = function() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    document.getElementById('greeting').textContent = 'Привіт: ' + username + '!, Ваш пароль: ' + password;
};