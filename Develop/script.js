// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// }
// Add event listener to generate buttonwritePassword 
// generateBtn.addEventListener("click", writePassword,() => {
//   var length lengthEl.value;

//   resultEl.innerText = generatePassword(),
//   console.log(length)
// });

// //Password Values
// let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

// let password = ""

// loop for generating characters 
for(var i=0; i< length; i++){
  password = password + values.charAt(Math.floor(Math.random()))
  console.log(values[i])
}


// DOM Element
var lowercaseEl = document.getElementById("lowercase");

var uppercaseEl = document.getElementById("uppercase");

var symbolsEl = document.getElementById("symbols");

var numbersEl = document.getElementById("numbers");

var generateEl = document.getElementById("generate");
var lengthEl = document.getElementById("length");

var resultEl = document.getElementById("result");


// Genrate click
generateEl.addEventListener(".click", writepassword, () => {
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  console.log(hasLower, hasUpper, hasNumber, hasSymbol);

resultEl.innerText = generatePassword(length,hasLower, hasUpper, hasNumber, hasSymbol);
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
let generatedPassword = ""
const typesCount = lower + upper + number + symbol;
const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
console.log("typesCount:", typesCount);

if (typesCount ===0){
  return "";
  
//   // loop
//   for (let i = 0; i < length; i += typesCount ) {
// typesArr.forEach(type => {
//   const funcName = Object.keys(type)[0];

//   generatedPassword += randomFunc[funcName]();
//   console.log("funcName:", funcName)
// })
//   }
// }
}


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbol,
  number: getRandomNumber,
  
};


// Functions
function getRandomLower () {
return String.fromCharCode(Math.floor(Math.random() *26)+97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomSymbol () {
  const symbols="!@#$%^&*()_+";
  return symbols[Math.floor(Math.random()*symbols.length)];
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
};
} ; }