

const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');

let index = 0;
const size_tela = slides.offsetWidth;
const size_img = imagens[0].offsetWidth;
const frame_screen = size_tela / size_img;


console.log('tamain da foto ' + frame_screen);

function mostrarSlide() {
  slides.style.transform = `translateX(${-index * 50}%)`;
}

btnDir.addEventListener('click', () => {
  const limite = 10 / frame_screen ;
  if (index < limite){
    index = (index + 1) % imagens.length;
    mostrarSlide();
    console.log(index , 10 / frame_screen);
  }
});

btnEsq.addEventListener('click', () => {
  if (index !== 0){
      index = (index - 1 + imagens.length) % imagens.length;
      console.log(index);
      mostrarSlide();
  }
});


/*
setInterval(() => {
  index = (index + 1) % imagens.length;
  mostrarSlide();
}, 3000);
*/

const area = document.querySelector('.custom-select');
const select = document.querySelector('.custom-select select');

area.addEventListener('click', () => {
  select.focus();  // foca no select
  select.click();  // tenta abrir o dropdown
  console.log("abra");
});