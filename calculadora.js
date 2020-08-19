const input = require("readline-sync")
const emoji = require('node-emoji')

const { log } = console;
const message = ':mega: Bem vindo a Calculadora de Média :rocket:. Digite 6 valores para saber a média';
const emojiMessage = emoji.emojify(message);

log(emojiMessage);


const valor1 = input.question('Digite o primeiro valor  ')
const valor2 = input.question('Digite o segundo valor ')
const valor3 = input.question('Digite o terceiro valor  ')
const valor4 = input.question('Digite o quarto valor  ')
const valor5 = input.question('Digite o quinto valor  ')
const valor6 = input.question('Digite o sexto valor  ')