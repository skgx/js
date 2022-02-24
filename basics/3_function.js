roll=335
age=20
function printAll(){
    console.log('My age',age)
    console.log('name',"saurabh")
}
function makeConsoleLog(){
    console.log('H! This is Saurabh')
    console.log(roll)
}
function addToAge(incrementBy,multiplyBy){
    age=age+incrementBy;
    console.log(multiplyBy)// gives undefined
    temp=age*multiplyBy //gives NAN bcoz any undefined number multiplied by a num gives NaN
    console.log(temp)
    console.log(`Modified age by ${incrementBy} `,age)
}
addToAge(5)//passing argument to function , we can also pass multiple arguments
makeConsoleLog()
printAll()

function myNewAge(increment,multiply){
    return (age+increment)*multiply
}

const newAge=myNewAge(5, 2)
console.log("new age is",newAge)


function sum(){
    sum=10+5
    return

    age++  //this code is not executed due to above return statement
}