let shoppingList = ["milk", "egg", "bread"];

function addItem(item) {
    return shoppingList.push(item);
}

addItem("pear");
addItem("coffe");

console.log("Items are added. The shopping list is ", shoppingList);

function removeLastItem(shoppingList) {
    return shoppingList.pop();
}

removeLastItem(shoppingList);
console.log("Item is removed. The shopping list is ", shoppingList);

addItem("coffe");
addItem("sugar"); 

function checkCartFull(shoppingList) {
    if (shoppingList.length < 0) {return}
    else if (shoppingList.length > 5) {
        console.log("The shopping cart is full.");
        removeLastItem(shoppingList);
    }

    console.log("The shopping list is:");
    shoppingList.forEach((item) => {
        console.log(item);
    });
}

checkCartFull(shoppingList);

function findItem(shoppingList, item) {
    return shoppingList.includes(item);
}

let findResult = findItem(shoppingList, "egg");

console.log(`Is the item egg in the shopping list? ${findResult}.`);
findResult = findItem(shoppingList, "apple");
console.log(`Is the item apple in the shopping list? ${findResult}.`);

let itemObject = new Object();
itemIndex = Math.ceil(Math.random() * shoppingList.length);
item = shoppingList[itemIndex];

itemObject['name'] = item;
itemObject['price'] = (Math.random() * shoppingList.length).toFixed(2);
itemObject['quantity'] = Math.ceil(Math.random() * 10);

console.log("The item object is ", itemObject);