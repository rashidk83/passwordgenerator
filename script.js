//create prompts
//create criteria
//length
//create var
//create loop for password to random
//password generated



// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterCount;

var password = "";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var arrayLowercase = lowerCase.split("");

console.log(arrayLowercase);

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
  
  console.log(characterCount);
  if(characterCount<8 || characterCount>128 || isNaN(characterCount)) {
   alert ("Please try again");
 genaratePrompt ();
  }

return;
}

function randomPassword (){
  for( let i = 1; i <= characterCount; i++){
    var random = Math.floor(Math.random()
    * allarrays.length);

    password += allarrays[random];
    console.log(password);
  }


}



function generatePassword (){ 
 password = "";

genaratePrompt();

var lc = confirm("include lower case");

if (lc === true){
allarrays = allarrays.concat(arrayLowercase);
}

var uc = confirm("include uppercase");

if (uc === true){
  allarrays = allarrays.concat(arrayUppercase);
}

var numbers = confirm("include numbers");

if (numbers ===true){
  allarrays = allarrays.concat(arrayNumbers);
}

var sc = confirm ("include special characters");

if (sc === true){
  allarrays = allarrays.concat(arrayspecial);
}

console.log(allarrays);


randomPassword();

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
