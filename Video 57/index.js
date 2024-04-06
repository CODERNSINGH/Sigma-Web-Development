//Today I learn about javaScript loops


//First is for loop
let a = "Narendra Singh";

for (let i = 0; i < 1; i++) {
    console.log(a)
    
}

//for in loop

 let obj = {
    name: "Narendar Singh",
    Role: "Software Devloper",
    company: "Microsoft"
 }
for (const key in obj) {
     {
        // const element = obj[key];
        console.log(key)
        
    }
}

// For of loop
for (const c of "narendra singh") {
    console.log(c)
}

// while Loop
let k = 10;
while(k<15){
    console.log(k)
    k++
}
let m = 10;
while(m<13){
    console.log("its Working")
    m++
}

// Do while loop
g = 10;
do {
    console.log(g)
    g++
} while (g<12);




d = 10;
do {
    console.log(d)
    d++
} while (g<10);