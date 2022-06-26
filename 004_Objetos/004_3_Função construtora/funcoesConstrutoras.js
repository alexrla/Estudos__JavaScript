/*
    Função de construtor / Função construtora

        - Utilizadas para criar objetos;

        - Para criar o objeto a partir da função construtora, usamos
        a palavra-chave new;

        - Colocar a primeira letra em maiúscula, em relação ao nome, da
        função construtora, é tido como boa prática;

        - A palavra-chave this usada na função construtora, vai se referir
        ao objeto quando o mesmo é criado;
*/

// Exemplos
// #Ex.: 1
function Person()   {
    this.name = "Ana";
    this.age = 18;
}

// Criado um objeto
const person = new Person;

console.log(person);

// Podemos criar várias objetos a partir de funções construtoras
// #Ex.: 2
function NewPerson()   {
    this.name = "Luana";
    this.age = 25;

    this.greet = function() {
        console.log("Olá!");
    };
}

// #Ex.: 3
// Criando os objetos
const personOne = new NewPerson();
const personTwo = new NewPerson();

// Accesando as propriedas
console.log(personOne.name); // Luana
console.log(personTwo.name); // Luana


// Podemos criar funções construtoras com parâmetros
// #Ex.: 4
function Student(studentName, studentAge, studentGender)    {
    // Atribuindo os valores dos parâmetros as propriedades do objeto
    this.name = studentName;
    this.age = studentAge;
    this.gender = studentGender;

    this.greet = function() {
        return (`Oi, meu nome é ${this.name}`);
    };
}

// Criando objetos
const studentOne = new Student("Aline", 14, "feminino");
const studentTwo = new Student("Fernando", 14, "masculino");

// Acessando as propriedades
console.log(studentOne.name); // Aline
console.log(studentTwo.name); // Fernando

// Com isso, podemos criar objetos com propriedades diferentes


/*
    Função construtora x Literal de Objeto

        - Um literal de objeto é geralmente utilizada para criar um único objeto.

        - A função construtora é útil para criarmos vários objetos; 
*/
// #Ex.: 5
// Literal de objeto
const myObject = {
    name: "Alex"
};

// Função construtora
function CreateMyObject()   {
    this.name = "Alex";
}

const objectOne = new CreateMyObject();
const objectTwo = new CreateMyObject();

/*
    - Cada objeto criado a partir da função construtora, é único;

    - Além das propriedades obtidas a partir da função construtora, podemos adicionar novas propriedades;
*/
// #Ex.: 6
function CreateMyNewObject()    {
    this.name = "Maria";
}

let myNewObjectOne = new CreateMyNewObject();
let myNewObjectTwo = new CreateMyNewObject();

// Adicionando uma propriedade ao objeto myNewObjectOne
myNewObjectOne.age = 20;
console.log(myNewObjectOne.age);

/* 
    - A propriedade age é exclusiva do objeto myNewObjectOne e
    não está disponível para o objeto myNewObjectTwo;

    - Também podemos adicionar as propriedades que são métodos;
*/

/*
    - Se um objeto for criado com um literal de objeto e, se uma variável, for definida com esse valor de objeto, qualquer alteração no valor dessa variável, acaba alterando o objeto original;

    - Essas variáveis derivadas desse objeto, atuam como um clone desse objeto;
*/
// #Ex.: 6
const newStudent = {
    name: "Débora"
};

console.log(newStudent.name); // Débora

let studentAlicia = newStudent;

// Alterando o valor da propriedade
studentAlicia.name = "Alicia";

console.log(newStudent.name); // Alicia


/*
    - Para adicionar propriedades e métodos a função construtora, usamos um prototype. Exemplo:
*/
// #Ex.: 7
function Animal()   {
    this.type = "Cavalo";
}

const horse = new Animal;

Animal.prototype.paws = 4;

console.log(horse.paws);


/*
    - JavaScript também possui construtores embutidos;
*/
// #Ex.: 8
let a = new Object();    // Novo objeto de objeto
let b = new String();    // Novo objeto de string
let c = new Number();    // Novo objeto de number
let d = new Boolean();   // Novo objeto de boolean

// Em JavaScript, strings podem ser criadas como objetos
// #Ex.: 9
const myName = new String("Roberto");
console.log(myName); // [String: 'Roberto']


// Números também podem ser criadas como objetos
// #Ex.: 10
const myNumber = new Number(14.2);
console.log(myNumber); // [Number: 14.2]

// Booleanos também podem ser criadas como objetos
// #Ex.: 11
const myBoolean = new Boolean(true);
console.log(myBoolean); // [Boolean: true]


/*
    - É recomendado usar tipos de dado primitvos e criá-los de maneira normal:
        const name = "Luan";
        const number = 2
        .
        .
        .

    - Declarar strings, numbers e booleans como objetos, tornam o programa mais lento;

    - No ES6 (ES2015), a palavra-chave class foi introduzida. Ela também nos permite criar objetos e são semelhantes as funções construtoras;
*/