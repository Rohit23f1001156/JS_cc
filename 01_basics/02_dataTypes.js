/*
"use strict" treats all js code as newer version having functions and arrow functions etc
We are using nodejs so alert function will give an error, it works on browser

datatypes: 
number, bigint, 
string(""), boolean(true),
null (standalone value, representation of empty value, type -> object), 
undefined(when value not assigned, type -> undefined), 
symbol(find uniqueness[react,figma])
object

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

memory storage:
stack -> primitive -> we get a copy of the value being stored -> so if the value of copy is changed, no change in og
heap -> non primitive -> we get a reference of original value -> so value gets changes for og even if value of copy is changed!
*/