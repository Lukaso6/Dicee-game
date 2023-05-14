var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


/* retry button */

function refreshTab() {
  location.reload(); // Refresh tab
}


/* hvem vant text */

var winnerHeading = document.getElementById("winner-heading");
if (randomNumber1 > randomNumber2) {
  winnerHeading.textContent = "Player one wins!";
} else if (randomNumber2 > randomNumber1) {
  winnerHeading.textContent = "Player two wins!";
} else {
  winnerHeading.textContent = "It's a tie!";
}



