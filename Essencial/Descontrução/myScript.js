const person =  {
    name: "Matheus",
    age: 22,
    job: "Desenvolvedor"
};

// 1º forma - Objetos
const { name } = person;
console.log(name); // Matheus

let { age, job } = person;
console.log(age); // 22
console.log(job); // Desenvolvedor

// 2º forma - Objetos
const { name: myName} = person;
console.log(myName); // Matheus

const names = ["Matheus", "Leandro", "Felipe"];

// 1º forma - Arrays
const { 0: firstName } = names;
console.log(firstName); // Matheus

const { 1: secondName, 2: thirdName } = names;
console.log(secondName); // Leandro
console.log(thirdName); // Felipe

// 2º forma - Arrays
const [ nameOne, nameTwo, nameThree ] = names;
console.log(nameOne); // Matheus
console.log(nameTwo); // Leandro
console.log(nameThree); // Felipe