/*
constant (const)  is used as a variable which we cannot changed, let is also used 
as a varible instead of var we can change, var not to be used in JS because of block scope issues*/
const accountId = 123456
let accountEmail = "test@gmail.com"
var accountPassword = "12345"

console.log(accountId); /*console.log will help to show the output*/

console.table([accountId, accountEmail, accountPassword]) /*console.table used to show the multiple
output in a tabular format

$ node 01_variables.js 
123456
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 123456           │
│ 1       │ 'test@gmail.com' │
│ 2       │ '12345'          │
└─────────┴──────────────────┘
*/
