// Write your JavaScript code here.
// Display the error messages wherever you think it makes most sense.

// The email field must contain the @ symbol.
// The first password field must contain at least 8 characters.
// The second password field must be equal to the first password field.

let form = document.getElementById("createAccountForm");
let email = document.getElementById("email");
let p1 = document.getElementById("password1");
let p2 = document.getElementById("password2");
let error = document.createElement("span");

form.addEventListener("submit", (e) => {
  checkInputs(e);
});

function checkInputs(e) {
  let errors = [];
  let emailValue = email.value.trim();
  let p1Value = p1.value.trim();
  let p2Value = p2.value.trim();

  if(!validateEmail(emailValue)){
    errors.push("email is not in correct format")
  }

  if(p1Value == ""){
    errors.push("please fill in password")
  }

  if(p2Value == ""){
    errors.push("please fill in password (repeat)")
  }

  if(p1Value.length < 8){
    errors.push("password has to be over 8 characters")
  }

  if (p1Value !== p2Value || p2Value !== p1Value){
    errors.push("passwords do not match")
  }

  if (errors.length > 0) {
    e.preventDefault();
    error.innerText = errors.join(", ");
    form.append(error);
  }
}

function validateEmail(emailValue) {
    return String(emailValue)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };