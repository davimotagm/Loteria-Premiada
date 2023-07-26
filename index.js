let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

function consultandoGanhador(nome, cpf) {
    let nomeAdaptado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    if(ganhador.nome === nomeAdaptado) {
        if(ganhador.cpf === cpf) {
            return "É ganhador!"
        }
    } else {
        return "Não é ganhador!"
    }
}

// console.log(consultandoGanhador("adamastor", '123.321.789-98'));

let naoGanhadores = [];

function inserirNaoGanhadores(pessoas) {
    naoGanhadores.push(pessoas)
}

function contarNaoGanhadores() {
    return `Número de pessoas que não ganharam o prêmio: ${naoGanhadores.length}`;
}


let pessoa1 = {
    nome: "Davi",
}

let pessoa2 = {
    nome: "Pedro",
}

// inserirNaoGanhadores(pessoa1)
// inserirNaoGanhadores(pessoa2)
// console.log(contarNaoGanhadores());
