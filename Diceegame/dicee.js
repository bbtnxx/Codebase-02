// 1st image manipulation
var randomnumber= Math.random();
randomnumber= Math.floor ( (randomnumber * 6) + 1)

var randomdiceeimage = "dice" + randomnumber + ".png"; // writes 1to 1 number so created dice1.png to dice6.png
var randomdiceeimagesource = "images/" + randomdiceeimage; // creates entire source link

var image1 = document.querySelectorALL("img")[0];
image1.setAttribute("src", randomdiceeimagesource )

// 2nd image manipulation
var randomnumber2= Math.random();
randomnumber2 = Math.floor( (randomnumber2 * 6) + 1);

var randomdiceeimage2 ="dice" + randomnumber2 + ".png";
var randomdiceeimage2source = "images/" + randomdiceeimage2;

var image2 = document.querySelectorALL("img")[1];
image2.setAttribute ("src", randomdiceeimage2source);

// changing h1 based on a winner
if (randomnumber>randomnumber2) {
document.querySelector ("h1").innerHML = "Player one wins";
} else if (randomnumber2>randomnumber) {
  document.querySelector("h1").innerHML = "Player two wins"
}else {
  document.querySelector("h1").innerHML ="Draw";
}
