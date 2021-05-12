






var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var image1 = "dice" + randomNumber1+ ".png" ;

var Randomimage1 = "images/" + image1 ;

var gameimage1 = document.querySelectorAll("img")[0];
gameimage1.setAttribute("src" ,Randomimage1);



var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var Randomimage2  = "images/dice" + randomNumber2+ ".png" ;


document.querySelectorAll("img")[1].setAttribute("src" ,Randomimage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
