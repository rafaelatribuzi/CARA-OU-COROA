// 1. Seleciona elementos do DOM com base no ID - aqui estarão todos os elementos que terão interação no site
const caraButton = document.getElementById('btn-cara');
const coroaButton = document.getElementById('btn-coroa');
const coinImage = document.getElementById('coin-image');
const scoreDisplay = document.getElementById('score-value');
const scoreCard = document.getElementById('score-card');
const scoreText = document.querySelector('.score'); // como aqui é um elemento que não tem no html, não podemos usar o ID, iremos selecionar a classe que vai atender essa situação. 

// INICIANDO A ATIVIDADE

let score = 0; // valor inicial do score precisa estar zerado

// Usar a função de giro de moeda aleatório

function jogarMoeda() {
    return Math.random() < 0.5 ? 'cara' : 'coroa'; // aqui o 0.5 significa 50% de chance de cair um ou outra

}
// Função principal que lida com o clique
function jogar(palpite) {
    const resultado = jogarMoeda(); // que é justamente o random que vai dar uma resultado aleatório


// agora preciso de dois detalhes - atualizar a imagem conforme o resultado - cara ou coroa -  e atualizar o score. 

// Atualiza a imagem de acordo com o resultado
    coinImage.src = `/img/${resultado}.svg`; // aqui eu vou achar a imagem dentro do meu arquivo de acordo com o resultado. 

// Agora preciso fazer as condições do resultado

    if (palpite === resultado) {
        score += 10;
    } else {
        score -= 10;
    }

    scoreDisplay.textContent = score;
    
// Define as cores com base no score, tanto o número como a borda
    if (score >= 0) {
        scoreText.style.color = '#1C7ED6';      // azul
        scoreCard.style.borderColor = '#1C7ED6';
    } else {
        scoreText.style.color = '#DC3545';      // vermelho
        scoreCard.style.borderColor = '#DC3545';
    }

}

// Depois que colocar todas as condições é que colocar o evento de clicar no botão, pq se tivesse colocado no início, o js não saberia "o que fazer"
    caraButton.addEventListener('click', () => jogar('cara'));
    coroaButton.addEventListener('click', () => jogar('coroa'));