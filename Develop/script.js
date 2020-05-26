// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Functions
function getRandomLower () {
return String.fromCharCode(Math.floor(Math.random() *26)+97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomSymbol () {
  const symbols="!@#$%^&*()_+";
  return symbols[Math.floor(Math.random()*symbols.length)]
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

console.log(getRandomSymbol());