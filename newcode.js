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


 
