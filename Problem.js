"use strict";


// 1 .  Create a variable called carName, assign the value Volvo to it.

let carName = "volvo";

console.log(carName) // volvo




// 2. On one single line, declare three variables with the following names and values:

let firstName = "John"
let lastName = "Doe"
let age = 35;
console.log(firstName+ " " + lastName + " " +age) // answer is  --> John Doe 35




//  3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

function assignment(x , y){
    return x * y ;
}
let x= assignment(10,5);

console.log(x); // x is --> 50




//  4 . Use comments to describe the correct data type of the following variables:

let length = 16;    // console.log(typeof length) ---->  number

let lastName1 = "Johnson";    // console.log(typeof lastName1)----->  string

const x1 = {

    firstName: "John",  
    lastName: "Doe"

};    //  console.log(typeof x1) ----->  object




//  5. Execute the function named myFunction.

function myFunction() {
    alert("Hello World!");
}

myFunction()  // broser এ গেলে  hello world alert  দেখায়



// 6 . Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

const perpson = {

    Name : "John",
    age :50,

    myDeta:function  (){
        return alert(this.Name + "  is  " + this.age + "  years old")
    }
}

perpson.myDeta()  // John  is  50  years old




//  7 .   The <button> element should do something when someone clicks on it. Try to fix it!


function btnFunction(){
        
    let resultone = document.getElementById("resullt");
    resultone.innerHTML = "Hablu Programmer";

} // Hablu Programmer

