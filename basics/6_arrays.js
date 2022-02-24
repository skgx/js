let myFriends=["default"]

function addFriend(friend){
    myFriends.push(friend)// adds at end
    console.log(myFriends)
    myFriends.unshift(friend)//adds at beginning
    console.log(myFriends)
}

addFriend("saurabh")
addFriend("devansh")
addFriend("sanskar")

console.log(myFriends.length)

myFriends.pop()//returns and reoves the last value
myFriends.pop()
myFriends.pop()
myFriends.pop()
myFriends.pop()
console.log('Final Array',myFriends)