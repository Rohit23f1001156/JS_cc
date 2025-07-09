/*
function add(n1,n2){
    cl(n1+n2) or
    return n1+n2
}
add(3,4)
if nothing is passed -> add() ->then undefined

if we don't know the number of params to pass, then we can use rest operstor(same as spread, usecase change)
eg:
function calc(...num){
    return num
}
cl(calc(200,400,500))   -> returns array, if spread not used, then only first taken as param

**********************************
scope in node is different and scope in browser is different!

********************************
global scope variables can be accessed inside the block scope
block scope variables cannot be accessed outside the scope
var c =30   #not used as it does not follow the scope, like even though defined inside a block, it can be accessed globally, creating problems

let a = 20  #global scope
var b =5
{
    let a = 30      #block scope 
    cl(a)       ---> gives 30
    var b = 10
}

cl(a)   --> gives 20
cl(b)   --> gives 10, which was init inside the block!!

********************************
if we have a function inside a function:
the inner function can access the vars defined inside outer function, but reverse is not true!

********************************
function addOne(num){
    return num+1            --->function ; if addone(4) is called above the declaration, this still works fine! will return output
}

const addTwo = function(num){
    return num+2                ---> this is a function, sometimes also called expression
                                ---> that is we are declaring a function and holding it inside a variable
}                               ---> this is callled HOISTING   
                                ---> unlike normal fn declaration, if addTwo(4) is called above declaration:
                                        then it will show an error, saying not initialized
*/