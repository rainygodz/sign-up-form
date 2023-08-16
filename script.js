const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm_password");
const passwordErrorText = document.querySelector(".password-error");

confirmPasswordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    passwordInput.classList.remove("error");
    confirmPasswordInput.classList.remove("error");
    passwordErrorText.style.display = "none";
  } else {
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
    passwordErrorText.style.display = "block";
  }
})