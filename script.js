const personagem = document.querySelector('.personagem');
const pipe = document.querySelector('.pipe');

const jump = () => {
    personagem.classList.add('jump');

    setTimeout(() => {
    personagem.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');

    console.log(personagem);

    if (pipePosition <= 120 && pipePosition > 0  && personagemPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        personagem.style.animation = 'none';
        personagem.style.left = `${personagemPosition}px`;

        personagem.src = './imagens/game-over.png';
        personagem.style.width = '75px';
        personagem.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);    