// for first dice
var randomNumver1 = Math.floor((Math.random() * 6 ) + 1);

var randomDice1 = "dice" + randomNumver1 + ".png";

var randomImage1 = "images/" + randomDice1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage1);


// for second dice

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDice2 = "dice" + randomNumber2 + ".png";

var randomImage2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2);

if(randomNumver1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎉Player 1 Wins!";
}
else if(randomNumver1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🎉";
}
else{
    document.querySelector("h1").innerHTML = "🎲It's a Deaw🎲";
}


 