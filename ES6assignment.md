# Let, Const 和 Var

代码重写：

```js
let name = "Alice";
if (true) {
    let name = "Bob";
    console.log(name); // Bob
}
console.log(name); // Alice
```

var是过时的写法，因为它是函数作用域，会造成作用域混乱。并且会造成变量提升hoisting，造成undefined的问题。

const和let都是块级作用域block scope，会让变量在作用域外部失效。可以避免潜在的bug。

当需要保证变量为常量时，用const。当需要让变量可以被改变时，应该用let。

# Arrow functions

```js
const add = (a, b) => a + b;
```

function的this是谁调用就绑定谁，调用时的动态绑定。所以function比较适合在面向对象方法、事件监听的时候用。

而箭头函数的this是在定义时就静态绑定了，它只取决于定义时的外部作用域，不会再变化。箭头函数适合作为回调函数、定时器、数组方法等场合，例如：.map(), .forEach(), .filter() 的回调，setTimeout、setInterval，React 中的事件处理防止 this 被重置，封装闭包逻辑。

# Template literals

```js
let greeting = `Hello, ${name}!
Welcome to the course.`;
```

# Destructuring

```js
const { name, age } = person;
```

# Default Parameters

```js
function calculateArea(width, height = width) {
    return width * height;
}
```

# Rest/Spread

```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArray = [...arr1, ...arr2];
```


