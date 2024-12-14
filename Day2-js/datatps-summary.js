// On the basis of accessing of data and memory allocation, there are two kinds of datatypes :-

// A. PRIMITIVE :-  

      // 1. STRING  
      // 2. NUMBER 
      // 3. BOOLEAN 
      // 4. NULL
      // 5. UNDEFINED
      // 6. SYMBOL
      // 7. BIG-INT 


// B. NON-PREMITIVE / REFERENCE TYPE  :-

      // ARRAYS
      // OBJECTS
      // FUNCTIONS

//  JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE. 
           // IN DYNAMICALLY TYPED  LANGUAGE, YOU CAN ASSIGN ANYTHING YOU WANT TO THE VARIABLE AND IT WILL WORK. 

           // DYNAMIC TYPED LANGUAGE - CHECK DATATYPES DURING RUN TIME AFTER CODE EXECUTION. 

           // STIRCTLY TYPED LANGUAGE - CHECK DATATYPES DURING COMPILE TIME BEFORE CODE EXECUTION.
                        

      //      PRIMITIVE

const score = 100; // here you don't have to define that score is number type of data, that's why it is dynamically typed.

//but in typescript,

// const scorevalue:number = 500, here we define that variable scorevalue is number type of Data.

const scorename = 33; // it is num.
const scoreValue = 100.4; //it is also a num it doesn't effect whethter it is decimal value or integer.
console.log(typeof scoreValue); // number

const isLoggedin = false; // it is boolean
console.log(typeof isLoggedin) // boolean
const outsidetemp = null; // it is null (empty ---it's not 0)
console.log(typeof outsidetemp) // object.

let userEmail; // it is undefined(it doesn't have any value.)
console.log(typeof userEmail); //undrfined



// symbol - when you define any id uniquely then you take Symbol and pass the value in it.



const id = Symbol('123')
console.log(typeof id) //symbol 
const anotherId = Symbol('123')

//since, both have same string value but both id are not smae because due to symbol they both are uniquely identify.
console.log(id === anotherId); // it is false due to Symbol.


const bigNUmber = 123456677n; //it is big int.

// NON-PREMITIVE / REFERENCE TYPE 

const heros = ["shaktiman", "naagraj", "doga"] //array
console.log(typeof heros) //object
{
      name : "rohit";
      age : 22;

}//object


const myFunction = function(){
      console.log(
              "hello world"
      );
      
}

console.log(typeof myFunction); //function
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          















 
