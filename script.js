// script.js
document.addEventListener("DOMContentLoaded", function () {
  const selo = document.getElementById("selo");
  const conteudo = document.getElementById("conteudo");
  const intro = document.querySelector(".intro");

  selo.addEventListener("click", () => {
    intro.classList.add("fade-out");
    document.getElementById('musica').play();

    setTimeout(() => {
      intro.style.display = "none";
      conteudo.classList.remove("oculto");
      document.body.classList.add("fundo-espelho");
    }, 1000); // tempo da animação de fade-out
  });
});
