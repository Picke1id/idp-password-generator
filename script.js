// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for Code Selection
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "#", "$", "%", "&", "+", "-", ".", "*",];

// Variables for Prompts
var confirmLength = "";
var confirmNumbers;
var confirmLowerCase;
var confirmUpperCase;
var confirmSpecialChar;

// Variable for code selections to be concatenated
var selection;

// Prompt for user to confirm length of password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like to include in your password? Choose between 8 and 25."));

  // Condition if user does not enter a value
  if (!confirmLength) {
      alert("You must enter a value!");
  // Condition if user chooses a value outside of the parameters provided
  } else if (confirmLength <= 7 || confirmLength >= 26) {
      alert("Your password must be between 8 and 25 characters!");
  // Repeat length input back to user
  } else {
      alert(`Your password will contain ${confirmLength} characters.`);
  }
  
  // Continuation of prompts once input is validated
  var confirmNumbers = confirm("Do you want this password to contain numbers?")
  var confirmLowerCase = confirm("Do you want this password to contain lower case letters?")
  var confirmUpperCase = confirm("Do you want this password to contain upper case letters?")
  var confirmSpecialChar = confirm("Do you want this password to contain special characters?")
  
  // Condition if user does not select any confirmed criteria
  if (!confirmNumbers, !confirmLowerCase, !confirmUpperCase, !confirmSpecialChar) {
    alert("You must select criteria!");
  }

  // Condition if user chooses all selections
  else if (confirmNumbers, confirmLowerCase, confirmUpperCase, confirmSpecialChar) {
    selection = numbers.concat(lowerCase, upperCase, specialChar);
  }

  // Conditions if only 3 options are selected
  else if (confirmNumbers, confirmLowerCase, confirmUpperCase) {
    selection = numbers.concat(lowerCase, upperCase);
  }
  else if (confirmNumbers, confirmLowerCase, confirmSpecialChar) {
    selection = numbers.concat(lowerCase, specialChar);
  }
  else if (confirmNumbers, confirmUpperCase, confirmSpecialChar) {
    selection = numbers.concat(upperCase, specialChar);
  }
  else if (confirmlLowerCase, confirmUppercase, confirmSpecialChar) {
    selection = lowerCase.concat(upperCase, specialChar);
  }

  // Conditions if only 2 options are selected
  else if (confirmNumbers, confirmLowerCase) {
    selection = numbers.concat(lowerCase);
  }
  else if (confirmNumbers, confirmUpperCase) {
    selection = numbers.concat(upperCase);
  }
  else if (confirmNumbers, confirmSpecialChar) {
    selection = numbers.concat(specialChar);
  }
  else if (confirmLowerCase, confirmUpperCase) {
    selection = lowerCase.concat(upperCase);
  }
  else if (confirmLowerCase, confirmSpecialChar) {
    selection = lowerCase.concat(specialChar);
  }
  else if (confirmUpperCase, confirmSpecialChar) {
    selection = upperCase.concat(specialChar);
  }

  // Conditions if only 1 option is selected
  else if (confirmNumbers) {
    selection = numbers;
  }
  else if (confirmLowerCase) {
    selection = lowerCase;
  }
  else if (confirmUpperCase) {
    selection = upperCase;
  }
  else if (confirmSpecialChar) {
    selection = specialChar;
  }
}

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

