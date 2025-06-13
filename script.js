window.addEventListener('DOMContentLoaded', () => {
  const faixa = document.querySelector('.faixa');
  const iniciais = document.getElementById('gatilho');
  const intro = document.getElementById('intro');
  const conteudo = document.getElementById('conteudo');
  const musica = document.getElementById('musica');

  if (!iniciais) {
    console.error("Elemento com id 'gatilho' não encontrado!");
    return;
  }

  iniciais.addEventListener('click', () => {
    faixa.classList.add('fade-out');
    iniciais.classList.add('fade-out');

    setTimeout(() => {
      intro.style.display = 'none';
      conteudo.classList.remove('oculto');
      document.body.classList.add('fundo-espelho');
    }, 1000);

    function atualizarRelogioAmor() {
    const inicio = new Date("2024-05-03T19:00:00");
    const agora = new Date();
    let diff = agora - inicio;

    const segundos = Math.floor(diff / 1000) % 60;
    const minutos = Math.floor(diff / 1000 / 60) % 60;
    const horas = Math.floor(diff / 1000 / 60 / 60) % 24;
    const diasTotal = Math.floor(diff / 1000 / 60 / 60 / 24);

    // Anos e meses aproximados (melhor para visual)
    const anos = Math.floor(diasTotal / 365);
    const meses = Math.floor((diasTotal % 365) / 30);
    const dias = diasTotal - (anos * 365) - (meses * 30);

    document.getElementById("contador-amor").textContent =
      `${anos} ano${anos !== 1 ? 's' : ''}, ` +
      `${meses} mes${meses !== 1 ? 'es' : ''}, ` +
      `${dias} dia${dias !== 1 ? 's' : ''}, ` +
      `${horas} hora${horas !== 1 ? 's' : ''}, ` +
      `${minutos} minuto${minutos !== 1 ? 's' : ''} e ` +
      `${segundos} segundo${segundos !== 1 ? 's' : ''}`;
  }

  setInterval(atualizarRelogioAmor, 1000);
  atualizarRelogioAmor();

    if (musica) {
      musica.play().catch((error) => {
        console.log('Erro ao reproduzir a música:', error);
      });
    }
  });
});
