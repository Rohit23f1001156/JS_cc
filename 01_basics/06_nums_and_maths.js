const balance = new Number(100) //if you want to specify the datatype, you use new then name of datatype you want with first letter caps
/*
if you want to specify the datatype, you use new then name of datatype you want with first letter caps
there is difference when you do console log if defined like this:
[Number: 100]
*/
console.log(balance)
console.log(balance.__proto__)  //inside console of you do this, it also specifies all the methods for this var

// *******************DATES***********************************************************************************
let myDate = new Date()     //Date is an object type
console.log(myDate.toDateString())    //to_many methods, month starts from 0(inside array)
let myTimeStamp = Date.now()

