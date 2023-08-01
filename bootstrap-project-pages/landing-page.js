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


let greetingsSuffix = "Mr"
let greetings = "Good morning"
if(today.getHours()>=21 || today.getHours()<=4){
    greetings = "Good Night"
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
welcomeMessage.textContent= greetings+" " +greetingsSuffix+" "+ username.value+". "+"The time is "+time
})

let fontCategories ={
allFonts: ["'Share Tech Mono', monospace","Architects Daughter","Roboto, sans-serif"],
allFontSelectors : [fontCool,fontCute,fontNone],
pageBg:["blue","pink","black"],
fontColor:["white","yellow","skyblue"]
}
for(let i=0;i<3;i++){
    fontCategories.allFontSelectors[i].addEventListener("click",function(){
        greetingsForm.style.fontFamily = fontCategories.allFonts[i]
        greetingsForm.style.background= fontCategories.pageBg[i]
        greetingsForm.style.color=fontCategories.fontColor[i]
})}


