// Closures

// Lexical scope : the ability of function scope to access variable from the parent scope
// we call the child functions is lexically bound to the parent function

// function fun1() {
//   let a = 5;
//   console.log(a);
//   function fun2() {
//     let a = 7;
//     console.log(a);
//   }
//   fun2();
// }
// fun1();
//5
//7

// ----------------------------------------------------------------------


// function fun1() {
//     let a = 5;
//     console.log(a);
//     function fun2() {
//       console.log(a);
//     }
//    return fun2
//   }
 
//   const abc = fun1();
//   abc()

  //5
  //5
// ----------------------------------------------------------------------

function fun1() {
    let a = 5;

    function fun2() {
      console.log(a); 
    }
    a=9;  // (a) ka updated reference
   return fun2
  }
 
  const abc = fun1();
  abc()

//9

// ----------------------------------------------------------------------












