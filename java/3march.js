// function outer()
// {
//     inner();
//     function inner()
//     {
//         console.log(b);
//     }
// }
// var b=10;
// outer();
// console.log(b);
// =====================================================
// function outer()
// {
//     var a=10;
//     function inner()
//     {
//         console.log(a);
//     }
//     return inner;
// }
// var z=outer();
// console.log(z+"");

// =====================================================
function outer()
{
    var a=10;
    function inner()
    {
        console.log(a);
    }
    var a=7;
    return inner;
}
var z=outer();
console.log(z+"");
z();