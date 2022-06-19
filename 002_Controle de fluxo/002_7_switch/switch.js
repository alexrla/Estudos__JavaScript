/*
    - Usada na tomada de decisões (uma espécie de if/else);

    - Aqui uma expressão é avaliada e o conjunto de instruções correspondente a essa expressão, é executado;

    - Sintaxe:
        switch(variável/expressão) {
            case valor1:  
                instruções...
                break;

            case valor2:  
                instruções...
                break;
            .
            .
            .
            case valorN:
                instruções...
                break;

            default:
                instruções...instruções...
        }

        Uma variável/expressão é avaliada. Se o resultado dessa expressão corresponder a um desses casos (case), o conjunto de instruções, o corpo desse case, será executado. Se nenhum caso corresponder a expressão, as instruções do caso default, serão executadas;

        A instrução break é usada, pois sem ela, os casos seguintes, após o caso correspondente, teriam suas instruções executadas;

        A cláusula default é opcional;
*/

// Exemplos
// #Ex.: 1
let number = 2;

switch(number % 2) {
    case 0:
        console.log("O número é par");
        break;
    case 1:
        console.log("O número é impar");
        break;
    default:
        console.log("Valor não reconhecido"); // caso number não seja um número, ocorre o default;
}

/*
    - No JavaScript, a instrução switch verifica, estritamente, os casos (se valor e tipo correspondem). Ex.:

        let x = 1;

        switch (x) {
            case "1":
                a = 1;
                break;
            case 1:
                a = um;
                break;
        }
        console.log(`O valor é ${x}`); // O valor é um
*/

// #Ex.: 2 - Calculadora
let result;

const operator = "+";
const operatingOne = 5.5;
const operatingTwo = 7;

switch(operator) {
    case '+':
        result = operatingOne + operatingTwo;
        console.log(`${operatingOne} + ${operatingTwo} = ${result}`);
        break;
    case '-':
        result = operatingOne - operatingTwo;
        console.log(`${operatingOne} - ${operatingTwo} = ${result}`);
        break;
    case '*':
        result = operatingOne * operatingTwo;
        console.log(`${operatingOne} * ${operatingTwo} = ${result}`);
        break;
    case '/':
        result = operatingOne / operatingTwo;
        console.log(`${operatingOne} / ${operatingTwo} = ${result}`);
        break;

    default:
        console.log("Opeador inválido");
        break;
}

/*
    - No JavaScript, os casos podem ser agrupados, para compartilharem do mesmo código;
*/

// #Ex.: 3

let fruit = "abacaxi";

switch(fruit) {
    case "banana":
    case "laranja":
    case "manga":
    case "abacaxi":
        console.log(`${fruit} é uma fruta`);
        break;
    default:
        console.log(`${fruit} não é uma fruta`);
}