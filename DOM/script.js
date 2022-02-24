const heading=document.querySelector('h1') //returns the first matching h1
heading.innerHTML='hello saurabh'


const allListItems=document.querySelectorAll('ul li') //return all the li inside ul
for(let i=0;i<allListItems.length;i++){
    const listItem=allListItems[i]
    listItem.innerHTML='HELLo'
}
console.log(heading)

const incrementbtn=document.querySelector('#increment')
const decrementbtn=document.querySelector('#decrement')
let counter=0
const counterEl=document.getElementById('counter')

const ulEl=document.getElementById('list-items')

function incrementCounter(){
   
    counter++
    counterEl.innerHTML=counter

 
    const li=document.createElement('li')
    li.setAttribute('data-counter',counter)
    if(counter%2===0){
        li.setAttribute('class','yellow')
        li.style.padding='10px'
    }else{
        li.style.background='red'//another way of changing CSS
        li.style.padding='20px'
    }
    li.innerHTML='<b>Sentence</b>'+counter

    // const b=document.createElement('b')
    // const textNode=document.createTextNode('sentence')
    // b.appendChild(textNode)

    // const textNode2=document.createTextNode(counter)
    // li.appendChild(b)
    // li.appendChild(textNode2)
    ulEl.appendChild(li)
}

function decrementCounter(){
    const li=document.querySelector('[data-counter="'+counter+'"]')

    const number=parseInt(li.getAttribute('data-counter'),10)
  
    if(number%2===0){
        li.remove()
    }
    //li.remove()
    counter--
    counterEl.innerHTML=counter
}

incrementbtn.addEventListener('click',incrementCounter)
decrementbtn.addEventListener('click',decrementCounter)
