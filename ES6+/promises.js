const promiseObject=fetch('/data.json')
//promises to reolve a value in future

promiseObject.then(response=>{
    // console.log(response)
    const promiseObject2=response.json()
    promiseObject2.then(data=>{
        console.log(data)
    })
})