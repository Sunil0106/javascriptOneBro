//Random Password Generator
function generatePassword(
  length,
  includeLoweCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "@#$%&()^*";
  let allowedChars = "";
  let password = "";

  allowedChars += includeLoweCase ? lowercaseChars : "";
  allowedChars += includeUpperCase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length < 6) {
    return `password length must be atleast 6 chars`;
  }
  if (allowedChars.length === 0) {
    return `At least 2 set of characters needs to be selected`;
  }

  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const passwordLength = 10;
const includeLoweCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLoweCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
);
console.log(password);
