console.log("This is regex")
//regular expressions are used to match values

let reg=/Saurabh/  //this is a regular expression literal
 let reg1=/Saurabh/g  //g means global
 reg=/Saurabh/i  //i means case insesitive

console.log(reg)

console.log(reg.source)

//functions to match expressions
let s="this is great! Saurabh Hi Saurabh"

// 1.exec()- this function will return an array for match or null for no match
let result=reg.exec(s)
console.log(result)
result=reg.exec(s)
console.log(result)

let result1=reg1.exec(s)
console.log(result)
result1=reg1.exec(s)
console.log(result)