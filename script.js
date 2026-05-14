/* Variáveis para acessar os elementos do jogo */
const mario = document.getElementById('mario');
const pipe= document.querySelector('.pipe');
const scoreEl= document.getElementById('score');
const gameOver= document.getElementById('gameOver');

/* Variáveis para controle de pontos e loops do jogo */
let pontos = 0;
let loop, contarScore;

/* Função para iniciar o jogo, escondendo a tela de início 
e mostrando o game */
function comecar() {
    document.getElementById('telaInicio').style.display = 'none';
    document.getElementById('gameBoard').style.display  = 'block';
    iniciar();
}

/* Função para iniciar o jogo, contando pontos e verificando colisões */
function iniciar() {
    pontos = 0;

    contarScore = setInterval(() => {
        pontos++;
        scoreEl.textContent = 'SCORE ' + pontos;
    }, 100);

    loop = setInterval(() => {
        const canoX = pipe.offsetLeft;
        const marioY= +getComputedStyle(mario).bottom.replace('px', '');

        if (canoX <= 120 && canoX > 0 && marioY < 80) {
            clearInterval(loop);
            clearInterval(contarScore);

            pipe.style.animation = 'none';
            pipe.style.left = canoX + 'px';

            mario.src= './imagens/game-over.png';
            mario.style.width= '75px';

            gameOver.style.display = 'flex';
        }
    }, 10);
}

/* Função para reiniciar o jogo, escondendo o game over 
e resetando os elementos */
function reiniciar() {
    gameOver.style.display = 'none';

    mario.src= './imagens/mario.gif';
    mario.style.width= '150px';
    mario.style.animation= '';
    mario.style.left= '';

    pipe.style.animation='';
    pipe.style.left = '';

    iniciar();
}

/* Evento para pular o Mario, adicionando a classe de jump 
e removendo após 500ms */
document.addEventListener('keydown', () => {
    mario.classList.add('jump');
    setTimeout(() => mario.classList.remove('jump'), 500);
});