const passwordBox = document.getElementById("password");
const pwLen = 12;

const myButton = document.getElementById("myBtn");
const copyIcon = document.getElementById("copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
  let password ="";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
  password += number[Math.floor(Math.random()* number.length)];
  password += symbol[Math.floor(Math.random()* symbol.length)];

  while(pwLen > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}


myButton.addEventListener("click", () => { 
  createPassword();
});

function copyText(){
  const textToCopy = passwordBox.value;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Password Copied Successfully");
  });
}

copyIcon.addEventListener("click", copyText);