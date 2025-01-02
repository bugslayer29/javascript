//Dates

let myDate = new Date()
console.log(myDate.toString());//Tue Dec 24 2024 21:17:34 GMT+0530 (India Standard Time)

 console.log(myDate.toDateString());//Tue Dec 24 2024

console.log(myDate.toISOString());//2024-12-24T15:49:31.293Z

 console.log(myDate.toJSON());//2024-12-24T15:50:34.170Z

 console.log(myDate.toLocaleDateString());//24/12/2024

 console.log(myDate.toLocaleString());
 // 24/12/2024, 9:22:01 pm

 console.log(myDate.toLocaleTimeString());//9:22:44 pm
 

 console.log(myDate.toString());
 //Tue Dec 24 2024 21:23:28 GMT+0530 (India Standard Time)

 console.log(myDate.toTimeString());
 //21:23:58 GMT+0530 (India Standard Time)

 console.log(myDate.toUTCString());
 //Tue, 24 Dec 2024 15:54:22 GMT

 console.log(myDate.getTime()); 
 //1735056333997

 console.log(myDate.getTimezoneOffset());
 //-330
 


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 console.log(typeof myDate);//object

 let myCreatedDate = new Date(2023, 0, 23)
 console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

 // syntax : Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date






  let creationDate = new Date(2023, 0, 1)
  console.log(creationDate.toDateString());//Thu Jan 05 2023
  
 let DateofMine = new Date("2023-01-12");
 console.log(DateofMine.toDateString());
 
 // so when we write date in single digit, it counts like 0 - jan but when we write date in dd-mm-yy format, it counts 1 - jan.
 
 
 let myDateofmine = new Date("11-23-24")
 console.log(myDateofmine.toDateString());//Sat Nov 23 2024  .....this is mm-dd-yy format.
 

 // Time stamps in javascript


 let myTimeStamp = Date.now()
 console.log(myTimeStamp);//1735486680872

 console.log(myCreatedDate.getTime());// 1674412200000
 

 console.log(Math.floor(Date.now()/1000));

let weekday = new Date()
console.log(weekday.toDateString());
console.log(weekday.getMonth());
console.log(weekday.getMonth()+1);



weekday.toLocaleString('default',
    {
        weekday: "long"
    }
)
console.log(weekday.toLocaleString());


 
 
  