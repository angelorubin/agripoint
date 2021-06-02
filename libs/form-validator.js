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
    if (field.value.trim() === "") {
      this.setStatus(
        field,
        `${
          (field.previousElementSibling.classList.remove("pay-confirm__label"),
          field.previousElementSibling.classList.add(
            "pay-confirm__label--error"
          ))
        }`
      );
    }
  }

  validateOnEntry() {}

  setStatus(field, message) {
    //  console.log({ field, message });
  }
}
