alert ("Hello Zazmic");
var Clientname=prompt ("What's your name?");

/* Task: show a prompt, let the customer write info in this prompt window, create var for this prompt window data, then
create another var for the lenght of this data and tell the customer how many letters they've used out of 140.
*/
var clientTWeet= prompt ("write your Tweet here");
var Tweetcount= clientTWeet.length;
alert ("Dear user, you've used" + " " + Tweetcount + " " +  "letters, you have" + " " + (140-Tweetcount) + " " +  "letters remaining");
