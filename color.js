const color = ["green" , "red" , "rgba(133 , 122 , 100 )" , "#f15025" , "black" , "brown" , "yellow" , "orange"]

const btn = document.getElementById("button-el")
const heX = document.getElementById("hex")

btn.addEventListener("click" , function() {
    let randNum = Math.floor(Math.random()*color.length)
    document.body.style.backgroundColor = color[randNum]
    heX.textContent = color[randNum]
})