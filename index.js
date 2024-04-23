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
