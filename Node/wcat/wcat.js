// 8 march
// wcat ke liye likho node wcat.js msg
//1) node wcat.js filepath => displays the contents of a file in terminal
//2) node wcat.js filepath1 filepath2 filepath3 => displays the contents of a file in terminal in concatation in given order
//3) node wcat.js -n file1 file2 file3 OR node wcat.js -n file1 => displays the contents of a file in terminal sath me number bhi aayenge
// node wcat.js f1.txt
//node wcat.js f1.txt f2.txt f3.txt

// let input=process.argv;
// console.log(input);
//[ C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Hp\\Desktop\\learnjs\\node\\wcat\\wcat.js',
//   'helllo]
// let input=process.argv.slice(2);// jb slice lagate tb uper vali do line chali jati h
// console.log(input);
// ===============================================================================
const fs=require("fs");
let inputArr=process.argv.slice(2);
console.log(inputArr);
let filesArr=[];  //placed files path in filesArr
let optionsArr=[];
//===================>placed files path in fileArr <===============================
for(let i=0;i<inputArr.length;i++)
{
    let firstChar = inputArr[i].charAt(0);
    // console.log(firstChar);
    if(firstChar=='-')
    {
        optionsArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}
console.log("file to be read are"+filesArr);
//===================================>check if all the files are present<============//
// node wcat.js filepath1 filepath2 filepath3 
// check if all the files are present
for(let i=0;i<filesArr.length;i++)
{
    let doesExist=fs.existsSync(filesArr[i]);
    if(!doesExist)
    {
        console.log("files does not exit");
        return;
    }
}
//===================================>content read and appending starts <=======================//
//content read and appending starts
let content="";
for(let i=0;i<filesArr.length;i++)
{
    let fileContent=fs.readFileSync(filesArr[i]);
    content+=fileContent+"\n"; // jo bhi content aata jayega wo isme append hota jayega
}
console.log(content);
let contentArr=content.split("\n"); 
// =================================================================
// const fs=require("fs");
// let inputArr=process.argv.slice(2);
// console.log(inputArr);  //node wcat.js -n f1.txt