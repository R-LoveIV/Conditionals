// x = 1

if (x > 3) {
    console.log("X is greater than 3")
}
else if (x < 2) {
    console.log("X is less than 2")
}
else if (x = 3) {
    console.log("X is equal to 3")
}
else {
    console.log("Cool")
}

// //Conditional with multiple condtions
// // && - and .....|| or

let y = 67

if (y > 35 || y < 56 || y === 67){
    console.log(y)
}

// Nested If Statements

let z = 'Zebra'
let a = 6

if (a > 5){
    console.log(a)
    if(z == "zebra"){
        console.log(z)
    }
}
// For loops in javascript
// console.log all numbers 0-10
// Start; stop; stop;
for (let i=0; i < 11; i++) {
    console.log(i)
}

// console.log all numbers 12-16
for (let i=12; i <= 16; i++) {
    console.log(i)
}

// console.log all numbers in reverse 48-37

for( let i=48; i >=37; i--) {
    console.log(i)
}

let myArray = ["Will", "Paul", "Gray"]
myArray.push("Elaina")

for (let i =0; i < 4; i++) {
    if (myArray[i] === "Paul"){
        console.log("Best TA EVER")
    }
    for ( let j = 0; j <2; j++){
        console.log(j)
    }
}
    console.log(myArray[i])