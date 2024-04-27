// today we are going to learn about array
// in javaScript type of array is object

//remember that array is alrady change so we can also have differ valus as accepted

let fruits = ['banana','apple','mango']
console.log(fruits.length)

console.log(fruits.unshift('orange'))  //now it'll print new lenth of array

console.log(fruits) //array are mutable means ab array change ho gya hai

let arr = [2,3,4,5,6]
//index =  0,1,2,3,4 how to use index
console.log(arr[4])

//if you want to change array

//Now i am going to write all array method in one show shot for revion && notes Check we use braket with all method's
let array = [0,1,2,3,4,5,6,7,8,9,10];

console.log(array.toString()); //converted to string
console.log(array.join("-")); //bich me - aayega
console.log(array.pop()); //remove last element
console.log(array.push(11)); //add new elemet in last 
console.log(array.shift()); //removes first elment
console.log(array.unshift(-1)); //add new element in first
console.log(delete array[0]); //delete value of index 0 and show empty at that place

let mrray2 = [23,24,28,27,30,67,31,32,33]
console.log(array.concat(mrray2)) //this will join these two array in one
console.log(mrray2.sort()) //this ill arrage array in mrray it arrange 67 at last

//this is impotant this can add or if you want use remove valuse 
//like in code we add 2 value at index 2 that is 26,27
let spliecop = mrray2.splice(2,2,25,26)
console.log(mrray2)

let a3 = [91,92,93,94,95,96]
console.log(a3.slice(2)) // make a new array from index 2 (Included) to the end we can use this to for fully control
console.log(a3.splice(1,3)) 


let num = [2,3,4,5]
console.log(num.reverse()) //this method is use to reverse the value

//Looping Array