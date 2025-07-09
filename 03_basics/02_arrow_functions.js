/*
THIS KEYWORD:
WHAT IT DOES: IT REFERS TO THE CURRENT CONTEXT
context mtlb kiske baare mai baat ho rhi hai

in node environment:
when we do cl(this) globally it returns empty -> {}

in browser:
it gives window, since inside browser, global obj is Window

let's say inside an object, username is rohit(hard coded)
inside that we now create an fn:
inside fn we do cl(`${this.username}, welcome)
now when we call the fn inside the object: user.welcome() ->it prints:rohit, welcome
now just after this call if we do user.username = "sam"
and call. the fn again  --> now it prints:sam, welcome  (even tho inside the fn it was hardcoded, when we change the username,
                                                         the context is changes, and this.username means same)
                                
                             

***********************************************************************************************************************
const chai = fn(){
    let username = "Rohit"
    cl(this.username)   --> returns undefined
}
const chai = () =>{
    let username = "Rohit"              ---------> this is an arrow function
    cl(this.username)   --> also returns undefined
}

IMPLICIT RETURN: USING ARROW FN
const addTwo = (num1,num2) => (num1 + num2)       ---> no need to write return, one line fn, you can use "()", but not "{}"
                                                ---> if {} used, then need to write return

if we need to return obj, in implicit way:
const addTwo = () => ({username: "Rohit"})      ---> "()" around obj very important, else returns undefined


**************************************************************
IIFE --> IMMEDIATELY INVOKED FUNCTION EXPRESSION:
eg: useful when we want to connect the db as soon as the app is run
()()    ----> first parenthesis contains function defn, and the second is calling it

(function chai(){
    cl(`DB Connected`);          --> eg of named IIFE, can also do with arrow fn
}) () ;                     --->IIFE does not know where to end scope so we MUST PUT SEMICOLON AT THE END!!!!

why use it: #use chatgpt
global scope ke pollution se problem hoti hai, to global scope ke pollution ko htane ke liye use kia hai

( (name) => {
    cl(`DB two of ${name});     --->using arrow fn
}) ('Rohit')
*/