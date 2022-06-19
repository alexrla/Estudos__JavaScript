/*
    - Se refere à disponibilidade de variáveis e funções, em certas partes do código;

    - Em JavaScript, uma variável possui dois tipos de escopo:
        1. Global: Variáveis globais são variáveis que são disponíveis em todo o código;
        2. Local: Variáveis locais são variáveis que são disponíveis apenas dentro de um bloco de código;
*/

// Escopo global
/*
    - Uma variável global (de escopo global), é uma variável declarada no início de um código ou fora de uma função;
*/

// Exemplos:
// #Ex.: 1
let expression = "Oi";

function greet () {
    console.log(expression);
}

greet(); // Oi

/*
    - No exemplo acima, a variável expression é declarada no início do código  e fora da função. Logo, ela pode ser usada em qualquer parte do código (ela é uma variável global);
*/

// O valor de uma variável global, pode ser alterado dentro de uma função
// #Ex.: 2
let number = 2;

function changeNumber () {
    number = 3;
}

// Antes de chamar a função
console.log(number); // 2

// Após a chamada da função
changeNumber();
console.log(number); // 3

/*
    - No exemplo acima, number é uma variável global, inicializada com o valor 2. Dentro da função changeNumber(), acessamos a variável number e alteramos o valor dela para 3. Lembrando que, o valor de number só vai ser alterado, se chamarmos a função;

    - O uso de variáveis globais não é recomendado, pois como o eu valor pode ser alterado em diferentes áreas do nosso código, isso pode introduizr resultados desconhecidos no nosso programa;

    - Em JavaScript, uma variável também pode ser utilizada sem que ela seja declarada. Diante dessa situação, a variável se torna, automaticamente, em uma variável global;
*/
// #Ex.: 3
function myFunction()   {
    x = 5;
}

myFunction();
console.log(x); // 5

/*
    - No exemplo acima, a variável x é uma variável global. Se ela fosse declarada, utilizando a palavra-chave let, ao rodar o programa, seria lançado um erro;
*/


// Escopo local
// #Ex.: 4
let phraseOne = "Hello";

function helloWorld()    {
    let phraseTwo = "World";
    console.log(phraseOne + " " + phraseTwo + "!");
}

helloWorld(); // Hello World!
// console.log(phraseOne + " " + phraseTwo + "!"); 
// ReferenceError: phraseTwo is not defined

/*
    No exemplo acima, a variável phraseOne é uma variável global, inicializada com o valor "Hello". A variável phraseTwo é uma variável local, inicializada com o valor "World". A variável phraseTwo só é acessada dentro da função helloWorld(), logo, ela não é visível fora da função. Por isso que, quando tentamos acessar a variável phraseTwo, fora da função helloWorld(), ocorre um errro;
*/


// Escopo de bloco

function addFirstTenNaturalNumbers()    {
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    console.log(sum);
}

addFirstTenNaturalNumbers(); // 55;

/*
    - No exemplo acima, temos uma função que realiza a soma dos 10 primeiros números naturais. A função tem um bloco de código  (um loop for) que é executado apenas dentro do bloco de código da função. Agora vejamos a variável i, declarada no loop for. Essa variável i, só é acessada dentro do bloco de código do loop for, logo, ela não é visível fora do bloco de código do loop for (muito menos fora do bloco de código da função). Nesse caso, i é uma variável com escopo de bloco (ela pode ser acessada apenas dentro do loop for). Por fim, a variável i é uma variável local, em relação ao bloco de código do loop for;
*/