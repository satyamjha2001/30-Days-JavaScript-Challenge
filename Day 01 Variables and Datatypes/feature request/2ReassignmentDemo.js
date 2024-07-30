//so in this we see difference in reassignment in let and const


//let

let a = 'initial value';  //mutable

console.log(a);

a = 'new value';

console.log(a);

//const

const b = 1212;

console.log(b);   //immutable

//this gives error const can't reassign
// b = 'constant';
// console.log(b);