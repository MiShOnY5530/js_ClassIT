// // let currentPage = 1;
// // let itemsPerPage = 20;
//
// // function ScriptFake() {
// //   fetch(`https://fakestoreapi.com/products?limit=${itemsPerPage}&page=${currentPage}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       let productInfo = document.getElementById('productInfo');
// //       productInfo.innerHTML = data.map(product => `
// //         <div>${product.title}</div>
// //         <div>${product.id}</div>
// //         <div>${product.price}</div>
// //         <div>${product.description}</div>
// //         <div><img src="${product.image}" alt="${product.title}" class="image"></div>
// //       `).join('');
// //     })
// // }
//
// // function nextPage() {
// //   currentPage++;
// //   ScriptFake();
// // }
//
// // if (window.jQuery) {
// //   var verJquery = jQuery.fn.jquery;
// //   // выведем версию jQuery в консоль
// //   console.log(verJquery);
// // }
//
// // $(document).ready(function() {
// //   $('body').append('<div id="myDiv" style="text-align: center; font-size: 20px;">random text</div>');
//
// //   function changeText() {
// //     $('#myDiv').text('Привіт');
// //   }
//
// //   setTimeout(changeText, 3000);
//
// //   $('body').append('<button id="myButton" style="display: block; margin: 20px auto;">Змінити текст</button>');
//
// //   $('#myButton').click(changeText);
// // });
//
//
// $(document).ready(function() {
//   $("#myButton").click(function() {
//     sendData();
//   });
//
//   function sendData() {
//     $.ajax({
//       url: "https://fakestoreapi.com/products",
//       method: "GET",
//       dataType: "html",
//       success: function (data) {
//         $("#info").html(data);
//       },
//       error: (data) => {
//         console.log("dataError", data);
//       },
//     });
//   }
// });
//
//
//
// $(document).ready(function(){
//   $("#myBtn").click(function(){
//     $("#myModal").fadeIn();
//     $(".modal-content").delay(1000).animate({
//       top: '50%',
//       color: 'red'
//     });
//   });
//   $(".close").click(function(){
//     $("#myModal").fadeOut();
//   });
// });
//
//
// document.addEventListener("DOMContentLoaded", (event) => {  console.log("DOM полностью загружен и разобран");})
//
// const yearsDiff = date.getFullYear() - 1970;
// console.log(`Різниця в роках з 1970 року: ${yearsDiff}`);
//
// const seconds = Math.floor(date.getTime() / 1000);
// console.log(`Дата в секундах: ${seconds}`);
//
// const minutes = Math.floor(seconds / 60);
// console.log(`Хвилин: ${minutes}`);
//
// const hours = Math.floor(minutes / 60);
// console.log(`Годин: ${hours}`);
//
//
// const days = Math.floor(hours / 24);
// console.log(`Днів: ${days}`);
//
// let months = Math.floor(days / 30);
// console.log(`Місяців: ${months}`);
//
// let initialTimeInSeconds = new Date(1970, 0, 1).getTime() / 1000;
//
// let timeDiffInSeconds = seconds - initialTimeInSeconds;
// console.log(`Різниця між поточною датою та 1970 роком в секундах: ${timeDiffInSeconds}`);

//26.04

const x = document.getElementById("delphin");

const data = document.querySelector(".block-animal").childNodes[1];
console.log("data", data);

const arrayRight = ["left", "right", "top", "bottom"];


x.addEventListener("mousemove", function (ev) {
    for (let i = 0; i < 100; i++) {
        data.style.position = "fixed";
        data.style.left = `${ev.y}px`;
    }
});

addEventListener("mousemove", (event) => {

});

