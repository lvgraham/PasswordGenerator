// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

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

function generatePassword() {
  getOptions();
  var allowedChar = []
  if (upperCase === true) {
      allowedChar = allowedChar.concat(upcerCaseArr);
    }
  if (lowerCase) === true) {
      allowedChar = allowedChar.concat(lowerCaseArr);
    }
  if (specialChar === true) {
      allowedChar = allowedChar.concat(specialCharArr);
    }
  if (numbers === true) {
      allowedChar = allowedChar.concat(numbersArr);
    }

    console.log(allowedChar)

    for (let i = 0; i < length; i++) {
      let randomText = Math.floor(Math.random() * passwordArr.length);
      personalPass.push(passwordArr[randoIndx]);
  
    };

  }
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


// Generator Functions - these functions will work together to actually generate the password


