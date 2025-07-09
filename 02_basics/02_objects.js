/*
in JS, functions can be treated as vriables, no problem
if objects are intialized using literals, singleton nhi bnta hai, constructor se kia to singleton bnta hai
SYMBOLS:
intialize:
const mySym = Symbol("Key1")
inside object:
obj = {
    [mySym]: "myKey1",  #if [] are not used, then if you check type of it will give it as string
}
to access it:
obj[mySym]  #cannot use obj.mySym
****************
OBJECT LITERALS:
const user = {
    name: "Hitesh",
    age: 18,
    isLogin: true,
    "full name": "R8"   #for accessing full name, we cannot use the "." method, so the "[]" method is better 
}
accesing:
user.name   #here you can use without ""
user["name"]    #when using box, yes we have to use the '""', else error
user["full name"]

change values:
user.name = "Ishan"

if you don't want to make changes then use:
Object.freeze(user  #the changes will not propogate, if tried to be made, no error, and no changes made)

defining fn inside obj:     #if done after freeze, then give error as fn never formed
user.greeting = function(){
    console.log("Hello JS user!")
}

if we do : console.log(user.greeting)   -> returns [function(anonymous)]
so we should do: cl(user.greeting())    


***********************************
USING CONSTRUCTOR:
intialization:
const newUser = new Object()   -> this is singleton
adding values:
newUser.id = "123abc"
newUser.name = "Ishan"

# Object.assign()   -> join two objects (copy into the target obj, and returns modified target)
eg:
const source = {a:1, b:2}
const target = {c:3, d:4}
const final = Object.assign(target,source)  #o/p is {a:1,  b:2, c:4, d:4}
Sir recommeds: Object.assign({},target,source)  #make {} as target, better, or just like arrays
const final = {...source, ...target}
Object.keys/values(user)    -> returns array, keys:[a,b] | values: [1,2]
Object.entries(user)    ->gives o/p like: [[a,1], [b,2]]
*************************************

*/