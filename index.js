// operations

// arthmatic operators:

let a = 7;
let b = 5;

// console.log("a + b = ", a + b);
// console.log("a * b = ", a * b);
// console.log("a - b = ", a - b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// urany operators:

// ++a; //pre-increment
// --b; //pre-decrement
// a++; //post-decrement
// b++; //post-decrement

// console.log("a =", a, "b =", b);

//assignment operators:

// a += 4; //a = a + 4
// // a -= 4; //a = a - 4
// // a /= 4; //a = a / 4
// // a *= 4; //a = a * 4
// console.log("a =", a);

// comparison operators:

// a == b; //is a = b? only see value
// // a != b; //is a not = b? only see value
// // a === b; // // // also see data type
// // a !== b; // // // also see data type

// a < b; is a greater then b?
// a > b; is a less then b?
// a <=b; is a greater then or equal to b?
// a >=b; is a less then or equal to b?

// console.log("a != b", a != b);

// logical operators:

// and(&&) operator: states true if both expressioins are true
let cond1 = a > b; //true
let cond2 = a === b; //false

console.log("cond1 && cond2", cond1 && cond2);

// OR(||) operator: states true if either one of expressions is true
let cond01 = a < b; //false
let cond02 = a === b; //false

console.log("cond01 || cond02", cond01 || cond02);

//not(!) operator: states the opposite of answer
let cond002 = 8;
let cond001 = 9;

console.log("cond001 ! cond002", !(cond001 > cond002));
