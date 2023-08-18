let results = document.querySelector(".results")
let userCar = document.querySelector(".user-car")
let enemyCarOne = document.querySelector(".enemy-car-one")
let enemyCarTwo = document.querySelector(".enemy-car-two")
let leftButton = document.querySelector(".left-btn")
let rightButton = document.querySelector(".right-btn")
// let upButton = document.querySelector(".up-btn")
// let downButton = document.querySelector(".down-btn")
let leftIncrement = 0
let upIncrement = 0
    rightButton.addEventListener("click",function(){
        leftIncrement +=1
        userCar.style.marginLeft= leftIncrement+"rem"
        let userCarPosition = parseFloat(getComputedStyle(userCar).marginLeft)
        let enemyOneCarPosition = parseFloat(getComputedStyle(enemyCarOne).marginLeft)
        let enemyTwoCarPosition = parseFloat(getComputedStyle(enemyCarTwo).marginLeft)
        if(userCarPosition>=enemyOneCarPosition && userCarPosition>=enemyTwoCarPosition){
            results.textContent = "You are First"
            results.style.color="green"
        }
        else if(userCarPosition>enemyOneCarPosition && userCarPosition<enemyTwoCarPosition){
            results.textContent = "You are Second"
            results.style.color="yellow"
        }
        else{
            results.textContent="You are last :("
            results.style.color="red"
        }
        
    })
    leftButton.addEventListener("click",function(){
        leftIncrement -=1
        userCar.style.marginLeft= leftIncrement+"rem"
    })
    // upButton.addEventListener("click",function(){
    //     upIncrement -=1
    //     userCar.style.paddingTop= upIncrement+"rem"
        
    // })
    // downButton.addEventListener("click",function(){
    //     upIncrement +=1
    //     userCar.style.paddingTop= upIncrement+"rem"
    // })    
