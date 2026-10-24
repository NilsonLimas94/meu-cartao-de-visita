// 1. Selecionamos o cartão (A tag main)
const cartao = document.querySelector('main');

// 2. Quando mouse se move por cima do cartão
cartao.addEventListener('mousemove', (evento) => {
    // Pega o tamanho e a posição do cartão na tela
    const retangulo = cartao.getBoundingClientRect();

    // Calcula a distância do mouse em relação ao centro do cartão
    const centroX = evento.clientX - retangulo.left - retangulo.width / 2;

    const centroY = evento.clientY - retangulo.top - retangulo.height / 2;

    // Divide por um número para suavizar o ângulo (Quanto maior, mais sutil a inclinação)
    const rotacaoX = -centroY / 12;
    const rotacaoY = centroX / 12;

    //Aplica a rotação 3D no cartão
    cartao.style.transform = `rotateX(${rotacaoX}deg)
    rotateY(${rotacaoY}deg) scale(1.02)`;
});

// 3. Quando o mouse sai do cartão (Cartão volta a a posição default, ou seja stático)
cartao.addEventListener('mouseleave', () => {
    cartao.style.transition = 'transform 0.5s ease';
    cartao.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});

// 4. ao entrar novamente, deixar o movimento rápido de novo
cartao.addEventListener('mouseenter', () => {
    cartao.style.transition = 'transform 0.1s ease-out';
});