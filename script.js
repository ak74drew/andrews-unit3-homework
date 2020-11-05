// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 // var howMuchRock = prompt("How much do you rock?");
  var passwordLength = prompt("Choose a password between 8 to 128 characters")
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
variable - container ; howl string, number, arraym, object, boolean 
  -hold information to use later

string: '' or "asdasd"
number: 1234 
array- ['string', number, object, boolean]

function- block code; does specific things. Can resuse over and over again

*/
