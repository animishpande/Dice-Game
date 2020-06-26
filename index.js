var randomNumber1;
randomNumber1 = Math.random()*6;
randomNumber1 = Math.ceil(randomNumber1);

var randomNumber2;
randomNumber2 = Math.random()*6;
randomNumber2 = Math.ceil(randomNumber2);

document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
function score(){
  var result = "Draw!";
  if (randomNumber1 > randomNumber2) {
    result = "Player 1 Wins!";
  }
  if (randomNumber1 < randomNumber2) {
    result = "Player 2 Wins!";
  }
  return result;

}
document.querySelector("h1").innerHTML = score();
