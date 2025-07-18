/*
normally, function ke bahr hm fn variables access nhi kr skte

but agr fn ke andr fn define krte hai, then the inner fn can acccess the var of outer fn
*/

let uname = "r8"
function hello(){
    uname = "rohit"
    console.log(uname)
    function hello2(){
        console.log(uname)          // this is lexical scoping
    }

hello2()
}
hello()



// ****************************. CLOSURE

// closure mtlb jb aap pura fn hi return kr dete ho, to uska sirf scope nhi, USKA LEXICAL SCOPE RETURN HO JAATA HAI
//eg

function clickhandler(color){
    return function(){
        document.body.style.color = `${color}`
    }
}
document.getElementById('orange').onclick = clickhandler("orange")