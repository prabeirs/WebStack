/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Prabir', last:'Senapati'}) // 'Your full name is Prabir Senapati')
*/

function displayStudentInfo(obj){
    var {first, last} = obj || {first: "Empty", last: "Empty"};
    return `Your name is ${first} ${last}`; 
}
//console.log(displayStudentInfo({first: 'Prabir'}));
/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Prabir', last:'Senapati'}) // 'Your full name is Prabir Senapati'
*/

// you will have to pass in the correct parameters for this function!
function printFullName({first, last}){ // Directly destructure from the parameters.
    return `Your fullname is ${first} ${last}`;
}
//var person = {first: "Prabir", last: "Senapati"};
//console.log(printFullName(person));

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent({likesES2015 = true, likesJavaScript = true} = {}){ // Passing in a destructured object with the default parameters of likeES2015 & likesJavaScript and also make sure we assign this to an empty object {}.
    if (likesES2015 && likesJavaScript) {
      return "The student likes JavaScript and ES2015";
    } 
    else if (!likesES2015 && !likesJavaScript) {
      return "The student doesn't like much...";
    }
    else if (!likesES2015) {
      return "The student likes JavaScript!";
    } else if (!likesJavaScript) {
      return "The student likes ES2015!";
    } else {
      return "This is a very good student";
    }
}
//console.log(createStudent());
//console.log(createStudent({likesES2015: false}));
//console.log(createStudent({likesJavaScript:false}));
//console.log(createStudent({likesJavaScript:false, likesES2015:false}));

/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray(arr){
   var j = 0;
   let arrLen = arr.length;
   let arrMidIndex;
   if (arrLen % 2 === 0) {
       arrMidIndex = (arrLen/2);
   } else {
       arrMidIndex = ((arrLen - 1)/2) + 1;
   }
   console.log(`arr mid index is ${arrMidIndex} and arr length is ${arrLen}`);
   
   for (var i = arrLen - 1; i >= arrMidIndex; --i) {
       var temp = arr[j];
       console.log(`swapping ${arr[i]} to ${arr[j]}`);
       arr[j] = arr[i];
       j++;
       arr[i] = temp;
   }
   //for (var i = 0; i < arr.length/2; i++) {
      // [arr[i], arr[arr.length - 1 -i]] = [arr[arr.length - 1 - i], arr[i]];
   //}
   
   return arr;
}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));
