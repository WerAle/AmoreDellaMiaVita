window.addEventListener('DOMContentLoaded', () => {
  const faixa = document.querySelector('.faixa');
  const iniciais = document.getElementById('gatilho');
  const intro = document.getElementById('intro');
  const conteudo = document.getElementById('conteudo');
  const musica = document.getElementById('musica');

  iniciais.addEventListener('click', () => {
    faixa.classList.add('fade-out');
    iniciais.classList.add('fade-out');

    setTimeout(() => {
      intro.style.display = 'none';
      conteudo.classList.remove('oculto');
      document.body.classList.add('fundo-espelho');
    }, 1000);

    if (musica) {
      musica.play().catch((error) => {
        console.log('Erro ao reproduzir a música:', error);
      });
    }
  });
});
