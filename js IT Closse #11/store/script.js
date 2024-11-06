function getProducts() {
    let products = localStorage.getItem('products');
    if (products) {
        products = JSON.parse(products);
        console.log(products);
    }
}

getProducts();




document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    const spinner = document.createElement('div');
    spinner.className = 'spinner-grow';
    spinner.style.color = 'red';
    document.body.appendChild(spinner);

    setTimeout(function() {
        window.location.href = 'profile.html';
    }, 3000);
});