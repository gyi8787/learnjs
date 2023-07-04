// var a=10;
// function b()
// {
//     var x=10;
// }
// console.log(window.a);
// console.log(a);
// console.log(this.a)

// https://youtu.be/QCRpVw2KXf8
// SHORTEST JS Program 🔥window & this keyword | Namaste JavaScript Ep. 5
// =============================================================
// A closure is the combination of a function bundled together (enclosed)
//  with references to its surrounding state (the lexical environment). 
//  In other words, a closure gives you access to an outer function's 
//  scope from an inner function. In JavaScript, closures are created 
//  every time a function is created, at function creation time.

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
// ==========================================================

// function x()
// {
//     var a=7;
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }
// var z =x();
// console.log(z);
// //........
// z();

// =================================================================

// function x()
// {
//     var a=7;
//     function y()
//     {
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// //......
// z(); 100