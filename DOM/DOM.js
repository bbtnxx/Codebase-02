
/* in DOM there are 3 most imporant things:
1. to find an object
2. to manipulate with it's properties
3. to manipulate with it using methods
-->

  <!-- FInding an object -
so main thing is to find an desirable object for which there are multiple ways:
1. document.firstelementchild.lastelementchild. ... this way you can find but it's hard
2. document.querySelector("H1").innerHTML= "Hello world"; - this way you can also find
3. document.getElementsByTagName("li"); - for example in this case you'll get every li (list item ) from <ul>. but if you want to pick only one of them then:
3.1 document.getElementsByTagName("li")[2].style.color="red"   - in this case you only picked third li from ul and changed it's color.
3.2 ocument.getElementsByTagName("li").lenght -with this you get the number of li's from ul.
4. document.getElementsByClassName("btn")  - this way you'll get a button. but you can;t directly manipulate this button because it's returned in array, instead:
4.1 document.getElementsByClassName("btn")[0].style.color=:"red"  - in this example I chose item in array with 0, yes, it's the only item but as it's returned in array(getelementS) you need to pick it
5. document.getElementByID("tittle").innerHTML="Hello everyone"  - this way you'll get specific ID element and you'll manipulate
6. document.querySelector ("#tittle")
6.1 document.querySelector(".list")
6.2 document.querySelector("h1")   - queryselector is a easiest way to pick an object. it works like css.
6.3 document.querySelector ("#list .item")  - you can use combination of ID and class: in this case I picked item's under ul. but it will pick only first our of these three
6.3.1 document.querySelectorALL("#list .item") - you need to add all to quesryselector to pick all of them.
6.4 document.querySelector("#list .item a").style.color = "red"; - with this you're picking an anch(link) which is under item which by itself is under ID list/
</ul>

<!-- every object has a property and method. properties are qualities of the object (for example, H1 is an object and it's properties are background color,
color and heading content and etc. on the other hand, methods are the things object can do)
with properties you can:
1. get property (find out what's the content of h1) - document.querySelector("H1").innerHTML; - this way you'll see what's h1.
2. set property (set the content of h1)   document.querySelector("H1").innerHTML= "Hello world"; - this way you'll set new value of h1
3. document.querySelector("H1").style.color= "red"  - this way you set new color

with methods you can:
1. click();  e.g. - document.queryselector("input").click();  - you'll click to this checkbox
2.appendChild()
3.setAttribute();
difference between functions and methods: method is assigned to an object, so it's what object can do while functions are indipendent.
  -->

<!-- Manipulating with object's CSS properties
1. https://www.w3schools.com/jsref/dom_obj_style.asp  - list of HRML DOM style property namings
2. in CSS you choose object and manipulate it's diferent properties(height, width, color  and etc.). it's the same with JS but there's two difference:
    - property names are different: for example in CSS it's background-color while in JS it's backgroundColor
    - also values for each property are written differently e.g.:
         - in CSS you write: background-color: red;
         - while in JS: backgroundColor: "red";   - so in JS every property value, even if it's number is written as a string, inside quotation marks.
3. example of changing bacground color of a button which has btn class.
document.querySelector(".btn").style.backgroundColor = "yellow";
 -->

<!-- change Attributes
1. document.querySelector("a"); - returns a (anchor element and it's Attributes)
1.1 document.querySelector("a").getAttribute("href");  - returns href (link) which is inside anchor.
1.2 document.querySelector("a").setAttribute ("href", "https://youtube.com");  - in 1.1 you just get what's in href. in 1.2 you set new value inside href.
to do this you need two inputs inside 1.href and 2. new link you change your current link to.

*/
