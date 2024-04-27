// variables

var a = "Narendra Singh";
var b = 239480;

console.log(a + b);

const c = 3434;
//var c = 3343; //its not possible to change constant value

// let
{
  let b = 505;
  console.log(b);
}
//Expection
{
  let a = null;
  console.log(typeof a);
  //it i'll give object reason - go to stackoverflow
}
//Object's

let data = {
  Name: "Narendra Singh",
  Role: "Software Enginner",
  Salary: "$200K",
};
data.laptop = "Macbook";
//We Can futher add data too

/* Now let's Move to Conditional Statement's
But Before Take a Look to all operators */

//Eligiblity For Draving

console.log("--------Welcome_To_Gocarting--------")

let car = confirm("Do You Have car");

if (car == true) {
  var age = prompt("Enter Your Age: ");

  if (age <= 0) {
    console.log("Are You Kidding Me ");
  } else if (age < 18) {
    console.log("You are Not Eligible For Driving");
  }
  else{
    let licence = confirm("Do you Have Licence")
    
    if (licence == true){
      console.log("You Are Able To Drive Car")
    }
    else{
      console.log("Go and Get a Licence First")
    }
  }
}
else{
  console.log("You are Not Eligible For Driving Get a car First (LOL)")
}


//Loops ->
// all of these loop commond are in temp_index.js file 


//Function

function function1(params) {
  let a = harry 
  console.log(a)
}
function1("NSN")