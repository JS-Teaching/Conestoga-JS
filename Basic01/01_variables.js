const accountId = 144553
let accountEmail = "test@example.com"
var accountPassword = "12345"
accountCity = "Waterloo"
let accountState;

// accountId = 2 // not allowed


accountEmail = "conestogac.com"
accountPassword = "21212121"
accountCity = "Waterloo"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])