(function () {
  const plan = localStorage.getItem("selected-plan");

  if (plan == "monthly") {
    document.querySelector(".pay__plan").innerHTML = "Mensal";
  } else {
    document.querySelector(".pay__plan").innerHTML = "Anual";
  }

  document.querySelector(".pay-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const getValueById = (id) => {
      const value = document.querySelector(`#${id}`).value;
      return value;
    };

    const name = getValueById("name");
    const email = getValueById("email");

    const data = [{ name, email }];

    /*
    fetch("")
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
    */
  });
})();
