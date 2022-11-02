let submitButton = document.getElementById("bsubmit");
let nameField = document.getElementById("name");
nameField.focus();

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
};

/* e.preventDefault(); */
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let allChecks = false;
  let emailOk = false;

  emailOk = Boolean(validateEmail(email));
  /* console.log(`emailOk : ${emailOk}`);
  console.log(`emailField : ${email}`);
  console.log(`nameField : ${name}`);
  console.log(`messageField : ${message}`); */
  if ((name !== "") & emailOk & (message !== "")) allChecks = true;
  if (allChecks) {
    alert("Message bien reçu!");
    // document.location = "/HTML/step2.html";
  } else alert("Veuillez remplir correctement ce formulaire");
});
