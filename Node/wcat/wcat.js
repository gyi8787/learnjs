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
        // process.exit(); bhi ker skte ho
    }
}
//===================================>content read and appending starts <=======================//
//content read and appending starts
let tempArr=[];
let content="";
for(let i=0;i<filesArr.length;i++)
{
    let fileContent=fs.readFileSync(filesArr[i]);
    content+=fileContent+"\r\n"; // jo bhi content aata jayega wo isme append hota jayega
}
// console.table(content);
let contentArr=content.split("\r\n"); 
// =================================================================
// const fs=require("fs");
// let inputArr=process.argv.slice(2);
// console.log(inputArr);  //node wcat.js -n f1.txt

//================================>10 MARCH <=======================
let isPresent=optionsArr.includes("-s");
if(isPresent)
{
    for(let i=1;i<contentArr.length;i++)
    {
        if(contentArr[i]==""&&contentArr[i-1]=="")
        {
            contentArr[i]=null;
        }
        else if(contentArr[i]==""&& contentArr[i-1]==null)
        {
            contentArr[i]=null;
        }
    }
    
  
//push everything in tempArr except null
for(let i=0;i<contentArr.length;i++)
{
    if(contentArr[i]!=null)
    {
        tempArr.push(contentArr[i]);
    }
}
console.log("data after removing extra lines\n",tempArr);
}


console.table(contentArr);

// ====================================================

// kahani -n,-b,-s ki ,ki  kaun phle aayega
contentArr=tempArr;
let indexOfN=optionsArr.indexOf("-n");
let indexOfB=optionsArr.indexOf("-b");
// if -n or -b is not found ,-1 is returned 
let finalOption="";
// if both -n and -b are present 
    if(indexOfN!=-1 && indexOfB)
      {
         finalOption="-n";
      }
    else{
       finalOption="-b";
     }


     if(finalOption=="-n")
     {
        modifiContentByN();
     }
     else if(finalOption=="-b")
     {
        modifiContentByB();
     }
     //calling of function by evaluatinf finalOption
     function modifiContentByN()
     {
        for(let i=1;i<=contentArr.length;i++)
        {
            contentArr[i]=(i+1)+")"+contentArr[i];
        }
     }

     function modifiContentByB()
     {
        let count=1;
        for(let i=1;i<=contentArr.length;i++)
        {
            if(contentArr[i]!="")
            {
                contentArr[i]=count+")"+contentArr[i];
                count++;
            }
        }
     }
     console.log(contentArr);