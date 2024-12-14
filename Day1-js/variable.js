// To decalare a constant in javascript  --> "const" keyword whose value can't be changed further.

const accountId = 144553
let  accountEmail = "rohitprem@003kr@gmail.com"
var accountPassword = "12345"
accountCity = "patna"


// accountId = 4 
// this is not allowed because assigned value of const keyword can't be changed.

 accountEmail = "aryan@#.gom"
 accountPassword = "34445"
 accountCity = "samastipur"
 let accountState;
//  accountState value will be undefined because it doesn't have any assigned value.


console.log(accountEmail);
// output - aryan@#.gom because you can change the assigned  value of let keyword.

//  We can also create these things in tabuler structure, for that we use - 

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
//output -
// ┌─────────┬───────────────┐
// │ (index) │ Values        │
// ├─────────┼───────────────┤
// │ 0       │ 144553        │
// │ 1       │ 'aryan@#.gom' │
// │ 2       │ '34445'       │
// │ 3       │ 'samastipur'  │
// │ 4       │ undefined     │
// └─────────┴───────────────┘












