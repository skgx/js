const myProfile={
    name:'Saurabh',
    age:20
}

const secondProfile={
    name:'kumar',
    age:19
}
function primitve(primitive){//passed value is copied to this variable
    primitive++
    console.log(primitive)
}
function mutate(obj){//this obj poits to same object as passed in the function
    console.log(obj.name)
}

let num=100
primitve(num)//pass by value
console.log(num)
mutate(myProfile)//pass by reference