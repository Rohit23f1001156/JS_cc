/*

******************************IF-ELSE IF-ELSE SYNTAX*************
if (cond1 || cond2){

} else if (cond1 && cond2 &cond3) {
  
} else{
 
}

=== means strict equal, also checks datatype, if datatype not equal then false
********************************SWITCH CASE *********************

switch (key){
    case value:

        break;      --> important, as if once a case matches, every case below that also gets executed EXCEPT DEFALUT
    
    default:

        break;
}


**********************************TRUTHY***************************
falsy values --> false,0,-0,Bigint 0n, "", null, undefined, NaN     #rest are truthy
truthy values eg - "0", 'false', " ", [], {}, function(){} #-empty fn.

************************NULLISH COALESCING OPERATOR (??) :***************************
let val1 = 5??10        -->o/p is 5
val1 = null ?? 10       -->o/p is 10(10 is something that comes from fn return)
it is a fallback for errors     -->use chatgpt, different from ternary operator
ternary : condn ? true : false



*/