class Customer{
    constructor(n){
        this.name= n
    }

    age=20
    buy(){
        console.log(this.name)
        console.log("hello... In parent class")
    }

    //arrow function
    sell=()=>{
        console.log("selling... Bye")
    }
}

class GuestCustomer extends Customer{
    hello(){
        console.log("hello..... In child class")
    }

}

let customer1=new Customer("Saurabh")

console.log(customer1)
customer1.buy()
console.log(customer1.age)
customer1.sell()

let customer2=new GuestCustomer("kumar")
customer2.buy()
customer2.hello()
customer2.sell()