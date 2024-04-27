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


/* */
