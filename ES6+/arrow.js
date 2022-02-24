//by deafult js takes all the functions in the code and hoists them at the top
//so a function call ststement can be above the function declaration statement
//but not with arrow functions

const power=(arg)=>arg**2 //implicitly returned

console.log(power(2))

Btn.addEventListener('click',()=>{
console.log('clicked')
})