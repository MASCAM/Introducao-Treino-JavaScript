/*funções*/

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

/*eventos*/

window.addEventListener('focus', event=> { //toda vez que focar na janela irá realizar uma ação
    //event listener é uma procedure que espera um evento acontecer
    console.log("focus");
    //listener, adicione uma escuta para um evento
});

document.addEventListener('click', event => { //toda vez que clicar no documento, a procedure realizará uma ação
    //window é a janela enquanto o document é o site
    console.log("click");
    //window manipula toda a aplicação
    //window.focus window.open window.close são diferentes comandos utilizáveis
})

/*classes*/

let agora = new Date(); //classe já desenvolvida pronta para ser utilizada
//a data é armazenada em formato de time stamp, quantidade de milissegundos desde 1 de janeiro de 1970
console.log("Data");
console.log(agora);
console.log(agora.getDate()); //pega cada dado do formato da data
console.log(agora.getMonth());
console.log(agora.getYear());

console.log("Data em formato local");
console.log(agora.toLocaleDateString("pt-BR")); //método de uma classe

let celular = function() { //exemplo de como criar classe

    this.cor = "prata"; //this sempre faz referencia a objetos enquanto o ponto faz referencia a um atributo especifico do objeto
    this.ligar = function() {
        console.log("Uma ligação");
        return "ligando";
    }

}

let objeto = new celular();

console.log(objeto.cor);
console.log(objeto.ligar());

class casa { //exemplo de como criar classe com método construtor

    constructor(){
        this.cor = "vermelha";
    }
    entrar(){
        console.log("entrando na casa");
        return "entrou";
    }

}

let house = new casa();

console.log(house);
console.log(house.entrar());

/*array*/

let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];
//índice começa em 0
//formato de vetor em JS
console.log(carros); //imprime o que está armazenado no array e mostra a quantidade de elementos
console.log("Quantidade de itens no vetor: " + carros.length); //imprime somente a quantidade de itens
//é possível também imprimir somente um elemento do array:
console.log("O primeiro elemento e que está na posição 0 do array é: " + carros[0]);
console.log("O ano atual na data que está armazenada no array é: " + carros[5].getFullYear());
//pega o valor dentro da classe armazenada no array

//para percorrer o array e fazer algo forEach()

carros.forEach(function(value, index){
    //para cada um dos elementos da array a função recebe o valor e o índice do elemento
    console.log(`O valor do elemento ${index} da função é: ${value}`);
    //e a função realiza alguma ação com esses valores
});

/*variáveis e vocabulário básico*/

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