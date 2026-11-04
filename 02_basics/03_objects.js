// singleton
// object.create
const mySym = Symbol("key1")

// object literals

const JsUser = {
    name: "Fatima",
    [mySym]: "mykey1",
    age: 22,
    location: "Islamabad",
    email: "fatimaq@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser[mySym])
// console.log(JsUser["email"])

JsUser.email = "trintron@gmail.com"
//Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());