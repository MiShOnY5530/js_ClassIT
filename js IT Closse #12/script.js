// function getProducts() {
//     let products = localStorage.getItem('products');
//     if (products) {
//         products = JSON.parse(products);
//         console.log(products);
//     }
// }
//
// getProducts();
//
//
//
//
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//
//     const spinner = document.createElement('div');
//     spinner.className = 'spinner-grow';
//     spinner.style.color = 'red';
//     document.body.appendChild(spinner);
//
//     setTimeout(function() {
//         window.location.href = 'profile.html';
//     }, 3000);
// });


// function someentries () {
//     const unswer = prompt("enter your value");
//     unswer === null || unswer === '' ? null : doSecondPrompt();
// }
//
// function doSecondPrompt() {
//     const unswer_second = prompt("enter your name");
//     unswer_second === null || unswer_second === '' ? null : doThirdPrompt();
// }
//
// function doThirdPrompt() {
//     const unswer_third = prompt("enter your name");
// }
//
// someentries();



const colors = { on: 'blue', off: 'red' };
localStorage.setItem('colors', JSON.stringify(colors));

const storedColors = JSON.parse(localStorage.getItem('colors'));

document.getElementById('flexSwitchCheckDefault').addEventListener('change', function() {

document.body.style.backgroundColor = this.checked ? storedColors.on : storedColors.off;
});

document.body.style.backgroundColor = document.getElementById('flexSwitchCheckDefault').checked ? storedColors.on : storedColors.off;
