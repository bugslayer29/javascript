//Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
//E: 2.718281828459045
//LN2: 0.6931471805599453
//LN10: 2.302585092994046
//LOG2E: 1.4426950408889634
//LOG10E: 0.4342944819032518
//PI: 3.141592653589793
//SQRT1_2: 0.7071067811865476
//SQRT2: 1.4142135623730951


// abs : ƒ abs()    absolute value which convert negative into positive. (-4) ----> (4)
// acos : ƒ acos()
// acosh : ƒ acosh()
// asin : ƒ asin()
// asinh : ƒ asinh()
// atan : ƒ atan()
// atan2 : ƒ atan2()
// atanh : ƒ atanh()
// cbrt : ƒ cbrt()
// ceil : ƒ ceil() It will choose top values like 4.1 ----> 5 .
// floor : ƒ floor() It will choose bottom values like 4.9 -----> 4
// clz32 : ƒ clz32()
// cos : ƒ cos()
// exp : ƒ exp()
// expm1 : ƒ expl1()

// fround : ƒ fround()
// hypot: ƒ hypot()
//imul: ƒ imul()
//log: ƒ log()
//log1p: ƒ log1p()
//log2: ƒ log2()
//log10: ƒ log10()
//max: ƒ max()
//min: ƒ min()
//pow: ƒ pow()
//random: ƒ random()
//round: ƒ round() It will round of the number like 4.3 ---> 4 and 5.6 -----> 6
//sign: ƒ sign()
//sin: ƒ sin()
//sinh: ƒ sinh()
//sqrt: ƒ sqrt()
//tan: ƒ tan()
//tanh: ƒ tanh()
//trunc: ƒ trunc()
//Symbol(Symbol.toStringTag): "Math"
//[[Prototype]]: Object


// console.log(Math.min(4, 5, 6, 8)); // it will give min value as output like 4.

// console.log(Math.max(4,5,6,8)); // it will give max value as output like 8.

console.log(Math.random()); // It will give values between 0 and 1. like 0.1234 or 0.234 


// Now, to get it between 1 and 2 or to shift values into left, we multiply it by 10.
console.log(Math.random()*10); // 4.782967765740997.    1.234 or 1.4567
// but it can also lie between 0 and 1 like 0.00134 ---> 0.134 so to avoid this we can add 1 to it.

console.log(Math.random()*10 + 1); // 9.250558866439919.   it always give the number between greater than 1.
console.log((Math.random()) * 10 +1);//6.25061748538649. 
console.log(Math.floor(Math.random())*10 +1); // 1 It will give small values. 


// to define min or max

const min = 10

const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))  + min);




