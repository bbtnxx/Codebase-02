
var numberofdrumbuttons=document.querySelectorALL(".drum").length;

for (var i = 0; i<numberofdrumbuttons; i++) {

document.querySelectorALL(".drum") [i].addEventListener("click", function () {
  alert ("I got clicked!");
});
}
