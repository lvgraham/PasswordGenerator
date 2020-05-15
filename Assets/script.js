// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input


//possible password characters
let upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'q', 'x', 'y', 'z'];
let specialCharArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}'];
let numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

//variables for prompts
let numOfLetters;
let upperCase;
let lowerCase;
let specialChar;
let numbers;
let randomChar = '';
let allowedChar = []

//gathering information from user to generate password
function getOptions () {
 numOfLetters = prompt ('how many characters do you want?')

  if (numOfLetters > 128 || numOfLetters < 8) {
    alert ('password needs to be > 8 or < 128')
  }
  upperCase = confirm('do you want upper case letters?')
  lowerCase = confirm('do you want lower case letters?')
  specialChar = confirm('do you want special characters?')
  numbers = confirm('do you want numbers?')

  console.log(numOfLetters);
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
  
 
 //we now have an array of letters to choose from, so we need a for loop to create the actual password. Need to pull a random character from allowedChar as many times as the numOfLetters of lencth.

}

function getRandomChar() {
  console.log(numOfLetters);
  for (let i = 0; i < numOfLetters; i++) {
      console.log('hi');
      randomChar += allowedChar[Math.floor(Math.random() * allowedChar.length)];
      // console.log(randomChar);
    }
    return randomChar;
}


function writePassword() {
  generatePassword();
  let password = getRandomChar();
  console.log(password);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());