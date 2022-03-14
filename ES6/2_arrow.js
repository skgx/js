//parenthesis can be omitted if only 1 argument is present
let sayName=name=>{
    console.log(name);
}
sayName("saurabh")

//no argument
let sayName1=()=>{
    console.log("saurabh");
}
sayName1()

//sibgle argument in parenthesis
let sayName3=(name)=>{
    console.log(name);
}
sayName3("saurabh")

//returning value
let sayName4=name=>{
    return name;
}
console.log(sayName4("saurabh"))

//shortest form to return a value
let sayName5=name=>name;
console.log(sayName5("saurabh"))