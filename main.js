// Definindo o personagem Marlon com suas características iniciais
let marlon = {
    nome: 'Marlon',
    vida: 100,        // Saúde de Marlon
    forcaPolitica: 50, // Capacidade de convencer eleitores
    recursos: 5,      // Recursos políticos (ex: panfletos, alianças, etc.)
};

// Função para exibir o status atual de Marlon
function statusMarlon() {
    console.log(`\nStatus de Marlon:`);
    console.log(`Vida: ${marlon.vida}`);
    console.log(`Força Política: ${marlon.forcaPolitica}`);
    console.log(`Recursos: ${marlon.recursos}`);
}

// Função para verificar se o jogador perdeu
function verificarDerrota() {
    if (marlon.vida <= 0 || marlon.forcaPolitica <= 0 || marlon.recursos <= 0) {
        console.log('Marlon foi derrotado politicamente! Game Over.');
        return true;
    }
    return false;
}

// Função para iniciar o jogo
function start() {
    console.log('Bem-vindo à campanha de Marlon em Fruta de Leite!');
    console.log('Ajude Marlon a vencer a candidata Eliene e conquistar a eleição.');
    statusMarlon();
    
    // Iniciando a primeira rodada
    martinopolis();
}

// Função para fazer escolhas e processar a resposta
function escolha(rodada, opcoes) {
    let promptMsg = `Escolha uma ação para ${rodada}:\n`;
    for (let i = 0; i < opcoes.length; i++) {
        promptMsg += `${i + 1}. ${opcoes[i]}\n`;
    }
    let escolhaNum = parseInt(prompt(promptMsg));
    return escolhaNum;
}

// Rodada 1: Reunião em Martinopólis
function martinopolis() {
    console.log('\nRodada 1: Marlon está em uma reunião em Martinopólis.');
    console.log('Eliene espalhou fake news sobre Marlon!');

    let opcao = escolha('Martinopólis', ['Enfrentar as fake news', 'Ignorar as fake news']);
    
    if (opcao === 1) {
        console.log('Você decidiu enfrentar as fake news, mas perdeu tempo e recursos.');
        marlon.forcaPolitica -= 15;
        marlon.recursos -= 2;
    } else if (opcao === 2) {
        console.log('Você decidiu ignorar as fake news, mas sua imagem foi prejudicada.');
        marlon.forcaPolitica -= 20;
        marlon.vida -= 10;
    } else {
        console.log('Escolha inválida! Você não fez nada e perdeu recursos.');
        marlon.recursos -= 3;
    }

    statusMarlon();
    
    if (!verificarDerrota()) {
        caicara();  // Próxima rodada
    }
}

// Rodada 2: Reunião em Caiçara
function caicara() {
    console.log('\nRodada 2: Marlon está em uma reunião em Caiçara.');
    console.log('Você tem a oportunidade de fazer uma grande aliança.');

    let opcao = escolha('Caiçara', ['Fazer uma aliança', 'Seguir sozinho']);
    
    if (opcao === 1) {
        console.log('Você fez uma aliança poderosa, mas há riscos.');
        let chanceDeFalha = Math.random() > 0.7; // 30% de chance de falhar
        if (chanceDeFalha) {
            console.log('A aliança falhou! Você perdeu muitos recursos.');
            marlon.forcaPolitica -= 20;
            marlon.recursos -= 3;
        } else {
            console.log('A aliança foi bem-sucedida! Você ganhou força política.');
            marlon.forcaPolitica += 15;
            marlon.recursos += 1;
        }
    } else if (opcao === 2) {
        console.log('Você decidiu seguir sem alianças, mas perdeu força.');
        marlon.forcaPolitica -= 10;
        marlon.vida -= 10;
    } else {
        console.log('Escolha inválida! Você não fez nada e perdeu apoio.');
        marlon.forcaPolitica -= 15;
    }

    statusMarlon();
    
    if (!verificarDerrota()) {
        mumbuca();  // Próxima rodada
    }
}

// Rodada 3: Reunião em Mumbuca
function mumbuca() {
    console.log('\nRodada 3: Marlon está em Mumbuca.');
    console.log('Eliene tenta sabotar sua reunião!');

    let opcao = escolha('Mumbuca', ['Se defender da sabotagem', 'Contra-atacar Eliene']);
    
    if (opcao === 1) {
        console.log('Você se defendeu, mas perdeu recursos.');
        marlon.recursos -= 2;
        if (marlon.recursos < 0) marlon.recursos = 0;
    } else if (opcao === 2) {
        console.log('Você contra-atacou, mas perdeu força e vida.');
        marlon.forcaPolitica -= 15;
        marlon.vida -= 15;
    } else {
        console.log('Escolha inválida! Você perdeu tempo e recursos.');
        marlon.recursos -= 2;
    }

    statusMarlon();
    
    if (!verificarDerrota()) {
        santaRita();  // Próxima rodada
    }
}

// Rodada 4: Reunião decisiva em Santa Rita
function santaRita() {
    console.log('\nRodada 4: Reunião decisiva em Santa Rita.');
    console.log('Você pode fazer um grande comício ou uma reunião privada.');

    let opcao = escolha('Santa Rita', ['Fazer um comício', 'Fazer uma reunião privada']);
    
    if (opcao === 1) {
        console.log('O comício foi um sucesso, mas custou muitos recursos.');
        marlon.forcaPolitica += 20;
        marlon.recursos -= 4;
        if (marlon.recursos < 0) marlon.recursos = 0;
    } else if (opcao === 2) {
        console.log('A reunião privada teve pouco impacto.');
        marlon.forcaPolitica += 5;
        marlon.vida += 5;
    } else {
        console.log('Escolha inválida! Você perdeu uma grande oportunidade.');
        marlon.forcaPolitica -= 10;
    }

    statusMarlon();
    
    if (!verificarDerrota()) {
        if (marlon.vida > 20 && marlon.forcaPolitica > 30 && marlon.recursos > 2) {
            console.log('\nParabéns! Marlon conseguiu vencer a política em Fruta de Leite!');
        } else {
            console.log('Marlon não conseguiu acumular apoio suficiente. Game Over.');
        }
    }
}
