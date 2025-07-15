/*
########################SYNTAX FOR LOOP################################
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    }
    
########################SYNTAX WHILE LOOP################################
while (condition) {
    
}
********* maps *********************
const map = new Map()
map.set('IN', "India")


########################SYNTAX FOR OF LOOP################################
this can be used with arrays, but NOT WITH OBJECTS
for (const [key,value] of map) {
    cl (key,value)
    
    }
    
########################SYNTAX FOR IN LOOP################################

IS USED WITH OBJECTS(ALSO FOR OTHERS BUT MAINLY OBJECTS)
for (const key in object){
    cl(object[key])     --> for values
    }
    IF USED FOR ARRAYS AND WE PRINT KEYS THEN IT PRINTS THE INDEXES LINE BY LINE
    SO FOR VALUES INSIDE ARRAY USE: cl(arr[key])
    
    CANNOT BE USED FOR MAP, AS IT IS NOT ITERABLE  -> will not give error, and neither prints anything!
    
########################SYNTAX FOR EACH LOOP################################

const coding = [a,b,c,d,e]
coding.foreach(function (item){ cl (item)})
FUNCTION NAME NOT PROVIDED AS YOU CAN SEE AFTER FN KEYWORD
INSIDE THE () -> WE PASS THE ITEMS THAT WE ARE ITERATING
THEN JUST DO WHAT YOU WANT TO DO INSIDE THE FN

WE CAN ALSO USE ARROW FN
coding.foreach( (item) => {cl(item)})
SAME AS NORMAL FN, REMOVED THE NAME OF THE FUNCTION, PASSED THE ITEM/VALUE WE ARE ITERATING THROUGH

NOW, CAN WE PASS ALREADY DEFINED FN INSIDE FOREACH? YES!

coding.foreach(printMe) 
NOTE: WE ONLY PASS THE REFERENCE, WE DONT CALL THE FN INSIDE FOREACH, THAT IS WE DID NOT WRITE "printME()"


FOREACH CAN HAVE MORE  PARAMS, IT CAN ACCESS THE INDEX AND THE WHOLE ARRAY AS WELL
coding.foreach((item,index, arr) => {
    cl(item, index, arr)
    })

***********
when we recieve data from db, it is in the form of array, with objects inside, so foreach is very helpful
eg:
arr = [{a:x, b:p},{},{}]
arr.foreach((item) =>{
    cl(item.a)
    })

******************    ***********************
if we do const values = coding.foreach((item) => {
    return item
    })

    cl(values)      --> returns undefined
*********** filter ***************

const nums = arr.filter( (num) => {
    return num > 4
    })
    cl(nums)        -> will return array with num > 4

************* map ******************
const new  =arr.map( (num) => {return num + 10})
cl(new) 


************* CHAINING ************
const new = arr
            .map((num) => num*10)
            .map ( (num) => num +1)     --> the output of first map is sent as input to the second map
            .filter( (num) => num >= 40)       ---> the output from the second map is sent to filter now


 ************** Array.reduce() *************
 const total =  arr.reduce( function (acc, currvalue){      --> we are passing the current value and accumulator as params
    return acc+currvalue        ----> that we get is the sum of all the elements in the array
 }, 0)      ---> we are passing the intial value of accumulator as 0

 ***** using arrow fn *******
 const total = arr.reduce ( (acc, curr) => acc+curr,0)

 eg: for shopping cart: contains obj inside arr:

 const pricetopay = cart.reduce((acc,item) => acc+item.price, 0)
 
*/
