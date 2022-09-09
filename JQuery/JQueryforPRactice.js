// pure JS vs JQuery - setting the value

document.querySelector("h1").innerHTML="hi";
$("h1").text("goodbye"); // same with JQuery

document.querySelector ("h1").style.color = "red";
$("h1").css ("color", "red");

document.querySelector ("h1").addEventListener("click", function () {
    $("h1").text("sheyleo");
});

// JS vs JQuery  - retreiving an existing value

console.log (document.querySelector("h1").style.color);

console.log $("h1").css ("color");


// You can 1. create a style in advance 2. write an event, so if this happens, assign this style to this object.
$("h1").addClass ("bigtitle");
$("h1").addClass ("bigtitle margin-50"); // you can assign to classes to a n object at time. bigtittle and margin-50 are different classes.
document.querySelector ("h1").addEventListener("click", function () {
    $("h1").addClass("bigtitle");
});


// you can manipulate object's text with JQuery

$("h1").text("Goodbye"); // before it was "Hello", now I changed it to Goodbye.
document.querySelector("h1").innerHTML="hi"; // this is with JS

// you can manipulate object attributes (class, src, href and etc), such as source, href and etc.
console.log ($("image").attr("src"));  // you retreive the source of an image
$("image").attr("src", "images/example.png");

// adding eventlisteners with JQuery
document.querySelector("h1").addEventlistener("click", function () {
  document.querySelector("h1").style.color="red";
});  // change color with vanilla JS

$("h1").click(function () {
  $("h1").css ("color", "red");
})  // change style with JQuery

// manipulation with set of objects
for (var i=0; i<5; i++) {
document.querySelector ("button").[i].addEventListener ("click", function () {
document.querySelector("h1").style.color="red";
});
};  //with vanila JS when you have 5 buttons. if you click any of these bbuttons, h1 color will change

$("button").click (function() {
  $("h1").css("color", "purple");
}); // if you click any of these bbuttons, h1 color will change

// when you click a keyboard, h1 will turn into this letter:
$.(document).keydown(function (event) {
  $("h1").text(event.key);
});

// adding and removing elements with JQuery
$("h1").before("<button> new </button>");  // it will add new button to html without html change on the fly
$("h1").after("<button> new </button>");

// animations

$("button").click(function () {
  $("h1").hide ();
});  // you click buttons and h1 dissapears

$("h1").click(function () {
  $("h1").hide ();
}) ; // you click h1 and h1 dissapears

$("h1").click(function () {
  $("h1").fadeOut ();
}) ;

$("h1").show(); // this will reapear h1

/// this can be used for droodown menus
$("button").click(function () {
  $("h1").slideUp ();
}) ; // it slidesup the h1

$("button").click(function () {
  $("h1").slideDown ();
}) ; //


                      // SUM-UP
$("object").action ("param");

// main methods
$("h1").text("calm down"); // text parameter changes text into an object
$("h1").css ("color", "red"); // css parameter changes style
$("h1").addClass ("bigtitle"); // adds class to an object on the fly
$("h1").attr("src", "images/example.png") // attributes are source, href and etc. you change them on the fly.
$("h1").hide (); //
$("h1").fadeOut)();
$("h1").slideDown(); 
