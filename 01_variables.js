const accountId = 1456
let accountEmail = "mayank@google.com"
var accountPasswd = "1235"
accountCity = "Jaipur"
let accountstate;

// accountId = 2 not allowed


accountEmail = "dnds@fdfs.com"
accountPasswd = "4546"
accountCity = "bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPasswd, accountCity, accountstate])