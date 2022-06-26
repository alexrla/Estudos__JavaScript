/*
    - Os objetos possuem dois tipos de propriedades de objetos: a propriedade que representa o dado e a propriedade que acessa aquele dado;

    - Propriedade que representa o dado em si, exemplo:
        const student = {
            /// Propriedade de dado
            firstName: "Ana"
        };

    - No JavaScript, as propriedade de acessar os dados, são os métodos que obtém ou definem, o valor de um objeto;

    - As palavras-chaves utilizadas para se referir as propriedades do acessador, são:
        get - define um método getter, para obter o valor da propriedade;

        set - define um método setter, para definir o valor da propriedades;
*/

// Getter
// Usado para acessar as propriedades de um objeto
const student = {

    firstName: "Luiza",
    
    // Getter
    // Usamos a palavra-chave get, para criar um método getter
    get getName() {
        return this.firstName;
    }
};

console.log(student.firstName); // Luiza
// Para acessar o valor, o acessamso propriedade
console.log(student.getName); // Luiza
// console.log(student.getName()); - Erro


// Setter
// Usado para alterar os valores das propriedades do objeto
const newStudent = {

    firstName: "Felipe",
    
    // Setter
    // Usamos a palavra-chave set, para criar um método setter
    // Deve ter, obrigatoriamente, um parâmetro
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(newStudent.firstName); // Felipe
// Alterando o valor da propriedade
newStudent.changeName = "Sandra";
console.log(newStudent.firstName); // Sandra


/*
    - O método Object.defineProperty(), é utilizada para adicionar os métodos, getter e setter;

    - Sintaxe:  
        Object.defineProperty(objeto, propriedade, descritpr)

    - Recebe três argumentos:
        1º: o objeto;
        2º: o nome dado a propriedade acessadora;
        3º: objeto que descreve a propriedade;
*/
// Exemplo
const person = {
    name: "Vitória"
};

// Getter
Object.defineProperty(person, "getName", {
    get: function() {
        return this.name;
    }
})

// Setter
Object.defineProperty(person, "changeName", {
    set: function(newName) {
        this.name = newName;
    }
})

console.log(person.name); // Vitória

// Alterando o valor da propriedades, através do método setter
person.changeName = "Roberta";

console.log(person.name); // Roberta
