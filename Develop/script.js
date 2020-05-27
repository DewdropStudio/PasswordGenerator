const characterTotalNumber = document.getElementById("characterTotalNumber")

// const number = document.getElementById("number")

// length.addEventListener("input", synclength)
const includeLowercaseElement = document.getElementById("includeLowercase")

const includeUppercaseElement = document.getElementById("includeUppercase")

const includeNumbersElement = document.getElementById("includeNumbers")

const includeSymbolsElement = document.getElementById("includeSymbols")

const form = document.getElementById("passwordGeneratorForm")


// Original
// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

//   Original End


const UPPERCASE_CHAR_CODES =arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES =arrayFromLowToHigh(97, 122)

const NUMBERS_CHAR_CODES =arrayFromLowToHigh(48, 57)

const SYMBOLS_CHAR_CODES =arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
console.log(SYMBOLS_CHAR_CODE())

characterTotalNumber.addEventListener("input", syncnumber)

form.addEventListener("submit", e => {
    e.preventDefault()

    const characterTotalNumber = characterTotalNumber.value

    const includeLowercase = includeLowercaseElement.checked

    const includeUppercase = includeUppercaseElement.checked

    const includeNumbers = includeNumbersElement.checked

    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword (characterTotalNumber, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
    
})


function generatePassword(characterTotalNumber, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    // String.fromCharCode(65)
    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

    const passwordCharacters = []
for (let i = 0; i < characterTotalNumber; i++) {
    const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]
passwordCharacters.push(String.fromCharCode(characterCode))
}
return passwordCharacters.join("")
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++ ) {
        array.push(i)
    }
    return array
}



function syncnumber(e) {
    const value = e.target.value
    characterTotalNumber.value = value
}
}