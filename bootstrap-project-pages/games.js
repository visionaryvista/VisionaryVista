let dots = document.querySelector(".dots")
let leftButton = document.querySelector(".left-btn")
let rightButton = document.querySelector(".right-btn")
let upButton = document.querySelector(".up-btn")
let downButton = document.querySelector(".down-btn")
let leftIncrement = 0
let upIncrement = 0
    rightButton.addEventListener("click",function(){
        leftIncrement +=1
        dots.style.paddingLeft= leftIncrement+"rem"
        
    })
    leftButton.addEventListener("click",function(){
        leftIncrement -=1
        dots.style.paddingLeft= leftIncrement+"rem"
    })
    upButton.addEventListener("click",function(){
        upIncrement -=1
        dots.style.paddingTop= upIncrement+"rem"
        
    })
    downButton.addEventListener("click",function(){
        upIncrement +=1
        dots.style.paddingTop= upIncrement+"rem"
    })