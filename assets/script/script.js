// Assignment Code
var generateBtn = document.querySelector("#generate");

// confirmation prompt variables.
var numeric;
var numericlist = "0123456789"
var characters;
var upperLetters;
var lowerLetters;
var pwstring;

// function to create password, uses global variables for confirmation and strings above.
function generatePassword() {
  var len = parseInt(prompt("How many characters should your password be? (min of 8, max of 128"));
    if ( isNaN(len) ) {
      alert("must be a number, min of 8 and max of 128");
    } else if (len < 8 || len > 128) {
        alert("must be min of 8 characters and a max of 128 characters");
      } else {
        var numeric = confirm("allow numbers?");
        var characters = confirm("allow special characters?");
        var upperLetters = confirm("allow Uppercase letters?");
        var lowerLetters = confirm("allow Lowercase numbers?");
      } if (numeric == false && characters == false && upperLetters == false && lowerLetters == false) {
        alert("you must select okay for at least one criteria");
      } else if (numeric == true && characters == false && upperLetters == false && lowerLetters == false) {
          pwstring = numericlist;
      } else if (numeric == true && characters == false && upperLetters == false && lowerLetters == false)
      

console.log(typeof(len));
console.log(len)
console.log(numeric)
console.log(characters)
console.log(upperLetters)
console.log(lowerLetters)
console.log(pwstring)
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
