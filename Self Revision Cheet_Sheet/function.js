//Function -> it's a block of code design to perform a perticular task


function Functionop(name, role,place){
    console.log("My Name is "+name+ " i am Student By profession")
    console.log("my i am "+role)
    console.log("i Leave in "+place)

}
Functionop("Narendra Singh", "Software Devloper", "Noida")
Functionop("Harnoor Singh", "Software Devloper", "USA")
Functionop("Harkirat Singh", "Software Devloper", "Banglore")

// We use funcrion for do this type of stuff so we use funcion statement here you can clearly see that i wanted to print these name with there some sort of info so i use these

//another example ->
function multiplication(a,b){
    console.log("Function Can Be use for Multiplication")
    console.log("Here's The answer of the Multiplication: "+ a*b)
}
multiplication(4545,3434)


//Function Using Return

function sum(a,b){
    //if we want we can alos asign parmanet value from here only can be changed Futher
    return a+b  //it will return value of a+b Just like console 
}

result1 = sum(4,6)
result2 = sum(55,3)
console.log("Your Result is: "+ result1)
console.log("Your Result is: "+ result2)


//arrow Function
const fun1 = (yourname) =>{
    console.log("My Name is "+ yourname)
}

fun1("Narendra Singh")
fun1("Harry Bhai op")
fun1("harnoor Singh")