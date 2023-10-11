// Call , Apply , Bind

// 1. Call
//call : gives the access of an object to use another's object's method
// method is nothing but : fuction is write inside an object is called method


const person1 = {
    Fname : "Abhi",
    Lname: "Chatap",
    fullName : function (){
        return this.Fname + " " + this.Lname
    }
};
// console.log(person1.fullName()); // Abhi Chatap

const person2 = {
    Fname : "Ayush",
    Lname : "C",
}

console.log(person1.fullName.call(person2)); // Ayush c

// kisi ek Object me Dusre Object ki method ko call kr sakte hoo




const person3 = {
    Fname : "Abhi",
    Lname: "Chatap",
    fullName : function (hometown, country){
        return this.Fname + " " + this.Lname+ " " + hometown + " "+ country
    }
};
// console.log(person1.fullName()); // Abhi Chatap

const person4 = {
    Fname : "Ayush",
    Lname : "C",
}

console.log(person3.fullName.call(person4, "Ramtek", "India"));


// ----------------------------------------------------------------------------------

// Apply

// (call) and (apply) same he hote hai bs difference itna he hai ki 
// Argument pass krne ke tarike me , Argument pass [] Array me karte hai



const person5 = {
    Fname : "Abhi",
    Lname: "Chatap",
    fullName : function (hometown, country){
        return this.Fname + " " + this.Lname+ " " + hometown + " "+ country
    }
};
// console.log(person1.fullName()); // Abhi Chatap

const person6 = {
    Fname : "Ayush",
    Lname : "Chatap",
}

console.log(person5.fullName.apply(person6, ["Bangalore", "India"]));


// ----------------------------------------------------------------------------------


// Bind

// it's similar to (call) bs ye store kr raha variable as a copy

// we can create a copy of function , and stored as a variable (result)
// and invoke whenver we want


const result = person3.fullName.call(person4, "kk", "India");

console.log(result) //Ayush C kk India

























































