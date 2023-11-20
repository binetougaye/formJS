// Variables
let formContainer = document.getElementById("container");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let text = document.getElementById("text");
// Event Listeners
formContainer.addEventListener("submit", (e) => {
  if (password.value.length < 8) {
    password.classList.add("error");
    text.innerHTML = "Votre mot de passe doit contenir au moins 8 caractères";
    text.style.color = "red";
    e.preventDefault();
  } else {
    password.classList.add("success");
    text.innerHTML = "Mot de passe valide";
    text.style.color = "green";
    e.preventDefault();
  }
  // Confirmation mot de passe
  if (password2.value !== password.value) {
    password2.classList.add("error");
    text.innerHTML = "Le mot de passe ne correspond pas";
    text.style.color = "red";
    e.preventDefault();
  } else {
    password2.classList.add("success");
    text.innerHTML = "Mot de passe valide";
    text.style.color = "green";
    window.location.href = "form.html";
  }
});
