//2 Оператори порівняня логічні оператори 

 
//const x = 10;
//const x1 = '10';
//const y = 11;
//const c = 8;

//console.log (typeof(x)); 'number'
//console.log (x == x1); true
//console.log (x ==== x1); false


const num = 10;
const str = "10";

console.log(num == str); // true

console.log(num === str); // false



let result1 = 2 * 3;
console.log(result1);

let result2 = 6 / 2;
console.log(result2); 

let result3 = 1 + 2;
console.log(result3); 

let result4 = 5 - 2;
console.log(result4); 

let result5 = Math.pow(2, 3);
console.log(result5); 

let result6 = 2 ** 3;
console.log(result6);


// Умовні оператори (||, &&)
// || - два слеша - повернути те чи інше
// && - два амперсанта - І - і злівої сторони і з правої мвє бути відповідність, тоді поверну true інакше буде false

// if  - якщо (умова) { зробити дещо}
// else - iнакше (зробити інше)

if (num >= 2015 && num < 2050) {
  console.log("Рік дійсно більше ніж 2015 і менше чем 2050");
} else {
  console.log("Рік дійсно менший ніж 2015"); 'Рік дійсно менший ніж 2015'
}


// const num = 10

//написати декілька умов які перевіряють число більше фбо менше іншого числа, якщо число більше - вивести в консоль - число більше ніж (саме число, яке перевіряється)

// 1
if (num > 2015) {
  console.log(`Число ${num} більше ніж 2015`);
} else {
  console.log(`Число ${num} менше або дорівнює 2015`);
}

if (num > 2015 && num < 2050) {
  console.log(`Число ${num} більше 2015 і менше 2050`);
} else {
  console.log(`Число ${num} не знаходиться в діапазоні 2015-2050`);
}

if (num > 10) {
  console.log(`Число ${num} більше 10`);
} else {
  console.log(`Число ${num} менше або дорівнює 10`);
}

if (num > 10 && num < 20) {
  console.log(`Число ${num} більше 10 і менше 20`);
} else {
  console.log(`Число ${num} не знаходиться в діапазоні 10-20`);
}

//2
function isYearBetween2015and2050(num) {
  if (num > 2015 && num < 2050) {
    return true;
  } else {
    return false;
  }
}
const isBetween = isYearBetween2015and2050(num);
console.log(isBetween);

//3
function isYearBetween2015and2050(num) {
  if (num > 2015 || num < 2050) {
    return true;
  } else {
    return false;
  }
}


