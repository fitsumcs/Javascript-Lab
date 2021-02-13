//Exception Handling using try catch 
const fitsNo = document.querySelector("#fn");
const secondNo = document.querySelector("#sn");
const res = document.querySelector("#res");
const btn_divide = document.querySelector("#btn_divide");

btn_divide.addEventListener('click', divideNo);



function divideNo() {

    const no1 = parseInt(fitsNo.value)
    const no2 = parseInt(secondNo.value)
    if (fitsNo.value === '' || secondNo.value === '') {
        alert("Enter Numbers");
        return;
    }

    // 1. Define a try block 

    // 2. put this two lines of code inside the try block 

    const result = performDivision(no1, no2);

    res.innerHTML = result;


    //4.Catch the exception and display error message [remove the string when you have the error variable]
    res.innerHTML = "error";

}




//this function throw exception if denominator is zero
function performDivision(x, y) {
    if (y === 0) {
        throw new Error("Can Not Divide by zero");
    }

    return x / y;
}