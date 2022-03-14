//spread and rest operator(...)

let list=["audi","mercedes","Dodge"]
let newList=[...list,"ferrari"]//spread
let new2=["ferrari",...list]
console.log(newList)
console.log(new2)



let person={
    name:"Saurabh",
    age:20
}
let newPerson={
    ...person,
    city:"Ranchi"
}
console.log(newPerson)


//rest operator 
//accepts all perimeters passed 
//stores all in form of an array
//we can pass any number of operators in function call statement
function hello(...all){
    console.log(all)
}

hello(1,2,3)