
function shoulLicense(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

console.log(shoulLicense(18))
console.log(shoulLicense(17))


function performMath(number1,number2,operation){
    if(operation=='+')
    return number1+number2
    else if(operation=='*')
    return number1*number2
}

console.log(performMath(3,5,'*'))