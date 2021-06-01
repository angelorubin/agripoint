(function () {
  console.log("script da pagina planos iniciando.. ");
  // window.location.href = "http://127.0.0.1:5500/pagamento.html";

  const cards = document.querySelectorAll(".card");
  cards.forEach((el) =>
    el.addEventListener("click", (event) => {
      const plan = event.currentTarget.id;
      localStorage.setItem("selected-plan", plan);
    })
  );
})();
