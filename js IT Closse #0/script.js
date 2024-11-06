//29/03/2024

// function handleSubmit(event) {
//   event.preventDefault(); 
//   const inputVal = document.getElementById("firstName").value

//   const inputVal2 = document.getElementById("lastName").value




//   const objectValueData = {
//     firstName:  inputVal,
//     lastName:  inputVal2,
//     test: []
//   };
//   console.log(objectValueData);
//   alert(objectValueData)
// }


// // //01/04/2024
// // const element = document.querySelector(".my-class");

// // if (element) {
// //   console.log("Element with class 'my-class' found!");
// //   element.textContent = "Content updated!";
// // } else {
// //   console.log("No element with class 'my-class' found.");
// }



////////
// innerHTML - властивість елемента innerHTML отримує або встановлює розмітку HTML
//1 Функція querySelectorAll для вибору всіх параграфів з класом first_block
//2 HTML блоку second_block отримую за допомогою innerHTML
// querySelectorAll використовується для вибору всіх ID в блоці second_block.
//3 querySelector для вибору блоку third_block
//4 getElementById використовується для вибору форми з ID ale
//5 getAttribute використовується для отримання ID форми

function P() {
  const paragraphs = document.querySelector('.first_block').querySelectorAll('p');
}

function HTML() {
  const secondBlockHtml = document.querySelector('.second_block').innerHTML;
}

function HTML_ALL() {
const ids = document.querySelectorAll('.second_block').getAttribute('id');
}

function HTML_Two() {
const thirdBlockHtml = document.querySelector('.third_block').innerHTML;
}

function HTML_alex() {
const form = document.getElementById('alex');
}

function idform() {
const formId = form.getAttribute('id');
}

