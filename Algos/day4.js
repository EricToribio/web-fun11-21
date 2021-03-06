// Global scope variable - can be used anywhere. It has been created outside of any function.
var x = 5;

// Functions - what are they even?
// A function is a series of steps to accomplish a task.

// Function declaration
// Start with the keyword function, followed by the name of your function, then parentheses (whether there are parameters or not), then the curly braces at the bookends of the code block. Inside the code block place the code you'd like to run.
function setX(newValue) {
    x = newValue;
}

console.log(x); // --> 5
// To execute a function, we call it by name
setX(15); // no output
console.log(x); // --> 15

var x = 5;

function addToX(amount) {
    return x + amount;
    console.log("hello there");
}

console.log(x); // --> 5
// The value of a function is whatever it returns
var result = addToX(-10); // --> no output
console.log(result); // --> -5
console.log(x); // --> 5

// Code Flow - Is the Array a Palindrome
// A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

// racecar
// tacocat
// But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards

// create a function called isPal that takes in an array
//create for loop with var left = 0 and left is less than arr length div 2 increment left by 1
//create var in the for loop right = arr.length - 1 - left so if the 2 ints on opposite sides of array respectively are the same number left and right will be equal
//if statement to see if left and right are not equal if true the return "Not a pal-indrome!"
//if the if statement is never true then after we loop through the whole arr return "pal-indrome!"
function isPal(arr) {
    for (var left = 0; left < arr.length / 2; left++) {
        var right = arr.length - 1 - left;
        if (arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);