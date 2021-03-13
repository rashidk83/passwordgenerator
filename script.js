//create prompts
//create criteria
//length
//create var
//create loop for password to random
//password generated



// Assignment Code
var generateBtn = document.querySelector("#generate");

function genaratePrompt () {
  var characters= prompt ("how many characters");
  characterCount = parseInt (characters)
  
  if(characterCount<8 || characterCount>128 || isNaN(characterCount)) {
   alert ("Please try again");
 genaratePrompt ();
  }

return;
}

function generatePassword (){ 
var password = "blank text";
var characters= prompt ("how many characters");
characterCount = parseInt (characters)

if(characterCount<8 || characterCount>128 || isNaN(characterCount)) {
 alert ("Please try again")


}


return password;


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
