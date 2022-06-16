// Tipos de dados

/*
    - Existem 8 tipos de dados básicos, em JavaScript:
        - String: representa dados textuais;
        - Number: representa números inteiros ou de ponto flutuante;
        - BigInt: representa números inteiros grandes (precisão arbitrária);
        - Boolean: representa valores lógicos (true ou false);
        - undefined: representa o valor indefinido (quando a variável não é inicializada);
        - null: representa o valor nulo;
        - Symbol: tipo de dados cujas instâncias são únicas e imutáveis;
        - Object: tipo de dados que representa objetos (pares chave/valor);
        Todos os tipos de dados, com exeção do Object, são tipos primitivos (o Object pode
        armazenar coleção de dados, enquanto os tipos primitivos podem armazenar um único
        tipo de dado).
*/

// String - Usada para armazenar textos (são cercadas por aspas duplas, simples ou graves - crases)
let firstName = "João";
let secondName = 'Gomes';

console.log(`Se é pegada de vaqueiro, ${firstName} ${secondName} tá na voz!`);

// Graves são usados, geralmente, quando queremos envolver variáveis em nossas expressões textuais;

// Number - Usada para armazenar números inteiros ou de ponto flutuante (decimais e exponencias)
let number = 4;
let numberTwo = 2.5;
let numberThree = 3e5; // 3 * 10⁵
console.log(numberThree);

// Também temos o +Infinity, o -Infinity e o NaN (Not a Number)
number = 3/0;
console.log(number);

numberTwo = -3/0;
console.log(numberTwo);

numberThree = "abc"/3;
console.log(numberThree);

// BigInt
/*
        - Em JavaScript, o tipo Number só pode representar número que estejam
        no intervalo de (2^53) - 1 a -(2^53) - 1;

        - Se precisarmos de um valor maior, usamos o tipo BigInt;

        - Um número do tipo BigInt é criado com a letra 'n' no final do número inteiro;

        - O BigInt foi introduzido na versão mais recente do JavaScript, logo, alguns navegadores
        não oferecem suporte para ele;
*/

const valueOne = 900719925124740998n;
console.log(valueOne);

// Adição
const result = valueOne + 1n;
console.log(result);

// Erro - Não podemos envolver um BigInt e um Number, em uma operação
// const resultTwo = valueOne + 1;
// console.log(resultTwo);

// Boolean - Usada para armazenar valores lógicos (true ou false)

// undefined - Representa um valor não atribuído/indefinido
// Quando declaramos uma variável, mas não à inicializamos
let name;
console.log(name); 

// Também podemos atribuir explicitamente (o que não é recomendado - geralmente 
// usamos o null para valores desconhecidos ou vazios)

// null - Representa um valor nulo/vazio/desconhecido
const nullValue = null;
// Acima, queremos dizer que a variável nullValue, está vazia;

// Symbol - Introduzido na versão mais recente do JavaScript (ES6)
// Um valor do tipo Symbol é único e imutável e pode ser referido como um valor simbólico
const newSymbol = Symbol("Meu Symbol");
const newSymbolTwo = Symbol("Meu Symbol");

// Acima temos dois symbols com a mesma descrição, ambos contêm "Meu Symbol" e, por serem do
// tipo Symbol, são diferentes;

// Object - Tipo de dado mais complexo, que permite o armazenamento de coleções de dados
const student = {
    name: "João",
    class: "4º ano",   
}

console.log(student);


/*
    - JavaScript é uma linguagem de tipagem dinâmica (o próprio JavaScriot determina, automaticamente,
    o tipo de dado de uma variável);

    - Isso significa que, podemos inicializar uma variável com um tipo de dado, por exemplo um número e,
    em seguida, alterar para um outro tipo de dado, uma string por exemplo;
*/

let data = 5;
console.log(data);
data = "João";
console.log(data);

// Para encontrar o tipo de dado de uma variável, podemos usar o operador typeof
const example = "João";
console.log(typeof(example));

const exampleTwo = 5;
console.log(typeof(exampleTwo));

const exampleThree = null;
console.log(typeof(exampleThree)); // Object - Problema do JavaScript