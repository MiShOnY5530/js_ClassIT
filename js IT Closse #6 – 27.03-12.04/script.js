// // // // //#JS 6 Class
// // //27.03.2024
// // // // // 1 вхідні дані:
// // // // const arrayParams = [
// // // //     ['foo', 'bar'],
// // // //     ['baz', 42],
// // // //     ['baz1', 42],
// // // //     ['baz2', 42],
// // // //     ['baz3', 42],
// // // //     ['baz4', 42],
// // // //     ['baz5', 42],
// // // //     ['baz6', 42],
// // // //     ['baz7', 42],
// // // // ]
// // // // const obj = {};

// // // // for (const param of arrayParams) {
// // // //   obj[param[0]] = param[1];
// // // // }

// // // // console.log(obj);



// // // // // 2  вхідні дані:
// // // // const object = {
// // // //     name: 'Иван',
// // // //     age: 45
// // // // };

// // // // // [['name', 'Иван'], ['age', 45]]
// // // // const objectKeys = Object.keys(object);
// // // // const objectValues = objectKeys.map(key => [key, object[key]]);
// // // // console.log(objectValues);

// // // // //
// // // // const strRefactor = "Today we gonna teacher some abiturientes";
// // // // strRefactor[0] = "W";

// // // // let newSrt = strRefactor.substring(0, 2)

// // // // console.log(strRefactor[0]);

// // // // Медот Reg Exp
// // // //методи для вставки, дублювання, обрізання, та інші

// // // // метод split i join

// // // // const strRefactor = "Today we gonna"
// // // //     const converStr = strRefactor.split(",")

// // // // let newSrt = strRefactor.substring(0,2)

// // // // console.log(converStr);



// // // const str = "34327489172834785403508234";

// // // //цифри які > 5 замінити на 1, а ті які менше замінити на 0 .
// // // // метод split i join

// // // const regex = /(\d)/g;
// // // const modifiedStr = str.split(regex).map(digit => digit.match(regex) ? (digit > 5 ? '1' : '0') : digit).join('');
// // // console.log(modifiedStr);



// // // //1
// // // function isPalindrome(str) {
// // //     const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
// // //     const reversed = cleaned.split('').reverse().join('');
// // //     return cleaned === reversed;
// // //   }
// // //   const originalStr = 'qwe123rty456uio789';
// // //   console.log(replaceDigitsMethods(originalStr)); 



// // //   //2
// // //   // Реалізація через масив
// // // function replaceDigitsMethods(str) {
// // //   const regex = /(\d)/g;
// // //   return str.split(regex).map(digit => digit.match(regex) ? (digit > 5 ? '1' : '0') : digit).join('');
  
// // // }

// // // // Реалізація через цикл
// // // function replaceDigitsLoop(str) {
// // //   const regex = /(\d)/g;
// // //   let modifiedStr = '';
// // //   for (let i = 0; i < str.length; i++) {
// // //     if (str[i].match(regex)) {
// // //       modifiedStr += str[i] > 5 ? '1' : '0';
// // //     } else {
// // //       modifiedStr += str[i];
// // //     }
// // //   }
// // //   return modifiedStr;
// // // }
// // // console.log(replaceDigitsLoop(originalStr));













// // //05.04.2024
// // // function addClass() {
// // //   const paragraph = document.getElementById("myParagraph");
// // //   paragraph.classList.add("highlighted");
// // // }


// // // function changeText() {
// // //   const childDiv = document.getElementById("child");

// // //   childDiv.textContent = "Текст який я змінив!";
// // // }

// // // changeText();

// // // function tog () {
// // //   const togleSnipet = document.getElementById("togle_btn");
// // //   console.log(togleSnipet);
// // //   togleSnipet.classList.toggle("togle_block");
// // // }












// // //08.04.2024

// //     let div2 = document.createElement("div");
// //     let paragraph = document.createElement("p");
  
// //     paragraph.classList.add("paragraph_style")
  
// //     console.log("paragraph", paragraph);
  
// //     div2.append("This is Alex", paragraph);
  
// //     console.log("div2", div2);
  



// //     //створити на HTML сторінці 2 div, 

// //     //перший div має містити id і класнейм, а другий пустий 
// //     // в файлі script створити активно рантомний елемент, якому додаєте клас, додаєте текст, та додаєте його на сторінку

// //     //це повинно бути обгорнкто в функцію, яка по кліку на кнопку показує юзер ваш блок, кнопка має назву SHOW MY CONTENT

// //     //append, classlist.add()

  



// //     function RandomText() {
// //       document.getElementById("show-content").addEventListener("click", () => {
// //         const randomElement = document.createElement("div");
// //         randomElement.classList.add("random-element");
// //         randomElement.textContent = "Доброго вечора, ми з України!";
// //         document.getElementById("container").append(randomElement);
// //       });
// //     }
    
// //     RandomText();
    


// // let appendElement = document.createElement('div');
// // appendElement.textContent = 'В кінці!';
// // document.body.append(appendElement);


// // let prependElement = document.createElement('span');
// // prependElement.textContent = 'На початку!';
// // document.body.prepend(prependElement);


// // let beforeElement = document.createElement('p');
// // beforeElement.textContent = 'Перед початком!';
// // appendElement.before(beforeElement)


// //12.04.2024
// function fetchData() {
//   fetch('https://fakestoreapi.com/products/categories')
//     .then(response => response.json())
//     .then(data => {
//       console.log('Категорії товарів:', data);
//     })
//     .catch(error => {
//       console.error('Помилка при отриманні даних:', error);
//     });
// }


// function fetchData() {
//   fetch('https://fakestoreapi.com/products/categories')
//       .then(response => response.json())
//       .then(data => {
//           const categories = data;
//           const firstCategory = categories[0];

//           console.log('Мій перший елемент:', firstCategory);

//           const categoriesDiv = document.getElementById('categories');
//           categoriesDiv.textContent = firstCategory;
//       })
// }


const productDetails = document.getElementById('product-details');

fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product-container');

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Назва:';
        const titleSpan = document.createElement('span');
        titleSpan.textContent = json.title;

        const idLabel = document.createElement('label');
        idLabel.textContent = 'ID:';
        const idSpan = document.createElement('span');
        idSpan.textContent = json.id;

        const priceLabel = document.createElement('label');
        priceLabel.textContent = 'Ціна:';
        const priceSpan = document.createElement('span');
        priceSpan.textContent = json.price;

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Опис:';
        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = json.description;

        productInfo.appendChild(titleLabel);
        productInfo.appendChild(titleSpan);
        productInfo.appendChild(idLabel);
        productInfo.appendChild(idSpan);
        productInfo.appendChild(priceLabel);
        productInfo.appendChild(priceSpan);
        productInfo.appendChild(descriptionLabel);
        productInfo.appendChild(descriptionSpan);

        const productImage = document.createElement('img');
        productImage.classList.add('product-image');
        productImage.src = json.image;

        productContainer.appendChild(productInfo);
        productContainer.appendChild(productImage);

        productDetails.appendChild(productContainer);
    });
