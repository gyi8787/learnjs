//26 feb
// typeof operator ek string return kerta hai
//  falsy-false, 0, -0, 0n, "", null, undefined, and NaN.
// == value vs === datatype+value

var user={
    email:"my@gmail.com",
    upadateEmail: function(email)
    {
        this.email=email;
    },
};
user.upadateEmail("new@gmail");
console.log(user.email);