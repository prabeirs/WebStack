/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/
// Spread operator application
function smallestValue(...args){
  console.log(args);
  let min = Math.min(...args);
  return min
}
console.log(smallestValue(4, 1, 12, 0, -1));

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
    placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
    placeInMiddle([1],[3,4,5]) // [3,4,5,1]
    placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
    placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr, vals){
  let lenOfFirstArr = arr.length;
  let insertPos;
  console.log(`length is ${lenOfFirstArr}`);
  if (lenOfFirstArr % 2 === 0) {
    insertPos = lenOfFirstArr / 2;
  } else {
    insertPos = (lenOfFirstArr + 1) / 2;
  }
  console.log(`insert position is ${insertPos}`);
  arr.splice(insertPos, 0, ...vals);
  return arr;
}
console.log(placeInMiddle([1,2,6,7],[3,4,5]));

/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

Examples:

    joinArrays([1],[2],[3]) // [1,2,3]
    joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
    joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
    joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/
function reduce(arr, callback, optional) {
  var accumulator;
  var lastRet = arr[0];
  var nextValueIndex;
  if (optional !== undefined ) {
    accumulator = optional;
    nextValueIndex = 0;
  } else {
    accumulator = arr[0];
    nextValueIndex = 1;
  }
  for (var i = 0; i < arr.length; i++) {
    
    if (optional === undefined && i+1 == arr.length) {
      //console.log("i = ", i);
      //console.log(" i + 1 = ", i+1, " and array length ", arr.length);
      return lastRet;
    }
    
    //console.log("i = ", i);
    var ret = callback(accumulator, arr[nextValueIndex]);
    accumulator = ret;
    nextValueIndex++;
    lastRet = accumulator;
  }
  //console.log(" i = ", i, " and array length ", arr.length);
  return lastRet;
}
// Rest operator application
function joinArrays(...args){
    //console.log(args);
    return reduce(args, function(accumulator, nextValue) {
      accumulator.push(...nextValue);
      return accumulator;
    }, []);
}
console.log(joinArrays([1],[2],[3],[4],[5]));
console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])); // [1,2,3,4,5,6,7,8,9])

/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/
// Rest operator application.
function sumEvenArgs(...args){
 //console.log(args);
 return reduce(args, function(accumulator, nextValue) {
   if (nextValue % 2 === 0) {
     return accumulator + nextValue;
   } else {
     return accumulator;
   }
 }, 0);
}
console.log(sumEvenArgs(1,2,3,4,5,6,7,8));

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/
function personSubtract(a,b,c) {
  return this.firstName + " subtracts " + (a-b-c);
}
function subtractFourNumbers(a,b,c,d) {
  return this.firstName + " subtracts " + (a-b-c-d);
}
function subtractNumbers(...n) {
  let numbersArr = n;
  console.log(numbersArr);
  var x = reduce(numbersArr, function(accumulator, nextValue) {
    return accumulator - nextValue; 
  });
  return this.firstName + " subtracts " + x;
}
var person = {
  firstName: "Elie"
}
function flip(fn, thisArg, ...c){
    let paramsForInnerFunc = c;
    console.log(`params for inner func ${paramsForInnerFunc}`);
    return function (...args) {
      let allArgs = [...paramsForInnerFunc, ...args];
      allArgs.reverse();
      console.log(`all args ${allArgs}`);
      console.log(`fn name is ${fn}`);
      return fn.apply(thisArg, allArgs);
    }
}
var flipFn = flip(personSubtract, person);
console.log(flipFn(3,2,1)); // "Elie subtracts -4"
var flipFn2 = flip(subtractFourNumbers, person);
console.log(flipFn2(4,3,2,1));
var flipFn3 = flip(subtractNumbers, person);
console.log(flipFn3(6,5,4,3,2,1));


/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/
function firstNameFavoriteColor(favoriteColor) {
  return this.firstName + "'s favorite color is " + favoriteColor;
}
function firstNameFavoriteColors(...colors) {
  let colorsArr = colors;
  var x = reduce(colorsArr, function(accumulator, nextValue) {
    return accumulator + " " + nextValue;
  });
  return this.firstName + "'s favorite colors are " + x;
}
var person = {
  firstName: "Elie"
}
function bind(fn, thisArg, ...c) {
  let paramsForInnerFunc = c;
    return function (...args) {
      let allArgs = [...paramsForInnerFunc, ...args];
      return fn.apply(thisArg, allArgs);
    }
}
// var bindFn = bind(firstNameFavoriteColor, person);
// console.log(bindFn('Purple')); // "Elie's favorite color is green"
var bindFn = bind(firstNameFavoriteColors, person, "blue", "green");
console.log(bindFn('purple'));
