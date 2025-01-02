const score = 400;
// this is a way to define a num 
console.log(score); //output : 400 Automatically defined Number.  


const balance = new Number (100)
console.log(balance);
//Another method of defining a number 
// output : [Number = 400] specifically defined  Number.

//  Number {400}
//[[Prototype]] : Number

// constructor : ƒ Number()
// toExponential : ƒ toExponential()       
// tofixed: ƒ tofixed()
// toLocalString : ƒ toLocalString()
// toPrecision : ƒ toPrecision()
// toString : ƒ toString()
// valueOf : ƒ valueOf()

                 

 console.log(balance.toString()); //100
 console.log(typeof balance.toString()); // String
 console.log( balance.toString() .length); // length of 100 is 3. 

 console.log(balance.toFixed(2)); //100.00 
 // you can use tofixed to reduce precision value like tofixed(2) is for two decimal places like 100.00.
 
 const num = 100000000;
 console.log(num.toLocaleString('en-IN'));  

        



   
       
 
 


 
 

 
 



 


 
 

 
 
 