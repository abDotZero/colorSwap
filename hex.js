const hexColor =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const screen = document.querySelector(".colorChange");
const click = document.getElementById("btn");

click.addEventListener("click",function() {
     let hexHash = "#";
     for (let i = 0; i < 6; i++) {
        hexHash += hexColor[getRandomNumber()];
     }

     screen.textContent = hexHash;
     document.getElementById("Mcon").style.backgroundColor = hexHash;
});

getRandomNumber = function(){
    return Math.floor(Math.random() * hexColor.length);
}