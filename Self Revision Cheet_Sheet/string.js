let string = "     Board of Studies(Academic) the institute of Charted Accountants of india"

let a = string.length
console.log(a)

//Tamplate litrate
function detail(name, role){
    console.log(`My name is ${name} and i am ${role}`)
}
detail("Narendra Singh"+ "Software Devloper")

let upstring = string.toUpperCase()
console.log(upstring)


let opstring = string.replace("the", "NSN")
console.log(opstring )

let x = " Upper version"
console.log(string.concat(x,upstring))