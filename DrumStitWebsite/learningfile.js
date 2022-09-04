// you can create a variable and assing multiple properties to it:
var housekeeper1 = {
yearsOfExperience: 8,
name: "Jena",
cleaningExperience: ["room", "loby","bathroom"],
}

// then you can use DOT notation to retreive any data from this var:
console.log(housekeeper1.name);

// you can't create a new var for every new bell boy and put data manually. solution: you need to create a CONSTRUCTOR FUNCTION. constructor function should start with capital letter

function HouseKeeper (yearsOfExperience,name,cleaningExperience) {
  this.yearsOfExperience= yearsOfExperience;
  this.name = name;
  this.cleaningExperience=cleaningExperience;
}

var housekeeper1= new HouseKeeper(7, "Nikola", ["bedrooms", "loby"]); // you added new object
console.log(housekeeper1.name); // you'll retreive a name 
