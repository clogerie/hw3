// access the button in index.html by id
var button = document.getElementById("generate");

// variables of uppercase, lowercase, numeric, & special characters
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specChar = "!@#$%^&*()-_+=";

// function to generate the password
function generatePwd() {
    // variable for the password
    var passWord = "";

    // variable for characters that will go into the password
    var characters = "";

    // propt the user for the length of the password
    var pwdLength = prompt("How long would you like your password to be? Choose a number between 8 and 128 characters.");

    // variable to access the h3 in index.html with class 'password-display'
    var display = document.getElementById("password-display");


    // check if pwdLength is between 8 - 128 long
    if (pwdLength >= 8 && pwdLength <= 128) {
        // ask the user if they want uppercase letters
        var wantUpper = confirm("Do you want an uppercase character?")
        // ask the user if they want lowercase letters
        var wantLower = confirm("Do you want an lowercase character?")
        // ask the user if they want numbers
        var wantNumb = confirm("Do you want a number?")
        // ask the user if they want special characters
        var wantSpec = confirm("Do you want special characters?")
        // if yes on want upper
        if (wantUpper) {
            // add uppercase letters to characters 
            characters += upperCase
        }
        // if (yes on want lower)
        if (wantLower) {
            // add lowercase letters to characters
            characters += lowercase
        }
        // if yes on want numbers
        if (wantNumb) {
            // add numbers to characters
            characters += numeric
        }
        // if yes on want special characters
        if (wantSpec) {
            // add special characters to characters
            characters += specChar
        }
        //  get a random character inside the character variable
        // add it to password variable
        // repeat until how many times pwdLength is.
        for (let i = 0; i < pwdLength; i++) {
            passWord += characters[Math.floor(Math.random() * characters.length)]
        }
        console.log(passWord)
        display.innerText = passWord

        // return the password
        return passWord;

    } else {
        // let the user know to try again
        alert("Start over")
    }
};
// listen for a click in the button
button.addEventListener("click", generatePwd)
