const registerBtn = document.getElementById("register-btn");
const signUpBtn = document.getElementById("signup");
const form = document.querySelector('form');
//Affichage en alert
signUpBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  alert('Name: ' + name + '\nEmail: ' + email + '\nPassword: ' + password);
});

registerBtn.addEventListener("click", function(event) {
    registerBtn.style.visibility = "hidden";
  form.style.visibility = "visible";
});
