window.addEventListener('DOMContentLoaded', () => {
  const selo = document.getElementById('selo');
  const intro = document.querySelector('.intro');
  const conteudo = document.getElementById('conteudo');
  const musica = document.getElementById('musica');

  selo.addEventListener('click', () => {
    selo.classList.add('fade-out');

    if (musica) {
      musica.play().catch(error => {
        console.log('Erro ao reproduzir a música:', error);
      });
    }

    setTimeout(() => {
      intro.style.display = 'none';
      conteudo.classList.remove('oculto');
      document.body.classList.add('fundo-espelho');
    }, 1000); // tempo da animação
  });
});
