let i = 0;
console.log(i++); // 0
console.log(i);

let y = 0;
console.log(y);
console.log(y);


for(let i = 1; i < 5; i++){
    console.log(i); // Виведення кількості кроків

    for(let j = 0; j < i; j++) {
        console.log(j); // Виведення j, яке збільшується з кожним кроком i
    }
}


// const arr = ["w", 2, null, undefined, NaN, -1, Boolean];





const testAraray = ["2", "3", "4", "5", "6"]

for(let i = 0; i < testAraray.length; i++){
    console.log(i);
    console.log(testAraray[i]);
}

console.log([2].length);

/// shift
const firstElementOfArr = testAraray.shift();
console.log(firstElementOfArr);

const lastElevent = testAraray.unshift();
console.log(lastElevent);

console.log(testAraray);




const fruits = ["Apple", "Vinograd", "Banana", "Kiwi", "Orange"];
const numbers = [1, 2, 3, 4, 5];

// 1. Виводимо першого елемента з масиву фруктів
const deletedFruit = fruits.shift();
console.log(deletedFruit);

// 2. Виводимо 1-й, 2-й та 3-й елементи масиву фруктів
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. Додаємо новий елемент на початок масиву чисел
numbers.unshift(0); // Додаємо 0 на початку
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[3]);



console.log("mam".length);