function myfun(name){
    console.log("hello Mera Naam "+ name + " hai")
    console.log("Mai coder hu "+ name + " hai")
    console.log("i love to do coding "+ name + " hai")
    console.log("i want to teach you coding "+ name + " hai")
}
sy = prompt("Enter Your Name")
myfun(sy)


function maths(a,b,c = 34){
    return a+b+c
}
result = maths(1,2)
console.log("Your Result id " + result)



//arrow function most the imporant one 
const fun1 = (x)=>{
    console.log("i am arrow",x)
    console.log("This Function is Running")
}
fun1(23);