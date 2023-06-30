// // Spread Operator
// var a=['10','20','30'];
//  var b=a; yaha per refrence pass kiya h agr a change kroge to b bhi chamge ho jayega
// a[0]='50';  a change kerne per b na chnage ho isliye use kerte h spread operator
//            spread operator array me jaker keval unke elment nikalga 
// console.log(a);
// console.log(b);
// var a=['10','20','30'];
// var b=[...a];
// a[0]='50';
// console.log(a);
// console.log(b);

// ====================================
// const add =function(x)
// {
//     return x*x;
// }
// function myfun(num=2,value=add(num))
// {
//     console.log(num,value)
// }
// myfun();
// myfun(3);

// ==========================================
// Object.freeze()
// a frozen object can no longer be change, it only freez ata level one .shallow freez
// const person={
//     name:"Deepak",
//     address:{
//       street:"101"
//     },
// };

// person.address.street="202"; bolan na keval level 1 tak freez hota h under nhi hota jaise ki street
// console.log(person);

// =========================================================

//Object.seal()  properties cannot be added,deleted but can be modifyed
// Array.flat(1) 1 level tak multidemintionl array ko 1 d array me flat ker do
// console.log(person.faimly?.name);  person ke under agr koi faimly name ki property h to name 
                                      //ki value print kerva do otherwise undefined ,basicall ye error bachane ke liye aata hai
// console.log(person.pet?.faimly?.name);

// ================================================================

// let arr=[1,2,3];
// console.log([...arr])
// console.log([...[1,2,3]]);
// ...arr==...[1,2,3]
const person={
    name:"Deepak",
    age:21
};
const chnageage=function(x={...person})
{
    x.age+=1;
}
const changeageandname=function(x={...person})
{
   x.age+=1;
   x.name="sara"; 
};
chnageage(person);
changeageandname();
console.log(person);
// =====================================================
//bahut sare question practice kerne ki jaroorat hai