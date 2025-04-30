// Q1
let name = "Alice";
if (true) {
    let name = "Bob";
    console.log(name); // Bob
}
console.log(name); // Alice

// Q2
const add = (a, b) => a + b;

// Q3
let greeting = `Hello, ${name}!
Welcome to the course.`;

// Q4
const { name, age } = person;

// Q5
function calculateArea(width, height = width) {
    return width * height;
}

// Q6
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArray = [...arr1, ...arr2]