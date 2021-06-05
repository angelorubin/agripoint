/**
 * Classe para validação de formulários
 * Autor - Angelo Rubin
 * Criado em - 01/06/2021
 * Contato - angelorubin@gmail.com
 * Github - https://github.com/angelorubin/agripoint/blob/master/libs/form-validator.js
 */
class FormValidator {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
  }

  initialize() {
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    const self = this;
    this.form.addEventListener("submit", function (event) {
      event.preventDefault();
      self.fields.map((field) => {
        const input = document.querySelector(`#${field}`);
        self.validateFields(input);
      });
    });
  }

  validateFields(field) {
    console.log(field.id);
    if (field.value.trim() === "") {
      field.previousElementSibling.classList.remove("pay-confirm__label");
      field.previousElementSibling.classList.add("pay-confirm__label--error");
      field.classList.remove("pay__input");
      field.classList.add("pay__input--error");
      field.nextElementSibling.classList.remove("pay-confirm__message--hidden");
      field.nextElementSibling.classList.add("pay-confirm__message--error");
      field.focus();
    } else {
      field.previousElementSibling.classList.remove(
        "pay-confirm__label--error"
      );
      field.previousElementSibling.classList.add("pay-confirm__label");

      field.classList.remove("pay__input--error");
      field.classList.add("pay__input");

      field.nextElementSibling.classList.remove("pay-confirm__message--error");
      field.nextElementSibling.classList.add("pay-confirm__message--hidden");

      field.focus();
    }
  }

  validateOnEntry() {}

  setStatus() {}
}
