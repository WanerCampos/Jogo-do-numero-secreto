let listasDeNumerosSorteados = [];
let NumeroMaximo = 10;
let numeroSecreto = geradorDeNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function fraseInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');  
}
fraseInicial();

function verificarChute() { 
    let chute = document.querySelector('input').value;
    console.log(chute ==numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você encontrou o numero secreto ${tentativas} em ${palavraTentativas}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1','O numero secreto é menor!');
        }
        else{
            exibirTextoNaTela('h1','O numero secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }

}

function geradorDeNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * NumeroMaximo + 1);
    let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == NumeroMaximo){
        listasDeNumerosSorteados =[];
    }
    if(listasDeNumerosSorteados.includes(numeroEscolhido)){
        return geradorDeNumeroAleatorio();


    }
    else{
        
        listasDeNumerosSorteados.push(numeroEscolhido);
        console.log(listasDeNumerosSorteados);
        return numeroEscolhido;

    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function novoJogo() {
    numeroSecreto = geradorDeNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    fraseInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}
