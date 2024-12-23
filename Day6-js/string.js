const name = "hitesh"//string decalaration
const repoCount = 50

console.log(name + repoCount + " value"
);//concatination of two string using (name + repoCount + "value") using this syntax.   


console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
//Backdesk which gives string interpolation like above. It's syntax are like
// console.log(`Hello I am ${name}`); These are placeholder in which you can easily inject varible name and repoCount injected b/w hello my name is and my repoCount.


//there is another method of decalaration of string

const gameName = new String('rohit');
console.log(gameName); //output = [string : 'rohit']

// String {'rohit'}  It is object
//  0 : "r" these are key value pairs (0 is key                  and   "r" is it's value.)
//  1 : "o"
//  2 : "h"
//  3 : "i"
//  4 : "t"

//  length : 5
// [[Prototype]] : String
// [[PrimitiveValue]] : "rohit"
console.log(gameName[0]); //output will be "r", this is to access the keys of string like in above console we access 0th key of string.  
// you can access prototype also like :
console.log(gameName.__proto__); //{} -- object




console.log(
    gameName.length
); // length of string is 5.

console.log(
    gameName.toUpperCase()
);  // UpperCase = ROHIT

console.log(
    gameName.charAt(3)
); //3rd position character is i, you can check position of characters of the string through key values.


console.log(
    gameName.indexOf('t')
); //character 't' is at 5th position. you can chcek the index of all charcaters of the string.


// Go through all string method from chrome and write an article with code syntax and write all output about it. 
  
//##########################################################################################################

// subString of javascript. (gameName.substring)
const newString = gameName.substring(0, 4)
console.log(newString); //rohi ----0=r, 1=o, 2=h, 3=i. It will print index values from 0th to 3rd position.

// slice in javastring (gameName.slice)
const anotherString = gameName.slice(-3, 4);
console.log(anotherString); // It will get the nagative values

// Trim in javascript

const newStringOne = " rohit  ";
console.log(newStringOne); //  rohit
console.log(newStringOne.trim());//rohit
 
// Replace in javascript

const url = "https://rohit.com./rohit%20pathak"

console.log(url.replace('%20', '_'));// It replace %20 into _.


// Includes in javascript.

console.log(url.includes('rohit')); // you can check if this url contains rohit or not. so it will give the output true because it contains rohit.

//Split in javascript

console.log(newStringOne.split('-'));














 






  






