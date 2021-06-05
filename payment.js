(function () {
  const selectedPlan = localStorage.getItem("selected-plan");
  const payPlan = document.querySelector(".pay__plan");

  selectedPlan == "monthly"
    ? (payPlan.innerHTML = "Mensal")
    : (payPlan.innerHTML = "Anual");

  // Form Validation
  const form = document.querySelector(".pay-form");
  const fields = [
    "name",
    "email",
    "cpf",
    "cep",
    "phone",
    "number",
    "complement",
    "address",
  ];
  const validator = new FormValidator(form, fields);
  validator.initialize();
})();
