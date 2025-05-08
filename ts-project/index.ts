// Q1
function add(a: number, b: number): number {
  return a + b;
}

const result = add(2, 3);
console.log('The sum result is: ', result);

// Q2
interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const user: Person = {
  name: 'Alice',
  age: 30,
};

greet(user);