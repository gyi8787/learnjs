// <-----SIMPLE FUNCTION IN JAVASCRIPT 12 FEB------->

//terminal per run kerne ke liye node app.js likhna
function add(a,b)
{
    // console.log(a+b);
}
add(3,5);
function cal(str,a,b){
    if(str=='add')
    {
        return function add()
        {
            // console.log(a+b);
        }
    }
}
let rf=cal('add',5,6);
// console.log(""+rf);
rf();
// break
let sayhi=function abc()
{
//    console.log("hello guys!");
}

sayhi();
// console.log(""+sayhi)
// abc(); abc is not definedcls


// immidate invoked funtion expression
 
function add(a,b)
{
    return a+b;
}

let a=add(2,3);
console.log(a);

let adk=(function add(a,b)
{
    return a+b;
})(20,30)
// console.log(""+adk);
// console.log(adk(10,20));
// console.log(adk);









