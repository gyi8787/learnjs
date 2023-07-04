// fs=file system it helps us to amke files/folder append data to NavItem,delete data ,read data
// const fs=require("fs");
// console.log(fs);
// let res=fs.appendFileSync("f1.txt","Hello");
// fs.appendFileSync("f1.txt","Hi");
// console.log(res);
// // let data=fs.readFileSync("f1.txt");
// // console.log(data+"");
// // let data=fs.readFileSync("f1.txt","utf-8");
// // console.log(data);

// ================================================
const abc=require("../java/temp"); 
//require mathode goes to file that is needed to required,execue that file. and if there is something that is exported
// we get that in varible in 'abc'
// console.log(abc);
let ans=abc.add(2,4);
console.log(ans);
