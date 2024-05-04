/* JavaScript Intro


// console.log(`Hello`);
// console.log(`I like Pizza!`);

// window.alert(`This is an alert!!!`);
// window.alert(`I like pizza!!!`);

// document.getElementById(`myH1`).textContent = "New H1";
// document.getElementById(`myP`).textContent = "New Paragraph";
*/


/* Variable


// let x;
// let y;
// x = 100;

// console.log(x);

// let age = 25;
// let price = 52.69;
// let gpa = 3.45;

// console.log(age);
// console.log(`You are ${age} years old`);
// console.log(typeof price);
// console.log(price);
// console.log(`That mango is ${price} bdt`);
// console.log(gpa);
// console.log(`My cgpa is ${gpa}`);

// let firstName = "Labib";
// console.log(typeof firstName);
// console.log(firstName);
// console.log(`My name is ${firstName}`);

// let email = "abc123@fake.com";
// console.log(`Your Email is ${email}`);

// let online = false;

// console.log(typeof online);
// console.log(`Labib is Online : ${online}`);

// let fullName = "Labib";
// let age = 23;
// let isStudent = true;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `My age is ${age}`;
// document.getElementById("p3").textContent = isStudent;
*/


/* Arithmetic operator


let student = 30;
// student = student + 1;
// student = student - 1;
// student = student * 2;
// student = student / 2;
// student = student % 2;
// student = student ** 2; // ** means power of 

// student++;
// student--;

console.log(student);
*/


/* Accept User Input


let username;

// username = window.prompt("Enter Username");
// document.getElementById("p1").textContent = username;
// console.log(username);

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("username").value;
//     document.getElementById("p2").textContent = `Your username is ${username}`;
// }
*/


/* Type Conversion


// let age;

// age = window.prompt("How old are you?"); // window prompt data is a string
// age = Number(age); // Number() is a function
// age += 1;
// console.log(age);

// let x = "25";
// let y = "25";
// let z = "25"; // while string have something

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);

// let x = "";
// let y = "";
// let z = ""; // while string have nothing

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);

// let x; // NaN means not a number
// let y;
// let z; // while variables are not defined

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);
*/


/* Constant


const PI = 3.1416;
let radius;
let circumference;

//PI = 420.69;

radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);
circumference = 2 * PI * radius;

console.log(circumference);
*/


/* Math 


// console.log(Math.PI);
// console.log(Math.E);

let x = -45;
let y = 2;
let z = 24 ;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x); // remove decimal portion
// z = Math.pow(y , x);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x); //absolute, means the positive number
// z = Math.sign(x); //sign means negative positive or 

let max = Math.max(x , y , z);
let min = Math.min(x , y , z);

console.log(max);
console.log(min);
*/


/* Random Number generator 


let rand = Math.floor(Math.random() * 6) + 1;

console.log(rand);
*/


/* IF Statement 


let age = 0; 

if (age >= 18 && age <= 100) {
    console.log("You are old enough to enter this site!");    
} else if (age == 0) {
    console.log("You were just born! You can't enter!");
} else if (age < 0) {
    console.log("Your age can't be negative number!");
} else if (age > 100) {
    console.log("You are probably dead!");
} else {
    console.log("You are not old enough to enter this site!");
}

// let isStudent = true;

// if  (isStudent) { // only boolean means true, !boolean means false
//     console.log("You are a student");
// } else {
//     console.log("You are not a student");
// }
*/


/* Checked Property 


const myCheck = document.getElementById("myCheck");
const visaButton = document.getElementById("visaButton");
const masterButton = document.getElementById("masterButton");
const paypalButton = document.getElementById("paypalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheck.checked) {
        subResult.textContent = `You are Subscribed!`;
    } else {
        subResult.textContent = `You are not Subscribed!`;
    }

    if (visaButton.checked || masterButton.checked || paypalButton.checked) {
        paymentResult.textContent = `You choosed payment method successfully!`;
    } else {
        paymentResult.textContent = `You didn't choose any payment method!`;
    }    
}
*/


/* Tenary Operator


// let age = 5;
// let message = age >= 18 ? "You are an adult" : "You are a minor";

let isStudent = false;
let message = isStudent ? "You are a Student" : "You are not a student";

console.log(message);
*/


/* Switches


let day = "pizza" ;

switch(day) {
    case 1 : console.log("Monday");
            break;
    case 2 : console.log("Tuesday");
            break;
    case 3 : console.log("Wednesday");
            break;
    case 4 : console.log("Thursday");
            break; 
    case 5 : console.log("Friday");
            break;
    case 6 : console.log("Saturday");
            break;
    case 7 : console.log("Sunday");
            break; 
    default : console.log(`${day} is not a day`);
            break;                       
}
*/


/* String Methods 


let username = "Labib";
let x;

// x = username.charAt(3);
// x = username.indexOf("b");
// x = username.lastIndexOf("b");
// x = username.length;
// x = username.trim();
// x = username.toUpperCase();
// x = username.toLowerCase();
// x = username.repeat(5);
// x = username.startsWith("L");
// x = username.endsWith("t");
// x = username.includes("i");
// x = username.replaceAll("b" , "t");
// x = username.padStart(15 , "T");
// x = username.padEnd(15 , "T");

console.log(x);
*/


/* String Slicing 


let fullname = "Labib Tahmid";
// let firstname = fullname.slice(0 , 3);
// let lastname = fullname.slice(6 , 12);

let firstname = fullname.slice(0 , fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);

console.log(firstname);
console.log(lastname);
*/


/* Method Chaining


let username = window.prompt("Enter your username");
//instead of writing a lot of method one after another, you can combine them using .(dot)
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
*/


/* Strict Equality


const PI = 3.1416 ;

// if (PI === "3.1416") {
//     console.log("matches PI"); // for == because only compares value
// } else {
//     console.log("Does not match PI"); // for === not only value but also data type
// }

if (PI !== "3.1416") {
    console.log("does not matches PI");
} else {
    console.log("Matches PI");
}
*/


/* Array 


let fruits = ["apple" , "orange" , "banana"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("coconut");
// fruits.shift();

// console.log(fruits);

// let numOfFruits = fruits.length;

// console.log(numOfFruits);

// let index = fruits.indexOf("mango");
// console.log(index);

// for (fruit of fruits) { 
//     console.log(fruit); // fruit can be x , y anything and this for loop is enhanced for loop
// }

console.log(fruits.sort());
console.log(fruits.sort().reverse());
*/


/* Spread Operator


// let numbers = [1 , 2 , 3 , 4 , 5];
// console.log(numbers);

// let max = Math.max(...numbers);
// let min = Math.min(...numbers); // ... is a spread operator, it sperates the number from the array
// console.log(max);
// console.log(min);

// let username = "Labib Tahmid";
// let letters = [...username];
// console.log(letters);
// letters = letters.join("-");
// console.log(letters);

let fruits = ["apple" , "banana" , "orange"];
let vegetable = ["carrots" , "Celery" , "potatoes"];
let food = [...fruits , ...vegetable , "cake" , "coke"];

console.log(food);
*/


/* Rest Parameter 


// let food1 = "Apple" , food2 = "Cake" , food3 = "Coke" , food4="Orange";

// function openFridge (...foods) {
//     console.log(foods); // join the elements in an array
// }

// openFridge(food1,food2,food3,food4);

// function getFoods (...foods) {
//     return foods;
// }

// console.log(getFoods(food1,food2,food3,food4));

let myname = fullname ("Labib" , "Tahmid" , "Mahat");

function fullname (...username) {
    return username;
}

console.log(myname.join(" "));
*/


/* Callback 


// function hello (callback) {
//     console.log("Hello!");
//     callback();
// }

// function goodbye () {
//     console.log("goodbye!");
// }

// function leave () {
//     console.log("leave");
// }

// hello(leave);

function sum (callback , x , y) {
    let result = x + y;
    callback(result);
}

function display (result) {
    console.log(result);
}

sum (display , 5 , 6);
*/


/* forEach() 


// let number = [1 , 2 , 3 , 4 , 5];

// function double (element , index , array) {
//     array[index] = element * 3; // element , index , array are given in forEach()
// }

// function display(element) {
//     console.log(element);
// }

// number.forEach(double);
// number.forEach(display);

let fruits = ["apple" , "banana" , "orange"];

function display (element) {
    console.log(element);
}

function capitalize (element , index , array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(display);
*/


/* .map() 


const number = [1 , 2 , 3 , 4 , 5]; // .map similar to forEach but it returns a new array

function square (element) {
    return Math.pow(element , 2);
}

let sqr = number.map(square);

console.log(sqr);

const date = ["2024-01-15" , "2025-07-28" , "2026-05-17"];

function arrange (element) {
    let newDate = element.split("-");
    return `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
}

console.log(date.map(arrange));
*/


/* filter() 


let number = [1 , 2 , 3 , 4 ,5 , 6 , 7];

function isEven (element) {
    return element % 2 === 0;
}

function isOdd (element) {
    return element % 2 !== 0;
}

let x = number.filter(isEven); // filter takes the boolean true and make a array by filtering the element
let y = number.filter(isOdd);

console.log(y);
*/


/* .reduce() 


let price = [50 , 12 , 19 , 28 , 2 , 32]; // reduce the element to a single value

function sum (previous , next ) { //element
    return previous + next;
}

function max (previous , next) {
    return Math.max(previous , next);
}

function min (previous , next) {
    return Math.min(previous , next);
}

let total = price.reduce(sum);
console.log(`$${total}`);
console.log(price.reduce(max));
console.log(price.reduce(min));
*/


/* function expression 


let helloyou = function hello () {
    console.log("Hello!");
}

setTimeout(helloyou() , 3000); //delays the function by ms, donot use () here normally , but we used variable here so we need ()

// setTimeout(function () {
//     console.log("This works too!")
// } , 3000);

let num = [1 , 2 , 3 , 4 , 5 , 6]; //function expression doesnt need function name , you can declare and call it instant

console.log(num.map(function(element) {
    return Math.pow (element , 2);
}));

console.log(num.filter(function (element) {
    return element % 2 !== 0;
}));

console.log(num.reduce(function(prev , next) {
    return prev + next;
}));
*/


/* Arrow Function 


// const hello = () => console.log("hello");
// hello();

// const hello = (fullname , age) => {console.log(`Hello ${fullname}`);
//                             console.log(`You are ${age} years old`)};
// hello("labib" , 25);

// setTimeout(() => console.log("HELLO") , 3000);
*/


/* Objects


const person1 = {
    firstname: "labib",
    lastname: "tahmid",
    age: 23, // , instead of ;
    isStudent: true,
    sayHello: function () {
        console.log(`HI ${this.firstname}`);
    },
}

const person2 = {
    firstname: "x",
    lastname: "yx",
    age: 30, // , instead of ;
    isStudent: false,
    sayHello: function () {
        console.log(`HI ${this.firstname}`);
    },
}

console.log(person1.firstname , person1.age , person1.isStudent);
console.log(person2.firstname , person2.age , person2.isStudent);

person1.sayHello();
person2.sayHello();
*/


/* What is This 


const person1 = {
    name: "Labib",
    food: "Cold Coffee",
    hello() {
        console.log(`HI ${this.name}, is drinking ${this.food}`)
    }
}

const person2 = {
    name: "Tahmid",
    food: "Hot Coffee",
    hello() {
        console.log(`HI ${this.name}, is drinking ${this.food} , why would you do that?`)
    }
}

person1.hello();
person2.hello();
*/


/* Constructor 


function Car (make , model , year , color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function () {
        console.log(`You are driving ${this.make}`); // you have to use this.something = function () , not function something () because that means private function
    }
}

const car1 = new Car("Ford" , "Mustang" , 2024 , "Red");
const car2 = new Car("Cheverolet" , "Camaro" , 2025 , "Blue");
const car3 = new Car("Dodge" , "Charger" , 2026 , "Silver");

console.log(car1.make , car1.model , car1.year , car1.color);
console.log(car2.make , car2.model , car2.year , car2.color);
console.log(car3.make , car3.model , car3.year , car3.color);

car1.drive();
car2.drive();
car3.drive();
*/


/* Classes 


class Product {
    constructor (productName , price) {
        this.productName = productName;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.productName} , Price: ${this.price}`);
    }
}

const product1 = new Product("Shirt" , "1500");
const product2 = new Product("Pant" , "2200");
const product3 = new Product("Suit" , "3450");
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
*/


/* Static 


// class MathUtil {
//     PI = 3.1416; // It needs object Instance
// }

// const MathUtil1 = new MathUtil();

// console.log(MathUtil1.PI);

class MathUtil {
    static PI = 3.1416; // This is in Class rather than object, so no need to make instance, so we used static
    static getDiameter(radius) {
        return radius * 2;
    }
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

 console.log(MathUtil.PI , MathUtil.getDiameter(15) , MathUtil.getArea(15));

class User {
    static usercount = 0;
    constructor (username) {
        this.username = username;
        User.usercount++;
    }

    sayHello () {
        console.log(`Hello ${this.username}`);
    }

    static onlineCount () {
        console.log(`${this.usercount} is online`);
    }
}

const user1 = new User("Labib");
const user2 = new User("Tahmid");
const user3 = new User("Mahat");

console.log(user3.username , User.usercount);

user2.sayHello();
User.onlineCount();
*/


/* Inheritance 


class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Rabbit extends Animal {
    name = "Rabbit";
    run () {
        console.log(`Is running!`)
    }
}

class Fish extends Animal {
    name = "Fish";
    swim () {
        console.log(`Is swimming!`)
    }
}

class Hawk extends Animal {
    name = "Hawk";
    fly () {
        console.log(`Is flying!`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(fish.alive);

rabbit.eat();
rabbit.run();
fish.eat();
fish.swim();
hawk.eat();
hawk.fly();
*/


/* Super Keyword 


class Animal {
    constructor (name , age) {
        this.name = name ;
        this.age = age;
    }

    move(speed) {
        console.log(`${this.name} moves at ${speed} kmh`)
    }
}

class Rabbit extends Animal {
    constructor(name , age , runspeed) {
        super(name , age);
        this.runspeed = runspeed;
    }
    run() {
        console.log(`${this.name} is running`);
        super.move(this.runspeed);
    }
}

class Fish extends Animal {
    constructor(name , age , swimspeed) {
        super(name , age);
        this.swimspeed = swimspeed;
    }
    swim() {
        console.log(`${this.name} is swimming`);
        super.move(this.swimspeed);
    }
}

class Hawk extends Animal {
    constructor(name , age , flyspeed) {
        super(name , age);
        this.flyspeed = flyspeed;
    }
    fly() {
        console.log(`${this.name} is flying`);
        super.move(this.flyspeed);
    }
}

const rabbit = new Rabbit("rabbit" , 1 , 30);
const fish = new Fish("fish" , 2 , 12);
const hawk = new Hawk("hawk" , 5 , 50);

console.log(fish.name , fish.age , fish.swimspeed);

rabbit.run();
fish.swim();
hawk.fly();
*/


/* Getter and Setter 


class Rectangle {

    constructor(width , height) {
        this.width = width;
        this.height = height;
    }

    set width(newwidth) {
        if (newwidth > 0) {
            this._width = newwidth;
        } else {
            console.error ("Enter positive number!");
        }
    }
    set height(newheight) {
        if (newheight > 0) {
            this._height = newheight;
        } else {
            console.error ("Enter positive number!");
        }
    }

    get width() {
        return this._width.toFixed(2);
    }

    get height() {
        return this._height.toFixed(2);
    }

    get area () {
        return (this._width * this._height).toFixed(2);
    }
}

const rectangle = new Rectangle(3 , 5);
console.log(rectangle.width , rectangle.height , rectangle.area);

class Person {
    constructor(firstname , lastname , age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname (newFirstname) {
        if (typeof newFirstname === "string" && newFirstname.length > 0) {
            this._firstname = newFirstname;
        } else {
            console.error ("Firstname must be non Empty String");
        }
    }

    set lastname (newlastname) {
        if (typeof newlastname === "string" && newlastname.length > 0) {
            this._lastname = newlastname;
        } else {
            console.error ("Lastname must be non Empty String");
        }
    }

    set age (newage) {
        if (typeof newage === "number" && newage >= 0) {
            this._age = newage;
        } else {
            console.error ("Age must be non negative number");
        }
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get fullname () {
        return this._firstname + this._lastname;
    }

    get age() {
        return this._age;
    }
}

const person = new Person("Labib", "Tahmid" , 23);

console.log(person.firstname , person.lastname , person.fullname ,person.age);
*/


/* Destructuring 


// swapping variables

let a = 1 , b = 2;

[a , b] = [b , a];

console.log(a , b);

// swapping array variables

let colors = ["red" , "green" , "blue" , "black" , "white"];

[colors[0] , colors[2]] = [colors[2] , colors[0]];

console.log(colors);

// assigning from array

[firstcolor , secondcolor , thirdcolor , ...extra] = colors;

console.log(firstcolor , secondcolor , thirdcolor , extra);

// destructure to object

const person1 = {
    firstname: "Labib",
    lastname: "tahmid",
    age: 23,
    job: "Student",
}

const person2 = {
    firstname: "x",
    lastname: "y",
    age: 34,
}

const {firstname , lastname , age , job = "None"} = person1;

console.log(firstname , lastname , age , job);

// destructuring in function 

function displayInfo ({firstname , lastname , age , job = "None"}) {
    console.log(firstname , lastname , age , job);
}

displayInfo(person2);
*/


/* Nested Object 


const Info = {
    fullname: "Labib Tahmid",
    age: 23,
    isStudent: true,
    Address: {
        area: "bosila",
        city: "Dhaka",
        country: "Bangladesh",
    }
}

console.log(Info.fullname , Info.age , Info.isStudent , Info.Address , Info.Address.city);

class Person {
    constructor (fullname , age , ...address) {
        this.fullname = fullname;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor (area , city , country) {
        this.area = area;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("LabibTahmid" , 23 , "Bosila" , "Dhaka" , "Bangladesh");

console.log(person1.fullname , person1.age , person1.address , person1.address.country);
*/


/* Arrays of Object 


const fruits = [{name:"apple" , color:"red" , price: 50.45} , 
                {name:"orange" , color:"orange" , price: 75.35} , 
                {name:"banana" , color:"yellow" , price: 10.75}]

fruits.push({name:"jackfruit" , color:"yellow" , price: 100.85});
// fruits.pop();
// fruits.splice(1 , 1);

console.log(fruits);

fruits.forEach(fruit => console.log(fruit));

const fruitsName = fruits.map(fruit => fruit.name);

console.log(fruitsName);

const matchColor = fruits.filter(fruit => fruit.color === "yellow");

console.log(matchColor);

const maxPrice = fruits.reduce((currentMax , fruit) => 
                                fruit.price > currentMax.price ? fruit : currentMax);
const minPrice = fruits.reduce((currentMin , fruit) => 
                                fruit.price < currentMin.price ? fruit : currentMin);

console.log(maxPrice);
console.log(minPrice);
*/


/* sort 


let fruits = ["banana" , "orange" , "kiwi" , "apple" , "coconut"];

fruits.sort();
console.log(fruits);

let number = [1 , 10 , 7 , 4 , 9 , 6 , 8 ,5 , 3 , 2];

console.log(number.sort((x , y) => x - y));

const people = [{name: "X" , age: 26 , gpa: 3.2} , {name: "Y" , age: 19 , gpa: 2.8} , {name: "Z" , age: 31 , gpa: 4.0}];

// people.sort((a , b) => a.gpa - b.gpa);
people.sort((a , b) => b.name.localeCompare(a.name)); // if comparing name use localCompare

console.log(people);
*/


/* Shuffle An Array 


const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

function shuffle (array) {
    for(let i = array.length - 1 ; i > 0 ; i--) {
        const random = Math.floor(Math.random() * (i + 1)); //i+1 beacause we dont need after i positins, they are shuffled already
        [array[i] , array[random]] = [array[random] , array[i]];
    }
}

shuffle(cards);
console.log(cards);
*/


/* Dates 


const date1 = new Date();
const date2 = new Date(2026 , 0 , 17 , 8 , 45 , 56);
const date3 = new Date("2027-01-17T14:56:46Z");
const date4 = new Date(1000000000000); //from when computer time start in ms

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);

console.log(date1.getFullYear() , date1.getMonth() , date1.getDay() , date1.getDate() , date1.getHours() , date1.getMinutes() , date1.getSeconds() , date1.getMilliseconds());

date1.setFullYear(2028);
date1.setDate(31);

console.log(date1);
*/


/* Closures 


function outer () {
    let message = "Hello!";
    function inner () {
        console.log(message);
    }
    inner();
}

outer();

function counting () {
    let count = 0 ;

    function increment () {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getcount () {
        return count;
    }

    return {increment , getcount};

}

let counter = counting();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getcount());

function createGame () {
    let score = 0;

    function increasrpoint (point) {
        score += point;
        console.log(`+${point}`);
    }

    
    function decreasrpoint (point) {
        score -= point;
        console.log(`-${point}`);
    }

    
    function showpoint () {
        console.log(`${score} pts`);
    }

    return {increasrpoint , decreasrpoint , showpoint};
}

const game = createGame();

game.increasrpoint(5);
game.increasrpoint(6);
game.decreasrpoint(3);
game.showpoint();
*/


/* Set Timeout


// function sayHello () {
//     window.alert ("Hello!");
// }

// setTimeout(sayHello , 3000);

// setTimeout(function() {window.alert("Hello2!")} , 3000);

// const clearTime = setTimeout(() => window.alert("Hello3!") , 3000);

// clearTimeout(clearTime);

const hello = document.getElementById("hello");
const myButton = document.getElementById("myButton");

myButton.onclick = function () {
    setTimeout(() => hello.textContent = "Hello After 3 Sec!" , 3000);
}
*/


/* ES6 Module 


import {PI , area , circumference , volume} from './MathUtil.js' ;

console.log(PI);

console.log(circumference(10));
console.log(area(10));
console.log(volume(10).toFixed(2));
*/


/* Asynchronous Code 


setTimeout(() => console.log("task 1") , 3000);

console.log("task 2");
console.log("task 3");
console.log("task 4");
console.log("task 5");

function func1 (callback) {
    setTimeout(() => {console.log("task 1"); 
                        callback();} , 3000);
}

function func2 () {
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
    console.log("task 5");
}

func1(func2);
*/


/* Error Handling 


// console.log(x);
// console.log("You reached the end!");

// try {
//     console.log(x);
// } catch (error) {
//     console.error(error);
// } finally {
//     console.log("This always executes");
// }

// console.log("You Reached The End!");

try {
    const divident = Number(window.prompt("Enter Divident:"));
    const divisor = Number(window.prompt("Enter Divisor:"));
    const result = divident / divisor;

    if (divisor === 0) {
        throw new Error("You cant divide by zero!");
    }else if (isNaN(divisor) || isNaN(divident)) {
        throw new Error ("Must be a number!");
    }

    console.log(result);

} catch(error) {
    console.error(error);
} finally {
    console.log("Its always there!");
}

console.log("You reached the end!");
*/


/* Element Selector 


const myHeading = document.getElementById("myHeading");

myHeading.style.backgroundColor = "black";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "orange";

fruits[1].style.textAlign = "center";
fruits[2].style.textAlign = "right";

Array.from(fruits).forEach((fruit) => {
    fruit.style.color = "black";
    fruit.style.fontWeight = "bold";
})

const h4Elements = document.getElementsByTagName("h4");

h4Elements[0].style.color = "green";
h4Elements[1].style.color = "violet";

const liElements = document.getElementsByTagName("li");

for (let liElement of liElements) {
    liElement.style.color = "aquamarine";
    liElement.style.listStyle = "square";
}

const element = document.querySelector(".fruits");

element.style.fontStyle = "italic";

const element1 = document.querySelector("h4");
element1.style.fontSize = "2em";

const foods = document.querySelectorAll("li");

foods.forEach((food) => {
    food.style.backgroundColor = "purple";
})
*/


/* DOM Navigation 


const element = document.getElementById("vegetables");
const firstchild = element.firstElementChild;

firstchild.style.backgroundColor = "yellow";

const element1 = document.getElementById("dessert");
const lastchild = element1.lastElementChild;

lastchild.style.backgroundColor = "red";

const element2 = document.getElementById("Apple");
const nextsibling = element2.nextElementSibling;

nextsibling.style.color = "green";

const element3 = document.getElementById("Potatoes");
const previoussibling = element3.previousElementSibling;

previoussibling.style.fontStyle = "italic";

const element4 = document.getElementById("Apple");
const parent = element4.parentElement;

parent.style.fontSize = "3em";

const element5 = document.getElementById("dessert");
const childs = element5.children;

Array.from(childs).forEach((child) => {
    child.style.listStyle = "square";
})
*/


/* ADD or Change in HTML


const newH1 = document.createElement("h1");
newH1.textContent = "I Like Pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// document.body.append(newH1);
// document.body.prepend(newH1);

document.getElementById("box3").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1 , box2);

// const box = document.querySelectorAll(".box");
// document.body.insertBefore(newH1 , box[2]);

// document.body.removeChild(newH1);

// document.getElementById("box3").removeChild(newH1);
*/


/* Mouse Event 


const mybox = document.getElementById("mybox");

mybox.addEventListener("click" , chageBackgroundColor);

function chageBackgroundColor (event) {
    event.target.style.backgroundColor = "violet";
    event.target.textContent = "Ouch! 🤕";
}

mybox.addEventListener("mouseover" , event =>  {
    event.target.style.backgroundColor = "yellow" ;
    event.target.textContent = "Don't do it! 😠";
})

mybox.addEventListener("mouseout" , event =>  {
    event.target.style.backgroundColor = "cyan" ;
    event.target.textContent = "Click Me! 🤣";
})

const myButton = document.getElementById("myButton");

myButton.addEventListener("click" , chageBackgroundColor1);

function chageBackgroundColor1 (event) {
    mybox.style.backgroundColor = "violet";
    mybox.textContent = "Ouch! 🤕";
}

myButton.addEventListener("mouseover" , event =>  {
    mybox.style.backgroundColor = "yellow" ;
    mybox.textContent = "Don't do it! 😠";
})

myButton.addEventListener("mouseout" , event =>  {
    mybox.style.backgroundColor = "cyan" ;
    mybox.textContent = "Click Me! 🤣";
})
*/


/* Key Events 


const mybox = document.getElementById("mybox");

// document.addEventListener("keydown" , event => {
//     mybox.style.backgroundColor = "tomato";
//     mybox.textContent = "😏";
// })

// document.addEventListener("keyup" , event => {
//     mybox.style.backgroundColor = "cyan";
//     mybox.textContent = "🤣";
// })

const movement = 15;
let x = 0;
let y = 0;
let z = 0;

document.addEventListener("keydown" , event => {
    if (event.key.startsWith("Arrow") || (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd')) {
        switch(event.key) {
            case 'w' : y -= movement;
            break;
            case 'a' : x -= movement;
            break;
            case 's' : y += movement;
            break;
            case 'd' : x += movement;
            break;
            case ('w' && 'a') : z -= movement; 
            break;
            case ('w' && 'd') : z -= movement; 
            break;
            case ('s' && 'a') : z += movement; 
            break;
            case ('s' && 'd') : z += movement; 
            break;
        }
        mybox.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
        mybox.textContent = "🙄";
        mybox.style.backgroundColor = "tomato";
    }
})

document.addEventListener("keyup" , event => {
    mybox.style.backgroundColor = "cyan";
    mybox.textContent = "🤣";
})
*/


/* Hide/show HTML 


const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click" , element => {

    if (myImg.style.display === "none") {
        myImg.style.display = "block"; 
        myButton.textContent = "Hide";
    } else {
        myButton.textContent = "Show";
        myImg.style.display = "none"; //display: none better than visibility hidden here beacuse the img is under
    }
})
*/


/* NodeLists 


let myButton = document.querySelectorAll(".myButton");

const newButton = document.createElement("button");
newButton.textContent = "NewButton";
newButton.classList = "myButton";
document.body.appendChild(newButton);

myButton = document.querySelectorAll(".myButton");

myButton.forEach(button => {
    button.addEventListener("mouseover", event => {
        button.style.backgroundColor = "green";
    })

    button.addEventListener("mouseout", event => {
        button.style.backgroundColor = "rgb(34, 32, 32)";
    })

    button.addEventListener("click" , event => {
        document.body.removeChild(button);
        myButton = document.querySelectorAll(".myButton");
        console.log(myButton);
    })
})
*/


/* ClassList 


const myButton = document.getElementById("myButton");

myButton.classList.add("enabled"); // add remove css class dynamically
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover" , event => {
//     // myButton.classList.add("hover");
//     myButton.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout" , event => {
//     // myButton.classList.remove("hover");
//     myButton.classList.toggle("hover");
// })

myButton.addEventListener("click" , event => {
    myButton.classList.replace("enabled" , "hover");
})
*/


/* Callback Hell 


function task1 (callback) {
    setTimeout(() => {
        console.log("Task1 complete");
        callback();
    } , 2000)
}

function task2 (callback) {
    setTimeout(() => {
        console.log("Task2 complete");
        callback();
    } , 4000)
}

function task3 (callback) {
    setTimeout(() => {
        console.log("Task3 complete");
        callback();
    } , 1000)
}

function task4 (callback) {
    setTimeout(() => {
        console.log("Task4 complete");
        callback();
    } , 5000)
}

function task5 (callback) {
    setTimeout(() => {
        console.log("Task5 complete");
        callback();
    } , 1500)
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    console.log("All task Complete");
                })
            })
        })
    })
});
*/


/* promise


function walkdog () {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            let dogwalk = true;
            if (dogwalk) {
                resolve ("you walked the dog")
            } else {
                reject ("you Didn't walked the dog")
            }
        } , 1500)
    })
}

function cleankitchen () {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            let kitchenclean = true;
            if (kitchenclean) {
                resolve ("you cleaned the kitchen")
            } else {
                reject ("you Didn't clean the kitchen")
            }
        } , 2500)
    })
}

function taketrash () {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            let trashtake = true;
            if (trashtake) {
                resolve ("you took out the trash")
            } else {
                reject ("you Didn't take out the trash")
            }
        } , 500)
    })
}

walkdog().then(value => {console.log(value); return cleankitchen()})
.then(value => {console.log(value); return taketrash()})
.then(value => {console.log(value); console.log("task finished")})
.catch(error => console.error(error));
*/


/* Async/Await 


function walkdog () {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            let dogwalk = true;
            if (dogwalk) {
                resolve ("you walked the dog")
            } else {
                reject ("you Didn't walked the dog")
            }
        } , 1500)
    })
}

function cleankitchen () {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            let kitchenclean = true;
            if (kitchenclean) {
                resolve ("you cleaned the kitchen")
            } else {
                reject ("you Didn't clean the kitchen")
            }
        } , 2500)
    })
}

function taketrash () {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            let trashtake = false;
            if (trashtake) {
                resolve ("you took out the trash")
            } else {
                reject ("you Didn't take out the trash")
            }
        } , 500)
    })
}

async function doChores () {
    try {
        const walkdogresult = await walkdog();
        console.log(walkdogresult);
    
        const cleankitchenresult = await cleankitchen();
        console.log(cleankitchenresult);

        const taketrashresult = await taketrash();
        console.log(taketrashresult);

        console.log("you finished the tasks");
    } catch (error) {
        console.error (error);
    } finally {
        console.log("program finished");
    }
}

doChores();
*/


/* JSON files  


// const names = ["Superman" , "Batman" , "WonderWoman" , "Flash"];
// const person = {
//     "name": "Superman",
//     "age": 35,
//     "isEmployed": "true",
//     "powers": ["Laser Eye" , "Freeze Breath" , "Super Punch"]
// }
// const people = [{
//     "name": "Superman",
//     "age": 35,
//     "isEmployed": "true"
// } ,
// {
//     "name": "Batman",
//     "age": 52,
//     "isEmployed": "false"
// } ,
// {
//     "name": "WonderWoman",
//     "age": 32,
//     "isEmployed": "true"
// } ,
// {
//     "name": "Flash",
//     "age": 27,
//     "isEmployed": "false"
// }]

// // const jsonstring = JSON.stringify(names);
// // const jsonstring = JSON.stringify(person);
// const jsonstring = JSON.stringify(people);

// console.log(jsonstring);

// const jsonnames = `["Superman" , "Batman" , "WonderWoman" , "Flash"]`;
// const jsonperson = `{
//     "name": "Superman",
//     "age": 35,
//     "isEmployed": "true",
//     "powers": ["Laser Eye" , "Freeze Breath" , "Super Punch"]
// }`;
// const jsonpeople = `[{
//     "name": "Superman",
//     "age": 35,
//     "isEmployed": "true"
// } ,
// {
//     "name": "Batman",
//     "age": 52,
//     "isEmployed": "false"
// } ,
// {
//     "name": "WonderWoman",
//     "age": 32,
//     "isEmployed": "true"
// } ,
// {
//     "name": "Flash",
//     "age": 27,
//     "isEmployed": "false"
// }]`

// // const parseddata = JSON.parse(jsonnames);
// // const parseddata = JSON.parse(jsonperson);
// const parseddata = JSON.parse(jsonpeople);

// console.log(parseddata);

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));
*/


/* Fetch data from an API


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch your pokemon!")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));

// async function fetchPokemon () {
//     try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/lucario");
//         if(!response.ok) {
//             throw new Error("Could not fetch your data!")
//         }

//         const data = await response.json();
//         console.log(data.name);
//     } catch(error) {
//         console.error(error);
//     }
// }

// fetchPokemon();

const pokesubmit = document.getElementById("pokesubmit");
pokesubmit.addEventListener("click" , getPokemon);

async function getPokemon () {
    warning.textContent = "";
    try {
        const pokedata = document.getElementById("pokedata").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedata}`);

        if(!response.ok) {
            throw new Error("Could not get your Pokemon!");
        }
        
        const data = await response.json();
        const imgelement = data.sprites.front_default;
        const pokeImg = document.getElementById("pokeImg");
        pokeImg.src = imgelement;
        pokeImg.style.display = "block";
        pokeImg.classList.add("imgsize");

    } catch(error) {
        const warning = document.getElementById("warning");
        warning.textContent = error;
    }
}
*/