const today = new Date()
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let welcomeMessage = document.querySelector("#welcome-message")
let welcomeButton = document.querySelector("#welcome-button")
let username = document.querySelector("#username")
let genderMale = document.querySelector("#male")
let genderFemale = document.querySelector("#female")
let greetingsForm = document.querySelector("body")
let fontCool = document.querySelector(".font-cool")
let fontCute = document.querySelector(".font-cute")
let fontNone = document.querySelector(".font-none")



greetingsForm.style.color="aqua"

let greetingsSuffix = "Mr"
let greetings = "Good morning"
if(today.getHours()>=21 || today.getHours()<=4){
    greetings = "Have a great Night"
}
else if(today.getHours()>=5 || today.getHours()<=11){
    greetings = "Good Morning"
}
else if(today.getHours()>=12 || today.getHours()<=5){
    greetings = "Good Afternoon"
}
else{
    greetings = "Good Evening"
}
genderFemale.addEventListener("click",function(){
greetingsSuffix = "Mrs"
})
welcomeButton.addEventListener("click",function(){
    welcomeMessage.style.border = "0.2rem solid aqua"
welcomeMessage.textContent= greetings+" " +greetingsSuffix+" "+ username.value+". "+"The time is "+time+". "+"Here are your today's Top 10 recommendations from The Multiverse Media Hub. Enjoy!"
})


let fontCategories ={
allFonts: ["'Share Tech Mono', monospace","Architects Daughter","Roboto, sans-serif"],
allFontSelectors : [fontCool,fontCute,fontNone],
pageBg:["linear-gradient(90deg,blue,purple)","pink","black"],
fontColor:["white","rgb(37, 0, 22)","skyblue"]
}
for(let i=0;i<3;i++){
    fontCategories.allFontSelectors[i].addEventListener("click",function(){
        greetingsForm.style.fontFamily = fontCategories.allFonts[i]
        greetingsForm.style.color=fontCategories.fontColor[i]
        if(i!=0){
            greetingsForm.style.background= fontCategories.pageBg[i]
        }
        else{
            greetingsForm.style.backgroundImage = fontCategories.pageBg[i]
        }     
})}

let inputStyle = document.querySelectorAll("input")
inputStyle[1].style.borderRadius = "0.3rem";

//  Custom linear gradient
let firstColor = document.querySelector("#first-color")
let secondColor = document.querySelector("#second-color")
welcomeButton.addEventListener("click",function(){
    // greetingsForm.style.background = "linear-gradient(90deg,blue,red)"
    greetingsForm.style.background = "linear-gradient(90deg,"+firstColor.value+","+secondColor.value+")"
})
let introForm = document.querySelector(".intro-form")
welcomeButton.addEventListener("click",function(){
    introForm.remove()
})