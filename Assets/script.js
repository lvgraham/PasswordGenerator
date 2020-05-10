// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//possible password characters
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'q', 'x', 'y', 'z'];
let specialCharArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}'];
let numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

//variables for prompts
let length;
let upperCase;
let lowerCase;
let specialChar;
let numbers;

//gathering information from user to generate password
function getOptions () {
  let length = prompt ('how many characters do you want?')
  length = parseInt(length);

  if (length > 128 || length < 8) {
    alert ('password needs to be > 8 or < 128')
  }
  upperCase = confirm('do you want upper case letters?')
  lowerCase = confirm('do you want lower case letters?')
  specialChar = confirm('do you want special characters?')
  numbers = confirm('do you want numbers?')

  console.log(length);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(specialChar);
  console.log(numbers);

  if (upperCase === false && lowerCase === false && specialChar === false && numbers === false) {
    alert ('cannot generate password, need at least one type of character')
  }
}

// Generator Functions - these functions will work together to actually generate the password
function generatePassword() {
  getOptions();
  //this will generate the array allowedChar for the characters to work with to create the password
  let allowedChar = []
  if (upperCase === true) {
      allowedChar = allowedChar.concat(upperCaseArr);
    }
  if (lowerCase === true) {
      allowedChar = allowedChar.concat(lowerCaseArr);
    }
  if (specialChar === true) {
      allowedChar = allowedChar.concat(specialCharArr);
    }
  if (numbers === true) {
      allowedChar = allowedChar.concat(numbersArr);
    }

    console.log(allowedChar);
  
  //we now have an array of letters to choose from, so we need a for loop to create the actual password. Need to pull a random character from allowedChar as many times as the length of lencth.
    for (i = 0; i < length; i++) {
      let randomChar = Math.floor(Math.random(allowedChar))
      console.log(randomChar)
    }
  

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());