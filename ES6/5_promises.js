//promises
//resolve, reject,pending

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){
            console.log("resolved")
            resolve();
            }
            else{
            console.log("Not resolved")
            reject("sorry not fulfilled");
            }
        },2000);
    })
}

func1().then(function(){
    console.log("saurabh: thanks for resolving")
}).catch(function(){
    console.log("Saurabh:Bad bro")
})