let a = prompt("Enter Yout First Number: ");
let b = prompt("Enter Yout Second Number: ");

if (isNaN(a) || isNaN(b)){
    throw SyntaxError ("You not entered any Number please Enter Number")
}
let sum = parseInt(a) + parseInt(b);


document.getElementById("output").innerHTML = sum;

// Hanling Error

try {
    console.log(sum * x)
}
catch{
    console.log(" Yeh nahi Chalega Go for Other One")
}

//Finally Use 
function myfun(){
    try {
      console.log(sum * x);
      return true
    } catch {
      console.log(" Yeh nahi Chalega Go for Other One");
      return false
    }

    // console.log("This Will be not Printed")

    finally{
        console.log("so that's use of finally you see above is printed")
    }
}