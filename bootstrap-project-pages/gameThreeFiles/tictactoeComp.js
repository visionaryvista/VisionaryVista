let box = document.querySelectorAll(".box")
let results = document.querySelector(".results")
let mode = document.querySelector("#mode")
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


function checkCondition(a){
    if(box[a].textContent!="X" && box[a].textContent!="O"){
        array.push(a)
                    }
}



    for(let i = 0;i<9;i++){
        box[i].textContent=" "
    }
    for(let i=0;i<9;i++){
        box[i].addEventListener("click",function(){
            box[i].textContent = "X"
            winChecker("X")
            
for(let i=0;i<9;i++){
    checkCondition(i)
}
          let compIndex = parseInt(Math.random()*array.length) 
            box[array[compIndex]].textContent="O"
            winChecker("O")
            array=[]
        })
    }
