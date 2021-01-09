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



// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?");
birthYear = prompt("Enter Your Birth Date");
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




console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " " + lastName);
console.log("Profession : " + job);
console.log("Age : " + tempAge + " " + "years old");
console.log("Is Eligible to Vote : " + isEligibleToVote);

console.log("family Members ");

//Displaying the family member with foreach
familyMember.forEach(function(member, index) {
    console.log("Family Member  " + (index + 1) + " : " + member);
});


//age calculator 
function ageCalc(birthYear) {
    return new Date().getFullYear() - birthYear;

}