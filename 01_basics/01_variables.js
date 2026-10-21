const accountId = 2502312
let accountEmail = "fatima@gmail.com"
var accountPassword = "12345"
accountCity = "Islamabad"

//accountId = 2 //notallowed

accountEmail = "abc@d.com"
accountPassword = "12567"
accountCity = "Lahore"
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
 Prefer not to use var
 because of issue in block scope and functional scope
*/
