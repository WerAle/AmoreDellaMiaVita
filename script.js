window.addEventListener('DOMContentLoaded', () => {
  const selo = document.getElementById('selo');
  const intro = document.querySelector('.intro');
  const musica = document.getElementById('musica');
  const conteudo = document.querySelector('main'); // Definindo conteudo corretamente

  selo.addEventListener('click', () => {
    // Inicia animação
    selo.classList.add('fade-out');

    // Toca música
    if (musica) {
      musica.play().catch(error => {
        console.log('Erro ao reproduzir a música:', error);
      });
    }

    // Após o tempo da animação
    setTimeout(() => {
      intro.style.display = 'none';
      conteudo.classList.remove('oculto');
      document.body.classList.add('fundo-espelho');
    }, 1000); // tempo em ms correspondente à transição
  });
});
