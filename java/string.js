
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
let result = text.toLowerCase();
let te = "       Hello World!        ";
let ri = text.trim();
//<------------------------------------------------------------------->
//interview question
var ans="5"+1;  //51
var my=1+"5";   //15
var kon="5"-1;  //4(bug)
var mkon=5-"1";  //4
// console.log(null*5); //0
// console.log(null*"5"); //0
// console.log("ten"*3);  //Nan
// console.log("10"*3);   //30

// =============================>split methode<===============
var str="Hello my name is Deepak"
console.log(str);
var a=str.split(" ");
console.log(a);



