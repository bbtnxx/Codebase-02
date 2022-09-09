
// bigtittle and margin-50 are different classes, they're created in advance, are not assigned to any object, but they assign to h1 after it gets click
//document.querySelector ("h1").addEventListener("click", function () {

//}); /

document.querySelector("h1").addEventListener ("click", function () {
  $("h1").slideUp();
});

document.getElementsByClassName("btn").addEventListener ("click", function () {
  $("h1").slideDown();
});
