var helloWorld = "Hello World!"; //var declara variuáveis
//let para declarar variáveis num escopo de código
const pi = 3.14//const para declarar constantes
//array variável com índice - vetores
//funções de conversão parseInt parseFloat toString
console.log(helloWorld); //escreve olá mundo no console,
alert(helloWorld);       //console.log escreve as informações no console do navegador e alert num popup

let a = 10;
const b = "10";
console.log(a == b);      //validação ignora o tipo de dado
console.log(a === b);     //3 === valida também o tipo de dado
console.log(a != b);      //nega a comparação do valor
console.log(a !== b);     //nega a comparação do valor e tipo de dado 
console.log(a == b && typeof b == 'string');   //AND e tipo de variável
console.log(a == b && typeof a == 'string');   
console.log(a == b || typeof b == 'string');   //OR e tipo de variável
console.log(a == b || typeof a == 'string')

let cor = "verde";
if (cor === "verde") {

    console.log("siga");

} else if (cor === "amarelo" ) {

    console.log("atenção");

} else if (cor == "vermelho") {

    console.log("pare");

} else {

    console.log("erro");
    
}