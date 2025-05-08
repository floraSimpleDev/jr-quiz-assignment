// Q1
function add(a, b) {
    return a + b;
}
var result = add(2, 3);
console.log('The sum result is: ', result);
function greet(person) {
    console.log("Hello, ".concat(person.name, "! You are ").concat(person.age, " years old."));
}
var user = {
    name: 'Alice',
    age: 30,
};
greet(user);
