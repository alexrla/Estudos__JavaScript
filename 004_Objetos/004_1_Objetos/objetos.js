/*
    - Tipo de dado não primitivo;

    - Permite armazenar várias coleções de dados;
*/

// Exemplos:
// #Ex.: 1
const student = {
    firstName: "Alex",
    group: 7
};

console.log(student);

// No exemplo acima, student é u objeto que armazena valores de string e number

/*
    - Declarando um objeto
        Sintaxe de declaração:

        object nome_do_objeto = {
            chave1: valor1,
            chave2: valor2,
            .
            .
            .
        }

        No exemplo acima, temos um objeto de nome "nome_do_objeto";

        Vejamos que cada membro de um objeto é formado por um par, chave: valor,
        que são separados por vírgula e ficam entre chaves ( {} );
*/

// #Ex.: 2
const person = {
    name: "John",
    age: 20
};

console.log(typeof person); // object

/*
    - Também podemos definir um objeto, dependendo da quantidade de membros/itens que ele possui, em uma única linha 
    (se possuir muitos itens, é recomendado quebrar em várias linhas, afim de manter a legibilidade). Ex.:

    const person = { name: "John", age: 20 };
*/

/*
    - Em JavaScript, os pares "chave: valor", são chamados de propriedades;

    - Para acessar o valor de uma propriedade, usamos a sua chave:
        Sintaxe de notação de ponto
            nome_do_objeto.chave
    
    - Também podemos usar a notação de colchetes:
        nome_do_objeto["chave"]
*/

// #Ex.: 3
// const person = {
//     name: "John",
//     age: 20
// };

// Acessando uma propriedade
console.log(person.name); // John
console.log(person["age"]); // 20


// Podemos ter aninhamento de objetos (objetos dentro de outros)
// #Ex.: 4
const newStudent = {
    name: "John",
    age: 20,
    notes: {
        math: 7.5,
        science: 6
    }
};

// Acessando propriedade do objeto newStudent
console.log(newStudent.notes); // Object notes

// Acessando propriedade do objeto notes
console.log(newStudent.notes.math); // 7.5


// Em JavaScript, um objeto pode conter uma função
const newPerson = {
    name: "Julio",
    age: 30,
    // Usando uma função como valor
    greet: function() {console.log("Olá!")}
};

newPerson.greet(); // Olá

/*
    - No exemplo acima, uma função foi usada como valor. Logo, ao invés de newPerson.greet, precisamos de newPerson.greet(), para chamar a função dentro do objeto;

    - Métodos são propriedades que contém uma declaração de função;
*/