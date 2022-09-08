// document.querySelector ("h1").style.color = "red";
$("h1").css ("color", "green");

// with Jquery you can take existing object and add class (which is created before) to it:

$("h1").addClass ("bigtitle"); // so you can 1. create a style in advance 2. write adn event, so if this happens, assign this style to this object.

// you can add multiple classes at once to an object

$("h1").addClass ("bigtitle margin-50"); // bigtittle and margin-50 are different classes.
