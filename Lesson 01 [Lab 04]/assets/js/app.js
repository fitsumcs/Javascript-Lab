// Declaring variables 
// You can check this Variables are Available or not under the window object 
var firstName;
var lastName;
var age;
var job;
//Age var for Holding Number Value  
let tempAge;
//Eligible to vote 
let isEligibleToVote;

//family storage array 
let familyMember = new Array();
//number of family 
let memberNo;



// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");


tempAge = parseInt(age);


//  check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} else {
    isEligibleToVote = false;
}




console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " " + lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");
console.log("Is Eligible to Vote : " + isEligibleToVote);