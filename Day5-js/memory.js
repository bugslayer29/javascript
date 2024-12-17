// Two types of memory
// stact memory and heap memory.
  

// stack memory used in primitive types of data. You get copy of whatever variable you declare. 


// Heap memory used in Non-primitive types of data. . You get refrence of original value.

//example of stack memory
let myYoutubename = "rohitcoding"
let anotherYoutubename = myYoutubename

anotherYoutubename = "chai or code"

console.log(myYoutubename); //rohitcoding (which is old value)
console.log(anotherYoutubename); //chai or code




//example of heap memory

let userOne = {
    email : "user@gmail.com",
    gpay: "user@eolaxis",
}

let userTwo = userOne;
 
userTwo.email = "hitesh"

console.log(userOne.email);
console.log(userTwo.email);


