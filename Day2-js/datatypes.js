"use strict"; //treat all JS code as a newer version.


//  alert("hello") 
// it will give error because we are using nodejs not browser.

 // CODE READABILITY SHOULD BE HIGH.


 //     DATATYPES

 let name = "rohit" // string datatypes

 let age = 24 // number datatypes 

 let isLoggedin = false // boolean datatypes

//  There are diferent kind of datatypes like :- 

            // A. premitive datatypes

//1. number => ranges upto 2^53.
//2. bigint => for large number
//3. string(write it's value in double quote"string")
//4. boolean => true/false.
//5.null => it's a dtatypes but it's also a stand alone value (it represent empty value.)
//6. undefined => it comes when you declare a variable but couldn't assign any value.
//7. symbol => shows   unique component in react/javascript


            //  B. Non-premitive datatypes

//1. Objects => 

console.log(typeof "rohit "); //string 
console.log(typeof 24 ); //number
console.log(typeof false); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object

//NOTE - typeof undefined is undefined itself but typeof null is object.


let score = 55

console.log(typeof score);
console.log(typeof (score)); //it's method cuz score is witten inside parathesis(score) .
//now, suppose you get a value in string and you have to use it in number, then we will use typeconversion in which we convert one datatypes into another datatypes.
// -------------------------------------------------------------------------
let length = "45"
console.log(typeof length ); // type is string but length should be in number, so we will convert it into number.

let valueInNumber = Number(length);
console.log(typeof valueInNumber); //it's converted into number.
//--------------------------------------------------------------------------

let h = "34abc";
console.log(typeof h);//it's type is sring

let itsValue = Number(h);
console.log(typeof itsValue);//it's type is number.
console.log(itsValue);// output will be NaN- Not a Number.
//so, 33abc is not a number but when you convert it into number, it will converted into it but when you actually check the value, it's like NaN(not a number), that's why don't rely on numbers. 

//-------------------------------------------------------------------------

let type = null
console.log(typeof type); //type - object

let convertValue = Number(type);
console.log(typeof convertValue);//type - number
console.log(convertValue); // output is 0)

//-------------------------------------------------------------------------
let types = undefined
console.log(typeof type); //type - object

let convertValues = Number(types);
console.log(typeof convertValues);//type - number
console.log(convertValues); // output is NaN)

// similarly, boolean values like true gives you 1 and false gives you 0 and vice-versa.
// ""(empty string) ---- false
// "rohit" (filled string) -----true.

// -------------------------------------------------


let somenum = 33;

let stringnum = String(somenum);
console.log(stringnum); // output - 33
console.log(typeof stringnum); // typeof - string















