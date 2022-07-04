// #1

// given
console.log(hello);  //Predict undefined                                 
var hello = 'world';                                 

// rewritten
var hello = 'world';
console.log(hello);


// #2

// given
var needle = 'haystack'; //Global variable isn't called
test();
function test(){
    var needle = 'magnet';
    console.log(needle); //var within function will only print
}

// rewritten
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();
console.log(needle);


// #3

// given
var brendan = 'super cool';
function print(){ //function never runs
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //logs 'super cool'

// rewritten
var brendan = 'super cool';
function print(){
    var brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);


// #4 

//given
var food = 'chicken';
console.log(food); //logs chicken
eat(); //function called
function eat(){
    food = 'half-chicken';
    console.log(food); //logs half-chicken
    var food = 'gone'; //var within function doesn't get called
}

// rewritten
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
    console.log(food)
}


// #5

// given
mean(); //No function exists
console.log(food); //food not declared
var mean = function() { //invalid syntax, won't run
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); //food still not declared

//rewritten
function mean() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();


// #6

// given
console.log(genre); //undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //log rock
    var genre = "r&b";
    console.log(genre); //log r&b
}
console.log(genre); //log disco

// rewritten
var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// #7

// given
dojo = "san jose";
console.log(dojo); //log san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //log seattle
    var dojo = "burbank";
    console.log(dojo); //log burbank
}
console.log(dojo); //log san jose


// #8 Bonus

// given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //syntax with dictionary
    }
    return dojo;
}

// rewritten
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
        dojo.operation = "open for business"
    }
    else if(dojo.students <= 0){
        dojo.hiring = false;
        dojo.operation = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));



















