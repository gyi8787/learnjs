
var str="Hello World!";
// console.log(str[4]);
// console.log(str.length);
var p=str.slice(1,2); //slice(start,end+1)=start,end
var p=str.slice(2); // index 2 se last tak puri string de di
var p=str.slice(3,-2); //iska matlab 3 se satrt hogi aur piche ke 2 choot jaynege 
//<------------------------------------------------------------------->
/// substring
//control+f kerne per sb ek sath likh jata h
 let r =str.substring(4, 1);//If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
let re =str.substring(-3);
let res =str.substring(0, 1);
let resu =str.substring(str.length - 1);
//<------------------------------------------------------------------->
let text = "Hello World!";
let result = text.toLocaleLowerCase();
console.log(result);

