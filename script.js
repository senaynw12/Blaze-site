const btnAcoesUsuario = document.querySelector('.acoes-usuario button');
const acoesUsuario = document.querySelector('.acoes-usuario');

btnAcoesUsuario.addEventListener('click', () => {
  acoesUsuario.classList.toggle('ativo');
});

const linksNavegacao = document.querySelectorAll('nav ul li a');

linksNavegacao.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const idAlvo = e.target.getAttribute('href');
    const elementoAlvo = document.querySelector(idAlvo);
    elementoAlvo.scrollIntoView({ behavior: 'smooth' });
  });
});