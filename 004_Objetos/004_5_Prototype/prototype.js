/*
    - Como já vimos, podemos criar objetos através de funções construtoras;

    - No JavaScript, cada função e objeto possuem, por padrão, uma propriedade prototype;

    - Como também já vimos, a partir do prototype, podemos adicionar propriedades e métodos a uma função construtora; 
*/

// Exemplos
// Ex.: 1
function Person () {
    this.name = "Matheus",
    this.age = 23
}

const person = new Person();

// Verificando o valor
// Como a propriedade não possui um valor, é exibido um objeto vazio
console.log(Person.prototype); // { ... }

// Ex.: 2
function Student()    {
    this.name = "José";
}

const studentOne = new Student();
const studentTwo = new Student();

// Adicionando um método a função construtora
Student.prototype.toIntroduce = function()    {
    console.log(`Olá, menu nome ${this.name}.`)
};

studentOne.toIntroduce(); // Olá, meu nome é José.
studentTwo.toIntroduce(); // Olá, meu nome é José.

/*
    - Se um valor for alterando, através do prototype, os novos objetos terão o valor da sua propriedade alterado;

    - Os demais objetos, criados anteriormente, não terão os seus valores alterados;
*/

// Ex.: 3
function Worker()   {
    this.name = "Jonathan";
}

// Adicionando propriedade
Worker.prototype.age = 25;

// Criando um objeto
const workerOne = new Worker();

console.log(workerOne.age); // 25

// Mudando o valor da propriedade, através do prototype
Worker.prototype = { age: 32 };

// Criando novo objeto
const workerTwo = new Worker();

console.log(workerOne.age); // 25
console.log(workerTwo.age); // 32

/*
    - Se um objeto tenta acessar a mesma propriedade, sendo uma na função construtora e outra no prototype, o objet irá obter a propriedade da função construtora;
*/

// Ex.: 4
function Car()  {
    this.color = "preto";
}

// Adicionando propriedade
Car.prototype.color = "branco"
Car.prototype.doors = 4;

const myCar = new Car();

console.log(myCar.color); // preto
console.log(myCar.doors); // 4

/*
    - No exemplo acima, myCar.color, procura na função construtora, para ver se existe a propriedade color. Como existe, o objeto obtém o valor dessa propriedade, "preto";

    - No caso de myCar.color, ele também procura na função, mas não encontra. Com isso, ele vai examinar o prototype da função construtora e acaba herdando a propriedade do prototype (isso, porque ela existe, se não existisse, no console.log, veríamos undefined);
*/


/*
    - Podemos acessar a propriedade do prototype de uma função construtora, da seguinte maneira:
*/
// Ex.: 5 
function Animal()   {
    this.type = "Cachorro";
}

// Adicionando propriedade
Animal.prototype.breed = "Husky siberiano";

// Criando objeto
const myAnimal = new Animal();

// Acessando propriedade do prototype (usamos __proto__)
console.log(myAnimal.__proto__); // { breed: 'Husky siberiano' }

// Devemos evitar usar __proto__ (foi preterido)