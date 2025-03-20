document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const email = document.getElementById("emailInput").value;
    const club = document.getElementById("clubInput").value;
    let error = document.getElementById("name");
    let ageError = document.getElementById("Age");
    let emailError = document.getElementById("email");
    let clubError = document.getElementById("club");

    let hasError = false;

    if (!name) {
      error.innerText = "Input your name!";
      error.style.color = "red";
      error.style.fontSize = "14px";
      hasError = true;
    }

    if (!age || age < 18) {
      ageError.innerText = "Please fill field or must be .18!";
      ageError.style.color = "red";
      ageError.style.fontSize = "14px";
      hasError = true;
    }

    if (!email) {
      emailError.innerText = "Please fill field!";
      emailError.style.color = "red";
      emailError.style.fontSize = "14px";
      hasError = true;
    }

    if (!club) {
      clubError.innerText = "Please fill field!";
      clubError.style.color = "red";
      clubError.style.fontSize = "14px";
      hasError = true;
    }

    if (hasError) {
      event.preventDefault();
      return;
    }

    let storage = localStorage.getItem("email");
    let regStatus = document.getElementById("status");
    if (storage === email) {
      regStatus.innerText = "Email already exists! Use  different email.";
      regStatus.style.color = "red";

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("age", age);
      localStorage.setItem("club", club);

      regStatus.innerText = "Registration successful1 please Login...";
      regStatus.style.color = "red";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
      return;
    }
  });
