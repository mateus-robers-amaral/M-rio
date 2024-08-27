const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// adicionar e remover a classe jump com a animação do pulo
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    // variáveis que pegam a posição do tubo e do mário
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // mário para quando tocar no tubo
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;

        // mário fica parado quando morre
        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`;

        // trocar a imagem do mário quando morre
        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);