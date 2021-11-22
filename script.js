// Assignment Code
var generateBtn = document.querySelector("#generate");

//initial function
function writePassword() {
  //window prompt asking user how many characters they desire
  var characters = window.prompt("How many characters would you like the password to have?");
  // below it's making sure the password is kept between 8 to 128 characters
  if (characters < 8) {
    window.alert("You need to have at least 8 characters. Please try again.");
    return writePassword();

  } else if (characters > 128) {
      window.alert("You cannot have more than 128 characters. Please try again.");
    return writePassword();

  } else {
    // essentially, "what would you like in your password?"
      var lowercase = window.confirm("Would you like to include lowercase letters?");
      var uppercase = window.confirm("Would you like to include uppercase letters?");
      var numbers = window.confirm("Would you like to include numbers?");
      var special = window.confirm("Would you like to include special characters?");

  }
  // making sure the user selects at least one character type
  if (!lowercase && !uppercase && !numbers && !special) {
    window.alert("You need to select at least one type of character. Please try again!");
    writePassword();
  }

  // below will be different types of arrays depending on what combination of characters the user decides they would like for their password

  if (lowercase && uppercase && numbers && special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];

    var password = "";
    password.length = characters;
  
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (!lowercase && uppercase && numbers && special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (lowercase && !uppercase && numbers && special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (lowercase && uppercase && !numbers && special) {
    var passwordCombo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (lowercase && uppercase && numbers && !special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (lowercase && uppercase && !numbers && !special) {
    var passwordCombo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (lowercase && !uppercase && numbers && !special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

    } else if (lowercase && !uppercase && !numbers && special) {
    var passwordCombo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (!lowercase && uppercase && numbers && !special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (!lowercase && uppercase && !numbers && special) {
    var passwordCombo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (!lowercase && !uppercase && numbers && special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0, "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~", "`"];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (!lowercase && !uppercase && !numbers && special) {
    var passwordCombo = ("~`!@#$%^&*_-+=|\:;'<,>.?/");
  
    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordpasswordComboContent[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (!lowercase && !uppercase && numbers && !special) {
    var passwordCombo = [1,2,3,4,5,6,7,8,9,0];

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }
    
    window.alert(password);

  } else if (!lowercase && uppercase && !numbers && !special) {
    var passwordCombo = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }

    window.alert(password);

  } else if (lowercase && !uppercase && !numbers && !special) {
    var passwordCombo = ("abcdefghijklmnopqrstuvwxyz");
  
    var password = "";
    password.length = characters;
    
    for (var i = 0; i < characters; i++) {
      password += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];

    }
    
    window.alert(password);
    
  }
    
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);