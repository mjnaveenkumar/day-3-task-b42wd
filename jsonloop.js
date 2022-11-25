//for in 
// var person = {
//     firstname: "Nick",
//     lastname: "Jonas",
//     age: 26
//  }; 
//  for (let x in person) {
//     console.log(x + ": "+ person[x])
//  }
//for loop 
// var a = [ 10, 20, 30, 40, 50] 
// for (var i=0; i < a.length; i++) {
//    console.log(a[i])
// }
//for of
// const bikes = ["BMW", "kawasaki", "tvs 50"];

// let text = "";
// for (let x of bikes) {
//   text += x;
// }
 
// 
//for each 
let bikes = ['bmw', 'splendor', 'tvs50'];


bikes.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}