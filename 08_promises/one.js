/*

notes of async part are not there:
if possible, make them again! 




************** promise ************


promise object represents eventual completion (or failiure) of an asynchronous operation and its resulting value

const promiseOne = new Promise(function(resolve, reject){
    // do an async task -> like DB calls, cryptography etc
    setTimeout(function(){
        console.log('hi')
        resolve()       --> resolve is used inside promise
        }, 1000)
        })
        
        promiseOne.then(function(){         --->this fn automatically recieves an arguement, which is the return value of promiseOne
        console.log("Promise consumed");
        
        })
        // .then () ka relation hai resolve ke saath
        // ab when we run this, hi will be printed, that is async task is completed
        // but promise consumed is not logged in console! for that we need to use the resolve() inside the promise to connect it to .then()
        
        not necessary to give var name to promise, we can do these 2 steps in 1 step as well:
        
        new Promise(function(resolve, reject){
            setTimeout(function(){
                cl("Async task 2")
                resolve()
                
                }, 1000)
                }).then(function(){
                    cl("Async 2 resolved")
                    })

                    

********************************************************************************



promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "chai", pass: "code"})      --> on object passed inside the resolve
    },1000)
})

resolve mai jo bhi param pass kroge wo hme .then se mil jaata hai





promiseThree.then(function(user){
    cl(user)        --> we will get the data inside resolve
})

    



********************************************************************************





promiseFour = new Promise (function (resolve, reject){
    setTiemout(function(){
        let error = True
        if (!error){
            resolve({uname: Rohit, pass: "R8"})
        } else{
                reject("ERROR")         --> Reject gives error
            }
    },1000)
})


.then ka chaining kr skte hai, oopr waale ke .then se jo op aaega wo as ip for new .then()
agr reject use ho rha, to .catch bhi lgana pdega, wrna error aa rha tha






********************************************************************************
promiseFour
.then( (user) => {
    return user.username
})
.then((username) =>{
    cl(username)
 })
.catch((error) => {           -->takes the reject message
        cl(error)
})
.finally(() =>{
        cl("Done with promise")     -->will always run, evne if reject or resolve
})






********************************************************************************
*************** async await ****************





async function consumePromise(){
    try{
     const response = await promiseFour      //not promiseFour() -> as it is an object, and we will handle like it is wriiten here
     cl(response)
    } catch (error){
        cl(error) 
    }   
}


--> in this error catching is not as great as it is in .then(), but we can do this as well
--> we cannot handle errors directly in async await
-->IF THERE IS NO ERROR EVERYTHING RUNS SMOOTHLY AND WE GET THE RESPONSE
--> if there is an error and we have NOT USED TRY CATCH BLOCK:
we will get an error saying maybe we did not use try catch block
like when db is not getting connected etc, more eg from gpt




********************************************************************************





NEXT CLASS MATERIAL:
async function getAllUsers(){
    try{
        const response = await fetch ("https://something.com")
        const data = await response .json()           --> since we get the response in the form of string, so we convert it into json format
        cl(data);                   --> response.json also takes time, so we will need to await it
    }
    catch (error){
        cl (error)
    }
}
getAllUSers()





********************************************************************************




USING THEN:
fetch ("https://something.com")
.then((response) =>{
    return response.json()
})
.then((data) => {
    cl(data);    
})


###############################******************************#############################################################

**************** FETCH  *********************

## a fetch() promise does not reject on http error (404, etc) -> taken as response only
## only rejects when a network error is encountered (usually when there is a permission issue)

fetch ke liye ek special queue bnti hai... Micro task queue or priority queue
ye call stack mai sbse pehle add hoti hai. (ofcoure time pe bhi depend krti hai)

fetch working:
response = fetch("something", headers, CORS, websocket)--> ye extra waale bhi hote hai... exact pta nhi 

now when we do this in two part:
1 --> ek part uska memory mai space reserve krta hai
let's say data: uske andr 2 fields 
onfulfilled [] -> resolve
onRejection [] -> rejection
ye private hote hai, inn array mai value directly oush krna allowed nhi hai


2 --> web based api handle krta hai
yhn se jaati hai ek network request
browser/node aapka resource deta hai request send krne ke liye
yhn se kuch bhi response aaya that goes into onfulfilled[]
no response -> rejection -> on rejection

at start data field is empty/undefined
ab response hai hmare global memory mai, after reciveing data by onfulfilled or onrejection, which
recieved their data from browser/node -> give it to data
the data field is filled -> then it is the job of data to fufill the response








*/



