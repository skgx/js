//destructuring
const arr1=[1,2,3]
const arr2=[4,5,6]

const arr3=[...arr1,...arr2]
const arr4=[...arr1,arr2]

console.log(arr3)
console.log(arr4)

const arr5=[{
    name:'saurabh'
}]

const arr6=[{
    name:'Kumar'
}]

const arr7=[...arr5,...arr6]

const arr8={
    ...arr9,
    ...arr10
}

const arr9={
    name:"saurabh"
}

const arr10={
    name:"kumar"
}

console.log(arr7)
console.log(arr8)
