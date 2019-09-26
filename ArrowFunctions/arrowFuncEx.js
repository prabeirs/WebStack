/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }
*/
let tripleAndFilter = (arr) => arr.map(val => val * 3).filter(val => val % 5 === 0)
console.log(tripleAndFilter([5, 7, 10, 20]));

/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/
let doubleOddNumbers = (arr) => arr.filter(val => val % 2 !== 0).map(val => val * 2);
console.log(doubleOddNumbers([1, 2, 3, 4, 5]));

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/
let mapFilterAndReduce = (arr) => arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc, next) => {
  acc[next] = next.length;
  return acc;
}, {});

let createStudentObj = (firstName, lastName) => ({firstName: firstName, lastName: lastName});

var instructor = {
  firstName: "Colt",
  sayHi: function() {
    setTimeout(() => {
      console.log("Hello " + this.firstName)
    }, 1000)
  }
}
