//Loops
 
// 1. For loop ->
let name = "Narendar Singh";
console.log("Ultimate Test of loops")

for (let i = 0; i <= 10; i++) {
    console.log(i +". " + name);
    // console.log("Here are the Number's")
}

//2. for in loop ->
let obj = {
  Neme: "Narendra Singh",
  Role: "Software",
};
for (const key in obj) {
  console.log(key);
}
/////

for (const key in obj) {
  const ele = obj[key];
  console.log(key, ele);
}

//for of loop ->
for (const p of "Narendra Singh is software engineer") {
  console.log(p);
}

//while loop ->
let i = 0;
while (i < 10) {
  console.log(i + " Narendra Singh");
  // console.log(i)
  i++;
}

//do while loop ->
{
  let i = 15;
  do {
    console.log("Narendra Singh");
    console.log(i + "it'll print untill value of i does't match to the while conditon")
    i++
  } while (i < 20)
}
