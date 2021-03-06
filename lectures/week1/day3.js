class Developer {
    constructor(name, health = 100, braincell = 1){
    this.name = name;
    this.language = ["Python", "MERN", "JAVA"];
    this.health = health;
    this.braincell = braincell;
    }
    // method : what a developer can do
    sleep(){
        console.log("Zzzzzzzzzzzzzzz")
        this.braincell += 5
        this.health += 10
        return this
    }

    completeProject(title) {
        console.log(`${this.name} completed a project named ${title}`)
        this.health -= 20;
        this.braincell -= 10;
        return this
    }
}

class JuniorDeveloper extends Developer {
    constructor() {
        super("Junior Developer", 70, 10)  //calling constructor of class Developer
        this.excitementLevel = 100
    }
}

const dev1 = new Developer("Jonathan")
const dev2 = new Developer("Max", 80, 5) //if we remove 5, braincell will return back to 1
dev1.sleep().sleep().sleep().sleep().sleep().completeProject("MyBank Python")
dev2.completeProject("C# Project")


console.log(dev1)
console.log(dev2)

const junDev = new JuniorDeveloper()
junDev.completeProject("Random Number Generator")
console.log(junDev)

// -------callback functions---------

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged $${price}.`)
}

const returningItem = (person, price) => {
    console.log(`Processing refund for ${person}, $${price} will be issued to ${person}'s bank account.`)
}

const parentFunction = (callback, person, price) => {
    console.log("Welcome to the store!")
    callback(person, price)
}

parentFunction(makingPurchase, "Jonas", 1000)
parentFunction(returningItem, "Max", 400)

// -------Object.freeze()---------
const shoppingList = Object.freeze([
    {id:3, itemName: "Wet Food", price: 1.29, shops: ["Petco", "Amazon"]},
    {id:5, itemName: "Red Gaming Chair", price: 300, shops: ["Best Buy", "Amazon"]},
    {id:9, itemName: "Soup Dumplings", price: 3.29, shops: ["Trader Joes"]},
    {id:2, itemName: "Air Ticket to Japan", price: 1400, shops: ["Expedia"]},
    {id:10, itemName: "Custard Tart", price: 3.99, shops: ["Trader Joes"]}
]);


// -----.map & .filter-----

// .map()
// DEMO: return an array of prices
const prices = shoppingList.map((item) => {
    return item.price
})

const prices2 = shoppingList.map((item)=> `${item.itemName} will cost ${item.price}`)


// 1. Loop through each element inside the array
// 2. Grab the returned data (item.price)
// 3. Make an array using the above returned data


console.log(prices)
console.log(prices2)

// TODO: return a list of item names

const items = shoppingList.map((item) => item.itemName)
console.log(items)

// .filter()

// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems = shoppingList
        .filter((item) => item.price<100) 
        .map((item) => `${item.itemName} only costs ${item.price}`)
console.log(cheapItems)
// 1. loop through each item inside the array
// 2. returns items that are only priced under $100


// TODO: delete an item

const deleteId = 2
const deletedList = shoppingList.filter((item) => item.id !== deleteId)

console.log(deletedList)


// TODO: delete position

const deletePos = 0
const deletePosList = shoppingList.filter((item, i) => i !== deletePos)
console.log(deletePosList)

// TODO: include items only bought through Trader Joes

const traderJoes = shoppingList.filter((item) => item.shops.includes("Trader Joes"))
console.log(traderJoes)

// concat , spread

const addTV = shoppingList.concat([{itemName: "TV", price: 1299, shop: ["Best Buy"]}])
console.log(addTV)

const addGame = [...shoppingList, {itemName: "tetris", price: 29, shop: ["Best Buy", "Amazon"]}]
console.log(addGame)

// get first 2 items
const firstTwoItems = [...shoppingList.slice(0,2)]
console.log(firstTwoItems)

// exclude position 3
const removePos3 = [...shoppingList.slice(0,3), ...shoppingList.slice(4,5)]
console.log(removePos3)

// splice vs slice

const array = [1,2,3,4,5];
console.log([...array.splice(1,2)]) //delete 2 elements from array[1]
console.log(array)

const array2 = [1,2,3,4,5];
console.log(array2.slice(1,2)); // starting at 1, ending at 2
console.log(array2)

//--------sorting---------

console.log(cheapItems)
const sortedItemNames = cheapItems.sort()
console.log(sortedItemNames)

console.log(prices)
const sortedPrices = prices.sort((a,b)=> a-b)
console.log(sortedPrices)

const sortedByName = [...shoppingList].sort((a, b) => a.itemName > b.itemName? 1: -1)
console.log(sortedByName)