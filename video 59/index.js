/* Making 10% Faulty Calculator */

let n1 = Number(prompt("Enter Your First Number - "));
let n2 = Number(prompt("Enter Your Second Number - "));

sy = prompt("Enter what Calculation Do You Want To perform");
x = Math.random();
if (x > 0.1) {
  let a = n1 + n2;
  let b = n1 - n2;
  let c = n1 * n2;
  let d = n1 / n2;

  if (sy === "+") {
    console.log(a);
  } else if (sy === "-") {
    console.log(b);
  } else if (sy === "*") {
    console.log(c);
  } else if (sy === "/") {
    console.log(d);
  } else {
    console.log("Enter Valid Option");
  }
}
else if (x < 0.1) {
  let a = n1 - n2;
  let b = n1 / n2;
  let c = n1 + n2;
  let d = n1 ** n2;

  if (sy === "+") {
    console.log(a);
  } else if (sy === "-") {
    console.log(b);
  } else if (sy === "*") {
    console.log(c);
  } else if (sy === "/") {
    console.log(d);
  } else {
    console.log("Enter Valid Option");
  }
}
