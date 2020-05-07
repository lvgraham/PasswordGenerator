




//object containing the generator functionsgit 
const GeneratorFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};


//Generator Functions - these functions will work together to actually generate the password
//generate random lowercase letter
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

//generate random uppercase letter
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

//generate random number from 0-9
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

//generate random symbol 
function getRandomSymbol() {
    const symbols = ('!@#$%^&*(){}[]=<>/,.'); //defines the variable
    return symbols[Math.floor(Math.random() * symbols.length)];
  }




  //get random letters based on their code
  console.log(getRandomSymbol());
  