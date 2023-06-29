//<----- OBJECT IN JS 17------->
let obj={};
let person={
    name:"Deepak",
    age:28,
    phone:9298298989,
    gender:"male"
};
// console.log(person);
// console.log(`Hey ${person.name},thank you !`);
//nesting of objects

let x={
    fname:"Deepak",
    lname:"Saini",
    friends:["deepak","veer"],
    age:102,
    ishero:true,
    add:{
        state:"RAJ",
        city:"kota",
        coun:"India"
    },
    sayhi:function()
    {
        console.log(`hello my name is ${this.fname}`);
    }
};
 for(let key in x)
 {
    console.log(`${key}:${x[key]}`)
//     console.log(key);
//     console.log(x[key]);
 }
// console.log(x);
// console.log(x.friends[0]);
// x.sayhi();
// methods->jo bhi function object ke under bna hota hai
//js me her cheez ek obj h (array bhi)
 let a=["a","b",1];
 let ar={
   0:"a",
   1:"b",
   2:1,
   3:true
 }
 