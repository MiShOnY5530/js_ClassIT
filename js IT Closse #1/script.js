function sendRequest() {
  return fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(response => response.json())
    .then(json => console.log(json));
}

//1
const name = "Alex"
let fullName = "Alex Zasadiuk"
var age = "29"

console.log(name)
console.log(fullName)
console.log(age)

const strinName = "123"
const boolNameFalse = false;
const boolNameTrue = true;
const variableUndefined = undefined;

