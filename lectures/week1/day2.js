//  JavaScript -- web vs node



// ECMA


// --------Hoisting----------
let cat = "pepper";
console.log(cat);

// step 1: define cat as undefined
// step 2: define cat as pepper
// step 3: logs pepper


// --------const & let---------
const food = "duck";
console.log(food);

// for(const i =0; i<10; i++){ //const won't work becaue it cannot be reassigned
//     console.log(i);
// }

for(let i =0; i<10; i++){ //let can be reassigned
    console.log(i);
}

const skills = ["debugging", "sleeping", "brewing coffee"]; //array is memory address
skills.push("Tetris");
skills[0] = "fixing bugs";
console.log(skills);

// skills = "debugging"; //will not work, cannot reassign variable to a different memory address

// no longer using 'var'
// const: variables that do not get reassigned
// let: variables that can get reassigned


// --------scope---------
let myName = "Heidi";
function changeName(){
    let myName = "Chen"; // if we remove 'let' this line will change global variable
    console.log(myName);
}
console.log(myName); // Heidi
changeName(); // Chen
console.log(myName); // Heidi


// --------destructuring--------

const post = {
    title : "First day in MERN",
    viewers : 1000,
    likes : 500,
    description : "An awesome day with MERN. It works",
    hashtags : ["excellent", "great", "fun"]
}

const {title : newTitle, viewers, description, createdAt} = post;
// create -- const title
// find post.title
// assign post.title into newTitle




// const title = post.title
// const viewers = post.viewers
// const likes = post.likes

console.log(newTitle)
console.log(viewers)
console.log(description)
console.log(createdAt)
console.log(post)

const trips = ["Japan", "Spain", "France", "Norway"]; //memory location
console.log(trips);

const [firstCountry, ,thirdCountry] = trips;
console.log(firstCountry);
console.log(thirdCountry);

const [,,france] = trips;
console.log(france)

// ---------Spread & Rest----------

const tripsCopy = [...trips] // creates copy of trips, adding all elements into new array
tripsCopy.push("Seoul")
trips.push("Canada")
console.log(tripsCopy)
console.log(trips)

const tripsWithThailand = ["Thailand", ...trips]
console.log(tripsWithThailand)

const postCopy = {...post} // create a new object, put all key/value pair of post into it
postCopy.title = "new title"
console.log(postCopy)
console.log(post)

const newTitlePost = {...post, title: "New Title"}
console.log(newTitlePost)

// ---------Arrow Function----------

function printHello(){
    console.log("Hello, Winter");
} // (){} --> () =>

// arrow function
const printHello2 = () =>{
    console.log("Hi, Winter");
}

// normal
function changePrice(price, discount){
    return price * discount;
}

// arrow - longhanded
const changePrice2 = (price, discount) => {
    return price * discount;
}

// arrow - shorthanded
const changePrice3 = (price, discount) => price*discount

const changePrice4 = (price, discount) => (price*discount)

console.log(changePrice(100,0.9))
console.log(changePrice2(100,0.9))
console.log(changePrice3(100,0.9))
console.log(changePrice4(100,0.9))

// --------Termary Operators--------
// if or else statements
let rating = 8
if(rating>7){
    console.log("This is a good movie") // yes-statement
}
else{
    console.log("This is a terrible movie") //no-statement
}

// (conditional)? yes-statement : no-statement
(rating>7)?
    console.log("This is a good movie"):
    console.log("This is a terrible movie")

// IF..... short-circuited logical operator &&
rating>7&&console.log("This is great")
const likes = 100

rating>7 && likes>50 && console.log("This is awesome")

if(rating>7){
    console.log("rating over 7")
}
else if(rating>5){
    console.log("Medium rating")
}
else{
    console.log("Terrible rating!")
}

rating = 6;

(rating>7)?
    console.log("rating over 7"):
    (rating>5)?
    console.log("medium rating"):
    console.log("Terrible rating")