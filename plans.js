(function () {
  console.log("script da pagina planos iniciando.. ");
  // window.location.href = "http://127.0.0.1:5500/pagamento.html";

  const cards = document.querySelectorAll(".plans-main__card--default");
  cards.forEach((el) =>
    el.addEventListener("click", (event) => {
      console.log(event.target.id);
    })
  );
})();
