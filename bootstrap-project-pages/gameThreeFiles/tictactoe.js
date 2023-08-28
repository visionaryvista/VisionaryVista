let box = document.querySelectorAll(".box")
let results = document.querySelector(".results")
let array = []
let xo = 0
let winChecker= (inputXO)=>{
if((box[0].textContent===inputXO && box[4].textContent===inputXO && box[8].textContent===inputXO)||
(box[0].textContent===inputXO && box[1].textContent===inputXO && box[2].textContent===inputXO)||
(box[3].textContent===inputXO && box[4].textContent===inputXO && box[5].textContent===inputXO)||
(box[6].textContent===inputXO && box[7].textContent===inputXO && box[8].textContent===inputXO)||
(box[0].textContent===inputXO && box[3].textContent===inputXO && box[6].textContent===inputXO)||
(box[1].textContent===inputXO && box[4].textContent===inputXO && box[7].textContent===inputXO)||
(box[2].textContent===inputXO && box[5].textContent===inputXO && box[8].textContent===inputXO)||
(box[2].textContent===inputXO && box[4].textContent===inputXO && box[6].textContent===inputXO)){
    results.textContent=`${inputXO} wins the match!`
} return results.textContent
}

    for(let i=0;i<9;i++){
        box[i].addEventListener("click",function(){
            if(xo===0){
                box[i].textContent = "X"
                xo=1
                winChecker("X")
            }
           else{
            box[i].textContent = "O"
                xo=0
                winChecker("O")
           }
        })
    }
    results.textContent="Welcome to Tic Tac Toe, Play with Your Friends and Have Fun!"
let mode = document.querySelector("#mode")
mode.addEventListener("click",function(){
    for(let i = 0;i<9;i++){
        box[i].textContent=" "
    }
})