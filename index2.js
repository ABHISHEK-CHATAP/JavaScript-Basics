// Hoisting is a Default Behaviour of Moving Declaration on top
// Declaration can be both Variable and Functions

console.log(a);
var a=7;
//=> undefined
// I'm not getting an error becoz of concept of Hoisting



// JavaScript Engine Assume that Declaration on Top :- above code like this 
 var a;  // Declaration
 console.log(a);
 var a=6;  // Initialization

// Hoisting concept work with ( Var) keyword only , it will not work with (let, const)
let c;
console.log('cc :',c);
//  -------------------------------------------------------------------------------------------

// Funtion Hoisting : 
// sirf Function me he hogi ,,, Arrow and Function Expression me Hoisting nhi hogi

fun();

function fun (){
    console.log("This is my hoisting");
}


//Function Expression

var sum = function (){
        console.log("This is my hoisting");
    }

    // Arrow function
    var add =()=>{
        console.log("This is my hoisting");
    }
