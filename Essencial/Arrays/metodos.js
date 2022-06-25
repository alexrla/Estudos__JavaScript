const myArray = ["Leandro", "Bianca", "Theo", "Vanda"];

// Retorna o índice do elemento
console.log(myArray.indexOf("Leandro")); // 0

// Se o elemento não existir, retorna -1
console.log(myArray.indexOf("leandro")); // -1

// Retorna uma nova string, modificada a partir de um separador
console.log(myArray.join(" - ")); // Leandro - Bianca - Theo - Vanda

// Removendo o último elemento
myArray.pop();
console.log(myArray); // [ 'Leandro', 'Bianca', 'Theo' ]

// Removendo o primeiro elemento
myArray.shift();
console.log(myArray); // [ 'Bianca', 'Theo' ]

// Alterando um elemento do array
myArray[0] = "Leandro";
console.log(myArray); // [ 'Leandro', 'Theo' ]

// Adicionando um elemento ao array (na última posição)
myArray.push("Vanda");
console.log(myArray); // [ 'Leandro', 'Theo', 'Vanda' ]

// Verificando se um elemento está contido em alguma coleção (string, array, ...)
console.log(myArray.includes("Leandro")); // true

// Verificando se o elemento termina com o valor que foi passado
const { 0: name } = myArray;
console.log(name.endsWith("dro")); // true

// Verificando se o elemento começa com o valor que foi passado
const { 1: secondName } = myArray;
console.log(secondName.startsWith("th")); // false

// Verifica se existe, pelo menos um, que atende ao passado
console.log(myArray.some(name => name === "Theo")); // true
console.log(myArray.some(name => name === "Bianca")); // false

// Verifica se todos os elementos atendem ao valor passado
const persons = [
    {name: "Leandro", age: 31},
    {name: "Theo", age: 0.7}
];

console.log(persons.every(person => person.age >= 18)); // false