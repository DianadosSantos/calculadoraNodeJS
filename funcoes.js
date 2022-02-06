function soma(a,b){
    return `A soma entre ${a} + ${b} = ${a + b}`
}

function subtracao(a,b){
    return `A subtração entre ${a} + ${b} = ${a - b}`
}

function multiplicacao(a,b){
    return `A multiplicação entre ${a} x ${b} = ${a * b}`
}

function divisao(a,b){
    return `A divisão entre ${a} / ${b} = ${a / b}`
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
};
