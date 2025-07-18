class User {
    constructor (username, password){
        this.username = username;
        this.password = password
    }
    get user(){                     // agr fn name aur this.name same ho jaaye to stack size exceeded error aata hai
        return this.username.toLowerCase()      // my eg
    }
    set user(value){
        this.username = value           // ya to fn name change kro, wrna jaise sir ne kia _ lga do this.name pe
    }
    get password(){
        return `${this._password} Rohit`    // sir eg
    }
    set password(value){
        this._password = value
}
}
const r = new User ("R8", "abc")
console.log(r.password)
console.log(r.user)