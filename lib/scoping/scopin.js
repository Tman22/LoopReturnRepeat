/*-------------------Variable-Declaration-1-------------------*/
// vars vs const -- ES5/ES6
// const sets area in memory for arrays/objs. referencing pointer -- pass by reference aka immutable

var a = 10;
const b = [{},{}];
const c = 32;

c = 20; // error you can't assign a new value to a const, i.e. you can't point a const to another place in memory
a = 20; // this can be reassigned
b.push({}); // no error, here the memory assignment stays the same

/*-------------------Variable-Declaration-2-------------------*/
// var vs let
// let's are block scoped where vars are function scoped.
// global scope if it doesn't exist

function myFun () {
  if (true) {
    let a = 32;
    var b = a;
    c = b;
  }
  console.log(a); // a is not defined - let is block scope
  console.log(b); // 32 - var is function scoped
}
myFun();
console.log(b); // b is not defined - var is function scoped
console.log(c); // 32 - c is global scope

/*-------------------Hoisting-problem-1-------------------*/
// function hoisting, declarations vs expressions

fun1(); // works - since fun1 is a function it is hoisted above
fun2(); // fun2 is not a function -- var fun2 is hoisted but the assignment is not
var fun3 = new Fun3(); // ReferenceError

function fun1 () {
  console.log('function 1');
  console.log(fun2()) // fun2 is not a function... yet...
}

var fun2 = function () {
  console.log('function 1');
}

class Fun3 {
  constructor() {

  }
}

/*-------------------Hoisting-problem-2-------------------*/
// variable hoisting -- in function
// locally scoped
var myVar = 22;

function fun1 () {
  console.log(myVar); // logs undefined -- var myVar is hoisted above but the assignment of '= 30;' is not
  var myVar = 30;
}

// this is what fun1 compiles down to
function fun2 () {
  var myVar;  // locally scoped variable not the same as the globally scoped myVar
  console.log(myVar);
  myVar = 30;
}
fun1();

/*----------------------------------------------*/
