/*                //addEventListener to first button solution:
1. you pick an object (button) 2. you add a method (addEventListener)
 3. you add a parameter (click)
4.you create a function which will be called after clicking this object

document.querySelector ("button").addEventListener("click", clickhandler);

function clickhandler () {
  alert ("I got cliecked!");
}
in this solution we use Named Function, which means function is indipendently represented                  */



                                     // addEventListener to every button solution

var numberofdrumbuttons = document.querySelectorAll (".drum").length; // create a var which is a lenght of an object
for (var i=0; i<numberofdrumbuttons; i++) { // create var loop, 1. which is zero 2. which is less then length of .drum class 3. which is icreased by 1 after every loop but does not exceed number of drumbuttons
document. querySelectorAll (".drum") [i].addEventListener ("click", function () {

/* use switch:

 switch (expression) {    // here you write one common property which you want to switch
  case expression:   // here you write this propery
                    // here you write code for playing sound
    break;
  default:

} */

var buttonInnerHTML= this.innerHTML;

switch (buttonInnerHTML) {
  case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;

      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
        break;

        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
          break;

          case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
            break;

            case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
              break;

              case "l":
              var kick = new Audio("sounds/kick-bass.mp3");
              kick.play();
                break;

                default:
}

});
}  // in this solution we use unanymous function./

//         adding keyboard press listeners to buttons 

document.addEventListener("keydown", function () {
  alert ("Key was pressed");
});
