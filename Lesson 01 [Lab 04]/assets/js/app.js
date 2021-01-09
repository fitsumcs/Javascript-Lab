// Declaring variables 
// You can check this Variables are Available or not under the window object 
var firstName;
var lastName;
var birthYear;
var job;
//Age var for Holding Number Value  
let tempAge;
//Eligible to vote 
let isEligibleToVote;

//family storage array 
let familyMember = new Array();
//number of family 
let numberOfFamily;

//height and weight 
let weight;
let height;

//bmi calculator 
let calcBmi = function(weight, height) {

    let bmi = weight / (height * height);


    bmi = Number(bmi.toFixed(1));

    console.log("Your Bmi is : " + bmi);
    if (bmi < 18.5)
        console.log("Your are : Underweight");
    else if (bmi >= 18.5 && bmi <= 24.9)
        console.log("Your are : Normal");
    else if (bmi >= 25.0 && bmi <= 29.9)
        console.log("Your are : Overweight");
    else if (bmi >= 30.0)
        console.log("Your are : Obese");


}

//age calculator 
function ageCalc(birthYear) {
    return new Date().getFullYear() - birthYear;

}


// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?");
birthYear = prompt("Enter Your Birth Date");
weight = prompt("Your Weight in Kg  ? ");
height = prompt("Your Height in M  ? ");
numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}



tempAge = ageCalc(birthYear);


//  check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} else {
    isEligibleToVote = false;
}


// Adding Self Invoking Function Expression 

(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    // call bmi calculator 
    calcBmi(weight, height);

})();