// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'q', 'x', 'y', 'z'];
var specialCharLetters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}'];
var numberLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

function generatePassword() {}

var length;
var upperCase;
var lowerCase;
var specialChar;
var numbers;

function getOptions () {
  length = prompt ('how many characters do you want?')
  if (length > 128 || length < 8) {
    alert ('password needs to be > 8 or < 128')
  }

  upperCase = confirm('do you want upper case letters?')
  lowerCase = confirm('do you want lower case letters?')
  specialChar = confirm('do you want special characters?')
  numbers = confirm('do you want numbers?')

  if (upperCase === false && lowerCase === false && specialChar === false && numbers === false) {
    alert ('cannot generate password, need at least one type of character')
  }
}


function generatePass () {
  getOptions();
  var allowedChar = []
  if (upperCase === true) {
    
  }

}

  //get random letters based on their code
  console.log(length);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(specialChar);
  console.log(numbers);  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


Generator Functions - these functions will work together to actually generate the password


