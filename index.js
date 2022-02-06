const {Funcoes} = require('./funcoes');
const inquirer = require('inquirer');
const operacoes = new Funcoes;

inquirer.prompt([
    {
        name:"a",
        message:"Digite o primeiro valor a ser calculado:"
    },
    {
        name:"b",
        message:"Digite o segundo valor a ser calculado:"
    },
    {
        name:"op",
        message:"Escolha uma opcão:\n 1 Adição \n 2 Subtração \n 3 Multiplicação \n 4 Divisão"
    }
]).then((answers) => {
    let a = parseFloat(answers.a)
    let b = parseFloat(answers.b)
    let op = parseInt(answers.op)

    switch(op){
        case 1:
            console.log(`${a} + ${b} = ${operacoes.soma(a,b)}`)
            break;
        case 2:
            console.log(`${a} - ${b} = ${operacoes.subtracao(a,b)}`)
            break;
        case 3:
            console.log(`${a} x ${b} = ${operacoes.multiplicacao(a,b)}`)
            break;
        case 4:
            console.log(`${a} / ${b} = ${operacoes.divisao(a,b)}`)
            break;
        default: console.log("Digite uma opção valida!")
            break;
    }
}).catch((error) => console.log(error))