const today = new Date()
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let welcomeMessage = document.querySelector("#welcome-message")
let welcomeButton = document.querySelector("#welcome-button")
let username = document.querySelector("#username")
let genderMale = document.querySelector("#male")
let genderFemale = document.querySelector("#female")
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

