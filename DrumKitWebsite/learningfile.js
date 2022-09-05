// you can create a variable and assing multiple properties to it:
var PM = {
experience: 3,
name: "Max",
Company: "Zazmic inc",
};

// then you can use DOT notation to retreive any data from this var:
console.log(PM.name);

// you can't create a new var for every new bell boy and put data manually. solution: you need to create a CONSTRUCTOR FUNCTION. constructor function should start with capital letter

function AddPM (experience,name,Company) {
  this.experience= experience;
  this.name = name;
  this.Company=Company;
}

var PM1= new PM (7, "Nikola", "BOG"); // you added new object
console.log(PM1.name); // you'll retreive a name

// another examople
var Engineer= {
experience: 9,
name: "Gega",
company: "Zazmic",
};

function AddEngineer(experience,name,company) {
this.experience=experience;
this.name=name;
this.company=company;
};

var Engineer1 = new AddEngineer (9,"Sasha", "Exadel");












                            // ADD FUNCTIONS TO AN OBJECTS

// this is an object:
var Engineer= {
experience: 9,
name: "Gega",
company: "Zazmic",
};

// this is a function
function coding () {
alert ("can I start coding?")
opencomputer ();
openeditor ();
startcoding ();
}

// add function to an object
var Engineer= {
experience: 9,
name: "Gega",
company: "Zazmic",
coding: function () {
  alert ("can I start coding?")
  opencomputer ();
  openeditor ();
  startcoding ();
}
};
