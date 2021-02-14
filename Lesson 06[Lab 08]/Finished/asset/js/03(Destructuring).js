//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    arrayDestructuring();
    objectDestructuring();
    spreadSyntax();
    restSyntax();




});

function arrayDestructuring() {

    // we have an array with the name and surname
    let arr = ["Margaery", "Tyrell"]

    //1. Destructor this array to firstName and lastName

    //2. Display it  [Replace it with ${firstName} ${lastName} once you have the variables]
    des_arr.innerHTML = `Hello , I am firstName lastName `


    // we have an array with the name and surname
    let str = "Margaery Tyrell"

    //1. Destructor this string array to firstName and lastName by using split() method of string object

    //2. Display it [Replace it with ${firstName} ${lastName} once you have the variables]
    des_string.innerHTML = `Hello , I am firstName lastName `





}

function objectDestructuring() {

    // we have a person  with the fname and surname
    let person = { firstName: "John", lastName: "Smith" }

    //1. Destructor this object to firstName and lastName 

    //2. Display it [Replace it with ${firstName} ${lastName} once you have the variables]
    des_obj1.innerHTML = `Hi , I am firstName lastName `


    //1. Destructor this object to fName and sName [different naming]

    //2. Display it [Replace it with ${Name} ${lName} once you have the variables]
    des_obj2.innerHTML = `Hi , I am fName lName `


}

function spreadSyntax() {

    //An array of Numbers to add 
    const arr = [1, 2, 3, 4]

    //1. Pass the array using spread syntax
    const result = sum1();

    //Display it 
    spread_syntax.innerHTML = `The Sum is : ${result} `





}

function restSyntax() {

    //The Numbers to add 
    const x1 = 1;
    const x2 = 1;
    const x3 = 1;
    const x4 = 1;
    const x5 = 1;

    //Make the function to support rest so that it can add 5 numbers
    const result = sum2(x1, x2, x3, x4, x5);

    //Display it 
    rest_syntax.innerHTML = `The Sum is : ${result} `



}
//Function that add 4 numbers 
function sum1(x1, x2, x3, x4) {

    return x1 + x2 + x3 + x4;


}



//3. Make this function to support rest, and add 5 numbers
function sum2(x1, x2) {

    //4. Function that add 5 numbers [Consider Adding the arr[0], arr[1], arr[2]]

    return x1 + x2;


}
