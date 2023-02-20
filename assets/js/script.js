// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()"
var numChar = "1234567890"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var possibleCharacters = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var possibleCharacters = ""
  var characterLength = prompt("How many characters would you like your password to be? Must between 8 and 128 characters")
  var containSpecial = confirm("would you like to include special characters?")

var containNumber = confirm("Would you like to include numbers?")
var containLower = confirm("Would you like to include lowercase characters?")
var containUpper = confirm("Would you like to include uppercase characters?")
// var charType = confirm("Must select at least one character type")

if (containSpecial) {
    possibleCharacters += specialChar
  }
  if (containNumber) {
    possibleCharacters += numChar
  }
  if (containLower) {
    possibleCharacters += lowerChar
  }
  if (containUpper) {
    possibleCharacters += upperChar
  }
    console.log(possibleCharacters)

  // return password
  var generatedPassword = ""
for (let i = 0; i < characterLength; i++) {
  generatedPassword += possibleCharacters.charAt(Math.floor(Math.random()*possibleCharacters.length))
}

  return generatedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
