(function () {
  const plan = localStorage.getItem("selected-plan");

  if (plan == "monthly") {
    document.querySelector(".pay__plan").innerHTML = "Mensal";
  } else {
    document.querySelector(".pay__plan").innerHTML = "Anual";
  }

  // Form Validation
  const form = document.querySelector(".pay-form");
  const fields = ["name", "email"];
  const validator = new FormValidator(form, fields);
  validator.initialize();
})();
