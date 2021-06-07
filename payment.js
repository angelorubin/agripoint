(function () {
  const selectedPlan = localStorage.getItem("selected-plan");
  const payPlan = document.querySelector(".pay__plan");

  selectedPlan == "monthly"
    ? (payPlan.innerHTML = "Mensal")
    : (payPlan.innerHTML = "Anual");

  // Seleciona o formulário a ser validado
  const form = document.querySelector("#pay-form");

  // Defini as restrições de validação de cada campo do formulário
  // https://validatejs.org/#constraints
  const constraints = {
    nome: {
      // You need to pick a name too
      presence: true,
      // And it must be between 3 and 20 characters long
      length: {
        minimum: 3,
        maximum: 20,
        message: "deve possuir no mínimo 3 e no máximo 20 caracteres",
      },
    },
    email: {
      // Email is required
      presence: true,
      // and must be an email
      email: true,
    },
    cpf: {
      // Email is required
      presence: true,
    },
  };

  // Adiciona evento submit ao formulário
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    handleFormSubmit(form);
  });

  // Aplica as regras de validação no submit do formulário
  const handleFormSubmit = (form) => {
    // validate the form against the constraints
    let errors = validate(form, constraints);

    // then we update the form to reflect the results
    showErrors(form, errors || {});

    if (!errors) {
      showSuccess();
    }
  };

  // Mostra os erros capturados
  const showErrors = (form, errors) => {
    // We loop through all the inputs and show the errors for that input
    _.each(
      form.querySelectorAll("input[name], select[name]"),
      function (input) {
        /**
         * Since the errors can be null if no errors
         * were found we need to handle that
         */
        showErrorsForInput(input, errors && errors[input.name]);
      }
    );
  };

  // Shows the errors for a specific input
  const showErrorsForInput = (input, errors) => {
    // This is the root of the input
    let formGroup = closestParent(input.parentNode, "form-group");

    // Find where the error messages will be insert into
    let messages = formGroup.querySelector(".messages");

    // First we remove any old messages and resets the classes
    resetFormGroup(formGroup);

    // If we have errors
    if (errors) {
      // we first mark the group has having errors
      formGroup.classList.add("has-errors");

      // then we append all the errors
      _.each(errors, function (error) {
        addError(messages, error);
      });
    } else {
      // otherwise we simply mark it as success
      formGroup.classList.add("has-success");
    }
  };

  // Recusively finds the closest parent that has the specified class
  const closestParent = (child, className) => {
    if (!child || child == document) {
      return null;
    }

    if (child.classList.contains(className)) {
      return child;
    } else {
      return closestParent(child.parentNode, className);
    }
  };

  const resetFormGroup = (formGroup) => {
    // Remove the success and error classes
    formGroup.classList.remove("has-error");
    formGroup.classList.remove("has-success");
    // and remove any old messages
    _.each(
      formGroup.querySelectorAll(".help-block, .message--error"),
      function (el) {
        el.parentNode.removeChild(el);
      }
    );
  };

  // Adds the specified error with the following markup
  // <p class="help-block error">[message]</p>
  const addError = (messages, error) => {
    let block = document.createElement("p");
    block.classList.add("help-block");
    block.classList.add("message--error");
    block.innerText = error;
    messages.appendChild(block);
  };

  const showSuccess = () => {
    // We made it \:D/
    alert("Success!");
  };

  const inputs = document.querySelectorAll("input, textarea, select");
})();

/**
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
  */
