
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCaseChars = "abcdfghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!@#$%^&*()_+-=?/"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if(passwordLength <=0){
        return "(password length must be at least 1)";
    }
    if(allowedChars.length === 0){
        return "(at least one set of characters must be selected)";
    }

    for(let i=0; i<passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Your password is: ${password}`);