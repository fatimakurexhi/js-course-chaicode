const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const heros = ["superman", "batman", "spiderman"]
let myObj = {
    name: "fatima"
    //age: 2
}

const myFunction = function(){
    console.log("Hello world")
}

//Stack and Heap Memory

let myInstaname = "fatimakurexhi"
let anotherinsta = myInstaname
anotherinsta = "fatimaQureshi"
console.log(anotherinsta)
console.log(myInstaname)

let userOne = {
    email: "fatimaqureshi0903@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "fatima@google.com"

console.log(userOne.email);
console.log(userTwo.email);