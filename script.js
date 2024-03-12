let image = document.getElementById("diceImage");
function rollTheDice(){
    let randomNumber = Math.ceil(Math.random()*6);
    console.log(randomNumber);
    image.src=`./image/${randomNumber}-dice.jfif`;
}