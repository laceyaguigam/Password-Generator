// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*()"
var numChar = "1234567890"
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var noChar =""

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

  console.log(containSpecial)

var containNumber = confirm("Would you like to include numbers?")

  if (containSpecial) {
    possibleCharacters += specialChar
  }
  if (containNumber) {
    possibleCharacters += numChar
  }

  console.log(possibleCharacters)


var containLower = confirm("Would you like to incluede lowercase characters?")

  if (containSpecial) {
    possibleCharacters += specialChar
  }
  if (containNumber) {
    possibleCharacters += numChar
  }
  if (containLower) {
    possibleCharacters += lowerChar
  }
    console.log(possibleCharacters)

var containUpper = confirm("Would you like to include uppercase characters?")

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

var charType = confirm("Must select at least one character type")

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
else if (charType) {                //This one didnt work the way it's supposed to
    possibleCharacters -= noChar
}
    console.log(possibleCharacters)

  return password
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


























