// Assignment Code
var generateBtn = document.querySelector("#generate");
// write passward to the #passward input

// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "=",
  "+",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "?",
  "/",
  ">",
  "<",
  ".",
  ",",
  "~",
  "|",
];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function generatePassword() {
  var returnedPW = [];
  var password = prompt(
    "length of at least 8 characters, no more than 128 characters "
  );

  if (password < 8 || password > 128) {
    alert("your password length has to be between 8 and 128 characters");
    return;
  }
  var useNumber = confirm("would you like your password to have numbers");

  var useSpecialCharacters = confirm(
    "would you like your password to have specialcharacter"
  );

  var useLowerCase = confirm("would you like your password to have lowercase");

  var useUpperCase = confirm("would you like your password to have uppercase");

  if (
    useNumber === false &&
    useSpecialCharacters === false &&
    useUpperCase === false &&
    useLowerCase === false
  ) {
    alert("you need to please pick one character type");
    return;
  }

  var allUseAll = [];

  if (useNumber === true) {
    allUseAll = allUseAll.concat(numberChars);
  }
  if ( useSpecialCharacters === true) {
    allUseAll = allUseAll.concat(specialChars);
  }

  
  if (useLowerCase === true){
    allUseAll =allUseAll.concat(lowercase );
  }
  
  
  if (useUpperCase=== true){
    allUseAll = allUseAll.concat(uppercase);
  }
  
  //random(allUseAll)
  
  //console.log("allUseAll", allUseAll);


  for (var i=0; i < password; i++){
    var randomChar = random(allUseAll)
    returnedPW.push(randomChar)
  }

  return returnedPW.join('')

}

// var practiceArray = ["hello", "hi", "hey"]

// for (var i=0; i < practiceArray.length; i++){
//   console.log(practiceArray[i])

// }



function random(array) {
  var index= Math.floor(Math.random() * array.length);
  //console.log("index:", index);
  var randomitem= array[index];
  //console.log("Random item: ", randomitem)
  return randomitem;
}

// random(lowercase)
// random(uppercase)
// random(specialChars)


// if (choice.safe) {
//   possibleChar = possiblechar.concat(speicalChars);
//   pickedChar.push(randomselected(specialChars));

//   // if (possibleChar = possiblechar.concat(numberChars)
//    pickedChar.push(randomselected(numberChars));

//   // if possibleChar.concat(uppercase);
//   pickedChar.push(randomselected(uppercase));

//   if  = possibleChar(.concat(lowercase)
//   pickedChar.push(randomselected(lowercase))

// for (var i= 0; i<choice.length; i++){
//   possibleChar= getSelection[i];
//   var

// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
