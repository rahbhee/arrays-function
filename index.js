1./*
 - Mutable arrays refers to arrays whose state can be altered when the array has been created.
 - immutability decreases predictability.
 - Does not allow for mutation tracking.
 - Does not avoid reference clash.

   Examples of mutable arrays are;
 - reduce()
 - pop() and push()
 - slice() and splice()
 - filter()
 - shift() and unshift()

   While,
 - Immutable arrays refers to the arrays whose state can’t be changed once the array is created.
 - Mutability increases predictability.
 - Allows for mutation tracking.
 - Avoids reference clash.
   
   Examples of immutable array methods are;
 - Object.assign().
 - Spread operator.
 - Reverse unshift.
 - Destructuring assignment and spread operator to delete an array.
 - Sort and spread syntax to copy an array.*/

 
2./*
  let languages =  ["C#", "javaScript", "ruby", "PHP", "python"];
  languages.push("kotlin");
  console.log(languages)*/

  /*languages.splice(3, 0, "java");
  console.log(languages);*/

  /*languages.splice(0, 1);
  console.log(languages);*/

  /*languages.unshift("scala ", "swift");
  console.log(languages);*/

  /*languages[4] = "Go " + "and " + "Rust";
  console.log(languages);*/


3.
  /*The result of fruit will be ['apple'. 'mango', 'orange']*/

4. /*
   let arr = [3, 9, 5, 1];
   function num() {
   const max = Math.max(...arr);
   let result = max;
   return result;
   }
   console.log(num(3, 9, 5, 1));
   */


5. 
/*
  let arr2 = [3, 9, 2, 4,];

  function valTimesIndex(arr2) {
  let result = arr2.map((value, index) => value * index);
  return result;
  }
  console.log(valTimesIndex(arr2));*/

  
