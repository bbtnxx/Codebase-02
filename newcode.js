alert ("Hello Zazmic");
var Clientname=prompt ("What's your name?");

/* Task: show a prompt, let the customer write info in this prompt window, create var for this prompt window data, then
create another var for the lenght of this data and tell the customer how many letters they've used out of 140.
*/
var clientTWeet= prompt ("write your Tweet here");
var Tweetcount= clientTWeet.length;
alert ("Dear user, you've used" + " " + Tweetcount + " " +  "letters, you have" + " " + (140-Tweetcount) + " " +  "letters remaining");

/* Task: user writes tweet, you keep this tweet in variable, but the alert only firs e.g. 20 letters of this tweet.
*/

var usertweet= prompt ("tweet here");
var Tweetfirsttenletters= usertweet.slice (0,10);
alert ("Sorry, we only could keep first 10 letters of your tweet:" + " " + Tweetfirsttenletters);


/* Task: change variable from lowercase to toUpperCase and vise versa
*/
var username="Max"
username=username.toUpperCase();

var username="MALKHAZI"
usename=username.toLocaleLowerCase();

/* Task: user writes their name in prompt with lowercase letters, you keep this name in variable, then give them an alert where you
greet them but the first letter of a name is Uppercase
*/

var username= prompt ("please, note your name");
var usernamefirstletter= username.slice(0,1);
usernamefirstletter=usernamefirstletter.toUpperCase();
var usernameremaininglettters= username.slice(1,username.length);
alert ("Hello dear" + " " + usernamefirstletter + usernameremaininglettters);


var username=prompt ("note your name");
var first=username.slice (0,1);
first=first.toUpperCase();
var remaining=username.slice(1,username.length);
alert ("hello dear" + " " + first + remaining);

/*MODULO - Shows what's the remainder after dividing numbers*/
var remainder= 34%3;
/* in this case remainder=1 */

/* Task: you ask user what's their dog's age, based on the dog age you calculate owner's
 age with formula: Humanage= (dogage -2) * 4 + 21  */
var dogage= prompt ("What's the age of your dog?");
var humanAge= (dogage -2) * 4 + 21;
alert ("if your dog is" + " " + dogage + " " + "years old, then you must be" + " " + humanAge + " " + "years old");


/* JS FUNCTIONS */

function WelcometoClient () {

var clientname= prompt ("dear customer, What's your name?");
var firstletter=clientname.slice(0,1);
var remainingletters=clientname.slice(1,clientname.length);
firstletter=firstletter.toUpperCase();
alert ("welcome dear" + " " + firstletter + remainingletters);

}

WelcometoClient();

/* */

function DogToHumanAge() {

var dogage=prompt ("what is your dog's age?")
var humanage= (dogage -2) * 4 + 21;
alert ("if your dog is" + " " + dogage + " " + "years old, then you must be" + " " + humanage + " " + "years old");
}

DogToHumanAge();

/*  you can create several functions and unite them under another function and call all of them by just calling this one function*/

/*e.g. */

function functioncombination() {
WelcometoClient();
DogToHumanAge();
}

functioncombination();

/* Task: you got 340$ to buy several pairs of shoes: unit price is 90$. create variables to know how many pairs you can buy and how much money you'll have remaining*/
var sum=340;
var price=90;
var numberofshoes=(sum/price);
console.log(math.floor (numberofshoes) );

var sum=340;
var price=90;
var remainingmoney=sum%price;
console.log (remainingmoney);

/* Task: imagine you'll leave till 90 years. create a functions that takes your age and returns years months, weeks, days remaining till you die */

function monthsremaining () {

var age=prompt ("How old are you?");
var remainingmonths= (90-age)*12;
return remainingmonths;

}
monthremaining();

function daysremaining() {
var age=prompt ("How old are you?")
var daysremaining=(90-age) * 365;
return daysremaining;

}
daysremaining();

/* or you can write same function this way:*/
function timeremaining(age) {

var monthremained=(90-age) * 12;
var weekremained=(90-age) * 52;
var daysremained=(90-age) * 365;
console.log("you have" + " " + monthremained + " " + "months" + " " + weekremained + " " + "weeks and" + " " + daysremained + " " + "days remained.");
}
timeremaining(24);

/* Task: write BMI calculator. in BMI calculator you got input: weight and height. output is your body mass index which is calculated
from weight devided by height in square.
*/

function BMIcalculator (weight, height) {

var BMI=Math.floor (weight/(height*height));
return BMI;

}
BMIcalculator (80, 188);

/* Task: create a calclator that calculates change after paying for something */

function changecalculator (sum,price) {

var change=sum%price;
return change;
}
changecalculator(400,356);

/*  var randomnumber=Math.random(); - by this you get random number */