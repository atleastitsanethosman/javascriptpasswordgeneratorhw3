// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to create password, uses global variables for confirmation and strings above.
function generatePassword() {

  // prompt for password length and check to ensure it meets length criteria alerts errors if not acceptable.
  var len = parseInt(prompt("How many characters should your password be? (min of 8, max of 128"));
    if ( isNaN(len) ) {
      alert("must be a number, min of 8 and max of 128");
    } else if (len < 8 || len > 128) {
        alert("must be min of 8 characters and a max of 128 characters");
      } else {
        // confirms for what type of number, letters, characters can be allowed.
        var numeric = confirm("allow numbers?");
        var characters = confirm("allow special characters?");
        var upperLetters = confirm("allow Uppercase letters?");
        var lowerLetters = confirm("allow Lowercase letters?");

        // variable to hold a string combining the different sets of characters allowed.
        var pwstring;

        // variables for strings containing the different types of characters allowed based on response to prompts.
        var numericlist = "0123456789";
        var characterslist = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        var upperLetterslist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerLetterslist = "abcdefghijklmnopqrstuvwxyz";

        // if and else if statements with functions to create a string based on allowed types from confirm prompts. 
        } if (numeric == false && characters == false && upperLetters == false && lowerLetters == false) {
          alert("you must select okay for at least one criteria");
        } else if (numeric == true && characters == false && upperLetters == false && lowerLetters == false) {
            pwstring = numericlist;
        } else if (numeric == true && characters == true && upperLetters == false && lowerLetters == false) {
            pwstring = numericlist.concat(characterslist);
        } else if (numeric == true && characters == true && upperLetters == true && lowerLetters == false) { 
            pwstring = numericlist.concat(characterslist + upperLetterslist);
        } else if (numeric == true && characters == true && upperLetters == true && lowerLetters == true) {
            pwstring = numericlist.concat(characterslist + upperLetterslist + lowerLetterslist);
        } else if (numeric == false && characters == true && upperLetters == true && lowerLetters == true) {
            pwstring = characterslist.concat(upperLetterslist + lowerLetterslist);
        } else if (numeric == false && characters == false && upperLetters == true && lowerLetters == true) {
            pwstring = upperLetterslist.concat(lowerLetterslist);
        } else if (numeric == false && characters == false && upperLetters == false && lowerLetters == true) { 
            pwstring = lowerLetterslist;
        } else if (numeric == true && characters == true && upperLetters == false && lowerLetters == true) {
            pwstring = numericlist.concat(characterslist + lowerLetterslist);
        } else if (numeric == true && characters == false && upperLetters == true && lowerLetters == true) {
            pwstring = numericlist.concat(upperLetterslist + lowerLetterslist);
        } else if (numeric == true && characters == false && upperLetters == false && lowerLetters == true) {
            pwstring = numericlist.concat(lowerLetterslist);
        } else if (numeric == true && characters == false && upperLetters == true && lowerLetters == false) {
          pwstring = numericlist.concat(upperLetterslist);
        } else if (numeric == false && characters == true && upperLetters == true && lowerLetters == false) {
          pwstring = characterslist.concat(upperLetterslist);
        } else if (numeric == false && characters == true && upperLetters == false && lowerLetters == false) {
          pwstring = characterslist
        } else if (numeric == false && characters == true && upperLetters == false && lowerLetters == true) {
          pwstring = characterslist.concat(lowerLetterslist)
        } else if (numeric == false && characters == false && upperLetters == true && lowerLetters == false) {
          pwstring = upperLetterslist;
        }


      // loop to create a new string of randomly selected characters from the string created based on allowed character sets.
      // pwChoice used to hold the string created from the random selections..
      var pwChoice = "";
      for ( i = 0;  i < len; i++)  {
        pwChoice += pwstring.charAt(Math.floor(Math.random() * pwstring.length));
      }

  //returns random selection string to be used as password. 
  return pwChoice
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
