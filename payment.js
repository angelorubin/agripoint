(function () {
  const plan = localStorage.getItem("selected-plan");

  if (plan == "monthly") {
    document.querySelector(".pay__plan").innerHTML = "Mensal";
  } else {
    document.querySelector(".pay__plan").innerHTML = "Anual";
  }

  // Form Validation
  const submitBtn = document.querySelector("#pay-btn");

  const validate = (e) => {
    e.preventDefault();

    const changeClass = (
      labelRemoveClass,
      labelAddClass,
      inputRemoveClass,
      inputAddClass,
      messageRemoveClass,
      messageAddClass,
      id
    ) => {
      id.previousElementSibling.classList.remove(`${labelRemoveClass}`);
      id.previousElementSibling.classList.add(`${labelAddClass}`);

      id.classList.remove(`${inputRemoveClass}`);
      id.classList.add(`${inputAddClass}`);

      id.nextElementSibling.classList.remove(`${messageRemoveClass}`);
      id.nextElementSibling.classList.add(`${messageAddClass}`);
    };

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");

    const ids = [name, email, cpf, telefone, cep];

    if (name.value == "") {
      changeClass(
        "pay-confirm__label",
        "pay-confirm__label--error",
        "pay-confirm__input",
        "pay-confirm__input--error",
        "pay-confirm__message--hidden",
        "pay-confirm__message--error",
        name
      );
      name.focus();
      return false;
    }

    if (name.value !== "") {
      changeClass(
        "pay-confirm__label--error",
        "pay-confirm__label",
        "pay-confirm__input--error",
        "pay-confirm__input",
        "pay-confirm__message--error",
        "pay-confirm__message--hidden",
        name
      );
      name.focus();
    }

    /*
      changeClass(
        "pay-confirm__label--error",
        "pay-confirm__label",
        "pay-confirm__input--error",
        "pay-confirm__input--hidden",
        "pay-confirm__message--error",
        "pay-confirm__message--hidden",
        id
      );

      const data = {
        name: name.value,
        email: email.value,
        cpf: cpf.value,
        telefone: telefone.value,
        cep: cep.value,
      };
    
      fetch(url, {
        method: "post",
        body: data,
      })
        .then()
        .catch();
    }
    */
  };

  submitBtn.addEventListener("click", validate);
})();
