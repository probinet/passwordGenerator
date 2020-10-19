// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = "!#$%&'()*+,-./;:<>=?@[]^_`{}|~";

//Password length
function length() {
  passwordLength = prompt(
    "How long do you want your password to be? Choose between 8-128 characters."
  );

  if (passwordLength < 8) {
    window.alert("Your password must be at least 8 characters!");
    length();
  } else if (passwordLength > 128) {
    window.alert("Your password cannot be more than 128 characters!");
    length();
  } else if (isNaN(passwordLength)) {
    window.alert("Your password must be between 8-128 characters!");
    length();
  } else {
    window.alert("Follow the prompts and type 'YES' or 'NO'.");
  }
  return passwordLength;
}

//Ask user if they want to use uppercase letters
function upperQuestion() {
  useUpper = prompt("Do you want to use uppercase letters?");
  useUpper = useUpper.toLowerCase();

  if (useUpper === null || useUpper === "") {
    alert("Please answer Yes or No");
    upperQuestion();
  } else if (useUpper === "yes" || useUpper === "y") {
    useUpper = true;
    return useUpper;
  } else if (useUpper === "no" || useUpper === "n") {
    useUpper = false;
    return useUpper;
  } else {
    alert("Please answer Yes or No");
    upperQuestion();
  }
  return useUpper;
}

//Ask user if they want to use numbers
function numbersQuestion() {
  useNumber = prompt("Do you want to use numbers?");
  useNumber = useNumber.toLowerCase();

  if (useNumber === null || useNumber === "") {
    alert("Please answer Yes or No");
    numbersQuestion();
  } else if (useNumber === "yes" || useNumber === "y") {
    useNumber = true;
    return useNumber;
  } else if (useNumber === "no" || useNumber === "n") {
    useNumber = false;
    return useNumber;
  } else {
    alert("Please answer Yes or No");
    numbersQuestion();
  }
  return useNumber;
}

//Ask user if they want to use special characters
function specialQuestion() {
  useSpecial = prompt("Do you want to use any special characters?");
  useSpecial= useSpecial.toLowerCase();

  if (useSpecial === null || useSpecial === "") {
    alert("Please answer Yes or No");
    specialQuestion();
  } else if (useSpecial === "yes" || useSpecial === "y") {
    useSpecial = true;
    return useSpecial;
  } else if (useSpecial === "no" || useSpecial === "n") {
    useSpecial = false;
    return useSpecial;
  } else {
    alert("Please answer Yes or No");
    specialQuestion();
  }
  return useSpecial;
}

//Generate password
function generatePassword() {
  length();
  console.log(passwordLength);
  upperQuestion();
  console.log(useUpper);
  numbersQuestion();
  console.log(useNumber);
  specialQuestion();
  console.log(useSpecial);

  var characters = lowerCase;

  var password = "";
  if (upperCase && useNumber && useSpecial) {
    characters += upperCase + number + special;
  } else if (useUpper && useNumber) {
    characters += upperCase + number;
  } else if (useNumber && useSpecial) {
    characters += number + special;
  } else if (useUpper && useSpecial) {
    characters += upperCase + special;
  } else if (useUpper) {
    characters += upperCase;
  } else if (useNumber) {
    characters += number;
  } else if (useSpecial) {
    characters += special;
  } else {
    characters === lowerCase;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordInput = "";
  passwordInput = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordInput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
