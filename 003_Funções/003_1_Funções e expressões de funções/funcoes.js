/*
    - Bloco de código, que executa uma tarefa específica;
*/

// Funções definidas pelo usuário
/*
    - Sintaxe
        function nomeDaFuncao(parametros) {
            instruções...
        }

        Funções são declaradas a partir da palavra-chave (palavra reservada da linguagem) function;

        Para se nomear as funções, seguimos as mesmas dicas em relação as variáveis (devemos dar nomes descritivos);

        O corpo da função, suas instruções, se encontra entre chaves ( {} );
*/

// Exemplos:
// #Ex.: 1
function greet() {
    console.log("Olá, tudo bem?");
}


// Chamando uma função
greet();


// Parâmetros e argumentos de uma função
/*
    - Parâmetros são valores que são passados para a função, quando a mesma é declarada;

    - Já os argumento são os valores que são passados para a função, quando a mesma é chamada;
*/

// #Ex.: 2
function sum(operatingOne, operatingTwo) {
    console.log(operatingOne + operatingTwo);
}

sum(3, 4);
sum(2, 9)

/*
    - No exemplo acima, operatingOne e operatingTwo são parâmetros da função sum();

    - Agora, quando a função é chamada, os valores 3 e 4 são passados para o parâmetro operatingOne e operatingTwo. Ou seja, os valores 3 e 4 são argumentos da função sum(). O mesmo é válido para a segunda chamada da função sum(), onde os argumentos são 2 e 9;

    - Com o exemplo acima, podemos ver que uma função pode ser chamada quantas vezes quisermos, passando os valores numéricos que quisermos (os argumentos) para os parâmetros;
*/


// Retorno de uma função
/*
    - A instrução return pode ser utilizada para retornar um vaolor, para a chamada da função (ela indica que a função terminou: qualquer código a partir da instrução return, não é executado);

    - Se nada for retornardo, a função retorna undefined;
*/

// #Ex.: 3
function add(operatingOne, operatingTwo) {
    return operatingOne + operatingTwo;
}

let result = add(3, 4);
console.log(result);

/*
    - No exemplo acima, mais uma vez temos uma função que soma dois valores, só que agora ela foi declarada com um nome diferente. A diferença das funções sum() e add(), é que agora temos um retorno. O resultado da soma é retornado e esse resultado guardamos na variável result;
*/


// Benefícios das funções
/*
    - Torna o código reutilizável (podemos declarar uma função uma única vez e chamar ela quantas vezes quisermos);

    - Torna o programa mais fácil (cada pequena tarefa pode ser dividida em uma função);

    - Aumenta a legibilidade do código;
*/


// Expressões de funções
/*
    - Em JavaScript, as funções podem ser definidas como expressões;
*/

// #Ex.: 4
let x = function(number) {
    return number * number;
}
console.log(x(3));

let y = x(3);
console.log(y);

/*
    - No exemplo acima, temos uma função que retorna o quadrado de um número. A função é definida como uma expressão (declarada dentro de uma variável - a variável armazena a função) e ela retorna um valor;

    - A função é chamada usando o nome da variável;

    - A esse tipo de função, função sem nome, é dado o nome de função anônima;

    - Também podemos ver que podemos usar essa expressão com outras variáveis;
*/