/*
    - Como já vimos, um objeto pode conter funções;

    - Métodos de objetos são propriedades de objeto, que possuem um valor de função;
 */

// Exemplos:
/* 
     - Podemos acessar um método de objeto, usando a notação de ponto. Sintaxe:
        nome_do_objeto.chaveMetodo()
*/
// #Ex.: 1
const person = {
    name: "Amanda",
    greet: function() {console.log("Olá!")}
};

// Acessando o método
person.greet(); // Olá!

// Se tentarmos acessa o método, somente com person.greet, iremos obter a definição da função
person.greet; // ƒ () { console.log('Olá!'); }

// Métodos integrados do JavaScript
// Ex.: 2
const number = "23.32";
const result = parseInt(number);

console.log(result);

/*
    - No exemplo acima, parseInt() é um método interno do JavaScript (métdo do objeto Number),
    utilizado para converter o valor da string numérica em um valor inteiro;
*/

// Também podemos adicionar métodos a um objeto (além de propriedades "normais")
// Ex.: 3
const student = { };

// Adicionando propriedades
student.name = "John";

// Adicionando método
student.greet = function()  {
    console.log("Olá!");
}

// Acessando o método
student.greet(); // Olá!

/*
    - Podemos acessar, dentro de um método de um objeto, o valor de uma propriedades do mesmo objeto. 

    - Para isso, utilizamos a palavra-chave this;

    - A palavra-chave this se refere ao próprio objeto;
*/

// Ex.: 3
const newPerson = {
    name: "Leandro",
    age: 30,

    // Acessando a propriedade name, através de this.name
    greet: function() { console.log(`Meu nome é ${this.name} e tenho ${this.age} anos de idade.`); }
};

newPerson.greet();


/*
    - Já a variável dentro do método, é acessada de maneira "normal";
*/
// Ex.: 3
const newStudent = {
    name: "Felipe",

    greet: function() { 
        const group = 8;

        console.log(`Meu nome é ${this.name} e eu sou do grupo ${group}.`); }
};

newStudent.greet();