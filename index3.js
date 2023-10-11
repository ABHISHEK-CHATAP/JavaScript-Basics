// Scope chain and Lexical Environment ( nested function )

// Lexical scope : the ability of function scope to access variable from the parent scope
// we call the child functions is lexically bound to the parent function


// inner function getting access of outer function as well globallly declared variables functions

// like  GrandFather --> Father --> me 
// I can access my grandFather , and FAther Property, 
// wise versa my property they can not access


let b=8;
outer();// outer function ke upper he (b) initialize hona chahiye otherwise error dega

function outer(){
let a =3;

    function inner(){
        var c=5;
        console.log(a);
        console.log(b);

    };
    inner()
}
