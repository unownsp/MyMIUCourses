"use strict";

// const loginForm = document.getElementById("loginForm");
let submitButton = document.getElementById("submit");
submitButton.onclick = ()=>{
  const txtEmail = document.getElementById("email").value;
    
    const txtPassword = document.getElementById("password").value;
    const txtWebsite = document.getElementById("website").value;
    const chkCheckBox = document.getElementById("checkbox").value;
    console.log("Email: " +txtEmail);
    console.log("Password: " +txtPassword);
    console.log("Website: " +txtWebsite);
    console.log("Checkbox checked: " +chkCheckBox);
}
// loginForm.addEventListener("submit", printFormData);

// function printFormData(){
    

// }
