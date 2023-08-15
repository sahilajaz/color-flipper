const hexColor = [0 , 1 , 2 , 3 , 4 ,5 ,6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" , "F"]

const btn = document.getElementById("button-el")
const color = document.getElementById("hex")

btn.addEventListener("click" , function() {
    let hex ="#"
    for(let i = 0 ; i<6 ; i++){
        hex += hexColor[getRandomNumber()]
    }

   document.body.style.backgroundColor = hex
   color.textContent = hex
})

function getRandomNumber() {
    return  Math.floor(Math.random()*hexColor.length)
}