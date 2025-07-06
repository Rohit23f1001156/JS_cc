/*
for type conversion we use Number, String (first letter capitalized)
if we convert a string with alphanum values and undefined also, it return a value:
 "NaN" -> Not a Number -> but typeof gives number
if we put null value to score, then value will hold 0
if bool as true then value will hold 1
*/
let score = "92a"
// two types of using typeof:

console.log(typeof score)   // -> number (n -> lowercase)
console.log(typeof (score))

let value = Number(score)
console.log(typeof (value))
console.log(value)
