const name = "Alex";

switch (name) {
  case "Dima":
    console.log(name, "не відповідає умові");
    break;
  case "Sergo":
    console.log(name, "не відповідає умові");
    break;
  default:
    console.log(name, "майже знайдений");
}

//---
const age = 20;

if (age >= 18) {
  console.log(age, "я вже повнолітній");
} else {
  console.log(age, "я не повнолітній");
}


  const result = age > 18 ? console.log(age, "я вже повнолітній") : console.log(age, "я не повнолітній");

  //---

  function summ(a, b){
    return a + b;
  }
  summ();

  //console.log(summ());


  // Функція з двома аргументами
function sum(a, b) {
  return a + b;
}

// Функція без аргументів
function sumWithoutArgs() {
  const a = 10; // Перший параметр
  const b = 20; // Другий параметр
  return a + b;
}

// Приклад виклику функцій
console.log("Сума з аргументами:", sum(5, 3));
console.log("Сума без аргументів:", sumWithoutArgs());


  

  //Функція для сум
  function sum(a, b) {
    return a + b;
  }
  
  let dodav = sum(5, 3);
  console.log(`Сума: ${dodav}`)
  

  //Функція для віднімання
  function subtract(a, b) {
    return a - b;
  }
  
  let difference = subtract(10, 4);
  console.log(`Різниця: ${difference}`);

  // Функція для множення:
  function multiply(a, b) {
    return a * b;
  }

  let product = multiply(2, 5);
  console.log(`Добуток: ${product}`);
  
  // Функція для ділення:
  function divide(a, b) {
    return a / b;
  }
  
  let quotient = divide(12, 3);
  console.log(`Частка: ${quotient}`);




  function getfunction(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
      return a * b;
    } else if (a % 2 !== 0 && b % 2 !== 0) {
      return a + b;
    } else {
      return a % 2 !== 0 ? a : b;
    }
  }
  
  console.log(getfunction(2, 4));
  console.log(getfunction(1, 3));
  console.log(getfunction(2, 1));
  console.log(getfunction(3, 2));
  
  //------

  function compare(param1, param2, strict = false) {
    return strict ? (param1 === param2) : (param1 == param2);
  }

  console.log(compare(2, 5)); // true (строге порівняння)
  console.log(compare(1, 1, false)); // true (нестроге порівняння)



  




  