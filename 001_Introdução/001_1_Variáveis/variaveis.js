// Variáveis

/*
    - Variáveis são espaços reservados na memória, utilizados
    para armazenar dados;

    - Podemos declarar as variáveis, utilizando as palavras-chaves:
        - var;
        - let;

    - Existem diferenças entre var e let, mas recomenda-se o uso do
    let (lembrando que existem navegadores que não dão suporte ao uso
    let);

    - O let é uma forma mais moderna de declarar variáveis e o var é usado
    em versões mais antigas do JavaScript;

    - Atribuimos um valor a uma variável, através do operador de atribuição ( = );
*/

/* Declarando e inicializando uma variável:
     - number é o identificador (nome) da variável;
     - 5 é o valor atribuído a variável de nome number;
*/ 
let number = 5;

// Podemos declarar e só depois inicializar uma variável
let numberTwo;
numberTwo = 10;

// Podemos declarar mais de uma variável, em uma única instrução
let vowelOne = 'a', vowelTwo = 'e', vowelThree = 'i';

// Se usarmos uma variável, sem inicializá-la, obteríamos um valor indefinido (undefined)
let letter;
console.log(letter); // undefined

// Podemos alterar o valor armazenado em uma variável
let letterTwo = 'b';
console.log(letterTwo); // b

letterTwo = 'c';
console.log(letterTwo); // c

/*
     - Regras para nomear variáveis:
        - Os nomes das variáveis devem se inicializar por letras minúsculas,
        um sublinhado ou ( _ ) ou um cifrão ( $ ):
            . let name = 'João';
            . let _name = 'João';
            . let $name = 'João';
        
        - Os nomes das variáveis não podem começar por números:
            . let 1name = 'João'; // Inválido
        
        - JavaScript faz distinção de letras maiúsculas e minúsculas:
            . let Name = 'João';
            . let name = 'João';
        No exemplo acima, Name e name são variáveis difrentes.

        - Palavras-chave (palavras reservadas da linguagem) não pode serem utilizadas
        como nomes de variáveis:
            . let let = 'João'; // erro (let é uma palavra-chave)


    -  Boas práticas:
        - Devemos nomear variáveis, de forma descritiva (exemplificando o que é
        aquela variáveis e qual a sua responsabilidade);

        - Em JavaScript é utilizado camelCase para nomear variáveis (a primeira 
        palavras, se inicia com letra minúscula e a partir daí, as demais palavras
        se iniciam com letra maiúscula):
            . firstName = 'João';
*/