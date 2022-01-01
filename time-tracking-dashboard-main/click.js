const botao = document.querySelector('#daily');
//  console.log(botao);

function mostrar() {
  const texto = document.querySelector('.daily1');
  console.log(texto);
  texto.classList.toggle('ativo');
}

botao.addEventListener('click', mostrar);
