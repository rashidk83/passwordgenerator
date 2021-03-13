//create prompts
//create criteria
//length
//create var
//create loop for password to random
//password generated



// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterCount;

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var arrayLowercase = lowerCase.split("");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var arrayUppercase = uppercase.split("");

var numbers = "0123456789";
var arrayNumbers = numbers.split("");

var special = "!@#$%^&*";
var arrayspecial = special.split("");

var allarrays = [];


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
var password = "";

var lc = confirm("include lower case");

if (lc === true){

}

var uc = confirm("include uppercase");

var numbers = confirm("include numbers");

var sc = confirm ("include special characters");


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
