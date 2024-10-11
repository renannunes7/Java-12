// Definindo o personagem Marlon com suas características iniciais
let marlon = {
    nome: 'Marlon',
    vida: 100,        // Saúde de Marlon
    forcaPolitica: 50, // Capacidade de convencer eleitores
    recursos: 10,      // Recursos políticos (ex: panfletos, alianças, etc.)
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
    if (marlon.vida <= 0) {
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
    
    // Iniciando a escolha de local
    escolherLocal();
}

// Função para escolher o local da reunião
function escolherLocal() {
    console.log('Onde você gostaria de fazer a reunião?');
    const locais = ['Martinopólis', 'Caiçara', 'Mumbuca', 'Santa Rita'];
    
    let promptMsg = `Escolha um local:\n`;
    locais.forEach((local, index) => {
        promptMsg += `${index + 1}. ${local}\n`;
    });
    
    let escolhaLocal = parseInt(prompt(promptMsg));
    
    if (escolhaLocal >= 1 && escolhaLocal <= locais.length) {
        console.log(`Você escolheu ${locais[escolhaLocal - 1]}!`);
        if (escolhaLocal === 1) {
            martinopolis();
        } else if (escolhaLocal === 2) {
            caicara();
        } else if (escolhaLocal === 3) {
            mumbuca();
        } else {
            santaRita();
        }
    } else {
        console.log('Escolha inválida! Tente novamente.');
        escolherLocal(); // Reinicia a escolha se for inválido
    }
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
    console.log('Eliene espalhou fake news sobre Marlon! O que você fará?');

    let opcao = escolha('Martinopólis', [
        'Enfrentar as fake news diretamente.',
        'Contratar um especialista em comunicação.',
        'Ignorar as fake news.',
        'Convidar um influenciador local para apoiar sua campanha.'
    ]);
    
    if (opcao === 1) {
        console.log('Você decidiu enfrentar as fake news com coragem, mas perdeu um pouco de sua força política.');
        marlon.forcaPolitica -= 5; // Redução
    } else if (opcao === 2) {
        console.log('Você contratou um especialista que ajudou a neutralizar as fake news, mas custou alguns recursos.');
        marlon.forcaPolitica += 10; // Ganha força
        marlon.recursos -= 3; // Perde recursos
    } else if (opcao === 3) {
        console.log('Ignorar as fake news foi um erro. Sua imagem sofreu um golpe, mas você preservou seus recursos.');
        marlon.forcaPolitica -= 10; // Perda maior
    } else if (opcao === 4) {
        console.log('O influenciador local se juntou à sua campanha, aumentando sua credibilidade.');
        marlon.forcaPolitica += 15; // Ganha força
        marlon.recursos -= 1; // Perde um recurso
    } else {
        console.log('Escolha inválida! Você não fez nada e perdeu recursos.');
        marlon.recursos -= 2; // Penalidade por não agir
    }

    statusMarlon();
    
    if (!verificarDerrota()) {
        caicara();  // Próxima rodada
    }
}

// Rodada 2: Reunião em Caiçara
function caicara() {
    console.log('\nRodada 2: Marlon está em uma reunião em Caiçara.');
    console.log('Você tem a oportunidade de fazer uma grande aliança ou uma apresentação para os moradores.');

    let opcao = escolha('Caiçara', [
        'Fazer uma aliança com líderes locais.',
        'Apresentar suas propostas em um evento.',
        'Revelar um escândalo sobre Eliene.',
        'Distribuir panfletos informativos.'
    ]);
    
    if (opcao === 1) {
        console.log('Você fez uma aliança poderosa com os líderes locais, aumentando sua força política!');
        marlon.forcaPolitica += 15; // Ganha força
        marlon.recursos -= 2; // Perde recursos
    } else if (opcao === 2) {
        console.log('Sua apresentação foi bem recebida, aumentando sua força política entre os moradores.');
        marlon.forcaPolitica += 10; // Ganha força
    } else if (opcao === 3) {
        console.log('Revelar o escândalo foi arriscado, mas funcionou e aumentou seu apoio!');
        marlon.forcaPolitica += 20; // Ganha força
        marlon.recursos -= 4; // Perde recursos por custo da revelação
    } else if (opcao === 4) {
        console.log('Os panfletos informativos ajudaram a aumentar sua visibilidade, mas custaram recursos.');
        marlon.forcaPolitica += 5; // Ganha força
        marlon.recursos -= 2; // Perde recursos
    } else {
        console.log('Escolha inválida! Você não fez nada e perdeu apoio.');
        marlon.forcaPolitica -= 5; // Penalidade por não agir
    }

    statusMarlon();
    
    if (!verificarDerrota()) {
        mumbuca();  // Próxima rodada
    }
}

// Rodada 3: Reunião em Mumbuca
function mumbuca() {
    console.log('\nRodada 3: Marlon está em Mumbuca.');
    console.log('A candidata Eliene tenta desestabilizar sua reunião com críticas. O que você fará?');

    let opcao = escolha('Mumbuca', [
        'Se defender das críticas.',
        'Ignorar as críticas e continuar.',
        'Revelar um escândalo sobre Eliene.',
        'Promover um evento comunitário.'
    ]);
    
    if (opcao === 1) {
        console.log('Você se defendeu das críticas e ganhou respeito, mas perdeu alguns recursos.');
        marlon.forcaPolitica += 5; // Ganha força
        marlon.recursos -= 3; // Perda de recursos
    } else if (opcao === 2) {
        console.log('Ignorar as críticas foi arriscado, mas você manteve seus recursos e se focou na campanha.');
        marlon.forcaPolitica -= 5; // Perde força
    } else if (opcao === 3) {
        console.log('Revelar o escândalo foi eficaz! Sua força política aumentou, mas é um movimento arriscado.');
        marlon.forcaPolitica += 15; // Ganha força
        marlon.recursos -= 4; // Perde recursos
    } else if (opcao === 4) {
        console.log('O evento comunitário foi um sucesso! Você conquistou a confiança dos moradores.');
        marlon.forcaPolitica += 20; // Ganha força
        marlon.vida += 5; // Recupera um pouco de vida
    } else {
        console.log('Escolha inválida! Você perdeu tempo e apoio.');
        marlon.forcaPolitica -= 5; // Penalidade por não agir
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

    let opcao = escolha('Santa Rita', [
        'Fazer um comício aberto.',
        'Fazer uma reunião privada com os influenciadores.',
        'Revelar um escândalo sobre Eliene novamente.',
        'Promover um debate público.'
    ]);
    
    if (opcao === 1) {
        console.log('O comício foi um sucesso, aumentando sua força política!');
        marlon.forcaPolitica += 25; // Ganha força
        marlon.recursos -= 5; // Perde recursos
    } else if (opcao === 2) {
        console.log('A reunião privada ajudou a garantir o apoio dos influenciadores!');
        marlon.forcaPolitica += 20; // Ganha força
        marlon.recursos -= 2; // Perde recursos
    } else if (opcao === 3) {
        console.log('Revelar o escândalo novamente foi arriscado, mas funcionou!');
        marlon.forcaPolitica += 30; // Ganha força
        marlon.recursos -= 6; // Perde recursos
    } else if (opcao === 4) {
        console.log('O debate público foi emocionante e aumentou sua credibilidade!');
        marlon.forcaPolitica += 15; // Ganha força
    } else {
        console.log('Escolha inválida! Você perdeu uma oportunidade e recursos.');
        marlon.recursos -= 3; // Penalidade por não agir
    }

    statusMarlon();
    
    if (!verificarDerrota()) {
        console.log('A campanha de Marlon chegou ao fim! Sua força política é:', marlon.forcaPolitica);
        if (marlon.forcaPolitica > 80) {
            console.log('Marlon venceu as eleições! Parabéns!');
        } else if (marlon.forcaPolitica > 50) {
            console.log('Marlon teve um bom desempenho, mas não venceu.');
        } else {
            console.log('Marlon não conseguiu vencer a eleição. Continue lutando na próxima!');
        }
    }
}
