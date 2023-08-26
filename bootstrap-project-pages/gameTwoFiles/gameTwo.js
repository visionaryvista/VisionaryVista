function gameNew(){
    let colorOne = document.querySelector(".color-one")
let colorTwo = document.querySelector(".color-two")
let colorThree = document.querySelector(".color-three")
let colorFour = document.querySelector(".color-four")
let listOfButtons = [colorOne,colorTwo,colorThree,colorFour]
let results = document.querySelector("h2")
let arrayOfClicked = []
let userClicked = []
let listOfRandom = []
// let i = 0
let arrayofRandColor = ["Red","Grey","Yellow","Viotet"]

let level = 0
let rand = Math.floor(Math.random()*4)
results.textContent=`Click on ${arrayofRandColor[rand]} to begin`
level++
for(let i = 0;i<4;i++){
    listOfButtons[i].addEventListener("click",function(){
        if(arrayOfClicked.length===userClicked.length){
            if(arrayOfClicked.toString()===userClicked.toString()){
                listOfRandom.push(rand)
                rand = Math.floor(Math.random()*4)
                arrayOfClicked.push(i)
                if(arrayOfClicked.toString()===listOfRandom
                .toString()){
                    results.textContent=`Passed lv ${level} now stack ${arrayofRandColor[rand]} this time
                    after clicking Previously Clicked Colors`
                    level++
                    userClicked=[]
                }
                else{
                    results.textContent = "Game Over"
                    arrayOfClicked =[]
                    userClicked=[]
                    listOfRandom=[]
                    level = 1 
                }
            }
            else{
                results.textContent = "Game Over"
                arrayOfClicked =[]
                userClicked=[]
                listOfRandom=[]
                level = 1
            }       }
        else{
            userClicked.push(i)
            results.textContent=`Passed lv ${level} now stack ${arrayofRandColor[rand]} this time
                    after clicking Previously Clicked Colors`
} })
}
}
let restartGame = document.querySelector(".start")
restartGame.addEventListener("click",function(){
    gameNew()
})
