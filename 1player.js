var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var jogadorHumano = 'X';
var jogadorIA = 'O';
var turnoJogador = true;

mudarJogador(jogadorHumano);

function escolherQuadrado(id) {
    if (vencedor !== null || !turnoJogador) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#ffffff';
    quadrado.style.textShadow = '5px 5px 3px #292826';

    turnoJogador = false;
    mudarJogador(jogadorIA);

    checaVencedor();

    if (vencedor === null) {
        setTimeout(jogadaIA, 1000);
    }
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var quadrado1=document.getElementById(1);
    var quadrado2=document.getElementById(2);
    var quadrado3=document.getElementById(3);
    var quadrado4=document.getElementById(4);
    var quadrado5=document.getElementById(5);
    var quadrado6=document.getElementById(6);
    var quadrado7=document.getElementById(7);
    var quadrado8=document.getElementById(8);
    var quadrado9=document.getElementById(9);

    if (checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudaVencedor (quadrado1);
        return
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudaVencedor (quadrado4);
        return
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudaVencedor (quadrado7);
        return
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudaVencedor (quadrado1);
        return
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudaVencedor (quadrado2);
        return
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudaVencedor (quadrado3);
        return
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudaVencedor (quadrado3);
        return
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudaVencedor (quadrado1);
        return
}
}

function mudaVencedor(quadrado){
    vencedor= quadrado.innerHTML;
    vencedorSelecionado.innerHTML =vencedor
}

function jogadaIA() {
    if (vencedor !== null || turnoJogador) {
        return;
    }

    var quadradosVazios = Array.from(quadrados).filter(quadrado => quadrado.innerHTML === '-');
    if (quadradosVazios.length > 0) {
        var jogadaAleatoria = quadradosVazios[Math.floor(Math.random() * quadradosVazios.length)];
        jogadaAleatoria.innerHTML = jogadorIA;
        jogadaAleatoria.style.color = '#ffffff';
        jogadaAleatoria.style.textShadow = '5px 5px 3px #292826';

        turnoJogador = true;
        mudarJogador(jogadorHumano);

        checaVencedor();
    }
}

function mudaVencedor(quadrado){
vencedor= quadrado.innerHTML;
vencedorSelecionado.innerHTML =vencedor
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
quadrado1.style.background = '#0f0';
quadrado2.style.background = '#0f0';
quadrado3.style.background = '#0f0';
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true
    }
    return eigual
}

function reiniciar (){
    vencedor = null;
    vencedorSelecionado.innerHTML='';
    for (var i =1;i<=9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#7f7d7d';
        quadrado.style.color = '#7f7d7d';
        quadrado.style.textShadow = 'none';
        quadrado.innerHTML = '-';
    }
    mudarJogador(jogadorHumano);
}