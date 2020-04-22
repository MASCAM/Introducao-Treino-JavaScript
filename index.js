//funções

(function (x1, x2, operator) { //função anônima
    
    return console.log(eval(`${x1} ${operator} ${x2}`)); //retorna o valor da expressão fornecida

})(1, 2, "+")

function somar (x1, x2, operator) {   //função normal
    
    return eval(`${x1} ${operator} ${x2}`); //retorna o valor da expressão fornecida

}

let calc = (x1, x2, operator) => { //exemplo de arrow function /*arrow*/ =>

    return eval(`${x1} ${operator} ${x2}`);

}

let resultado = somar(1, 2, "-");
console.log(resultado);

resultado = calc(3, 5, "*");
console.log(resultado);

//eventos

window.addEventListener('focus', event=> { //toda vez que focar na janela irá realizar uma ação
    //event listener é uma procedure que espera um evento acontecer
    console.log("focus");

});





//variáveis e vocabulário básico

var helloWorld = "Hello World!"; //var declara variáveis
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

let cor = "verde"; //exemplos de comparações
if (cor === "verde") {

    console.log("siga");

} else if (cor === "amarelo" ) {

    console.log("atenção");

} else if (cor == "vermelho") {

    console.log("pare");

} else {

    console.log("erro");

}

cor = "azul"; //exemplo de switch

switch (cor) {

    case "verde":
        console.log("siga");
        break;

    case "amarelo":
        console.log("atenção");
        break;

    case "vermelho":
        console.log("pare");
        break;

    default:
        console.log("erro");

}

//break para a execução
//continue ignora a execução atual e vai pra próxima iteração

let n = 5;

for (let i = 0; i <= 10; i++) { //tabuada do 5

    console.log(`
    ${i} X ${n} = ${i*n}
    `) ; //$ para expressões matemáticas no output
    //crase interpreta como texto e $ como template (formato)  
    //entre crases você pode até quebrar em várias linhas
    console.log(i + " X " + n + " = " + (i * n)); //forma concatenada
    //basicamente tudo que está fora das chaves do $ é interpretado como texto quando entre crases
}