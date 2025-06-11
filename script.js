window.addEventListener('DOMContentLoaded', () => {
  const selo = document.getElementById('selo');
  const intro = document.querySelector('.intro');
  const musica = document.getElementById('musica');
  const conteudo = document.getElementById('conteudo');

  selo.addEventListener('click', () => {
    selo.classList.add('fade-out');

    setTimeout(() => {
      intro.classList.add('oculto');
      conteudo.classList.remove('oculto');
      document.body.classList.add('fundo-espelho');

      if (musica) {
        musica.play().catch(error => {
          console.warn('Erro ao reproduzir a música:', error);
        });
      }
    }, 1000); // Espera o selo sumir antes de mostrar o conteúdo
  });
});
