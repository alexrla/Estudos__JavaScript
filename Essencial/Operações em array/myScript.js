/*
    Método map()
        - Invoca uma função callback, passada como argumento para cada item
        do array, e devolve/retorna um novo array, com novos elementos,
        modificados a partir da função callback

        - Sintaxe:
            array.map(função_callback(elemento_atual, índice))
        
        - OBS.: Possui ter mais parâmetros;

        - Podemos utilizar uma função anônima ou uma arrow function;
*/

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) =>  {
    return number * number;
});

console.log(squares);

const myNumbers = [2, 4, 6, 8];

const myNewNumbers = myNumbers.map((number, index) =>  {
    return number + index;
});

console.log(myNewNumbers);

/*
    Método reduce()
        - Itera por cada item de um array, a fim de gerar um único valor (reduzir o array);

        - Invoca uma função callback, passada como argumento para cada item
        do array, e retorna um único valor;

        - Sintaxe:
            array.reduce(função_callback(acumulador, elemento_atual, índice))
        
        - OBS.: Possui mais parâmetros;

        - Podemos utilizar uma função anônima ou uma arrow function;
*/

const othersNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = othersNumbers.reduce((totalSum, nextNumber) => {
    return totalSum + nextNumber;
});

console.log(sum);

/*
    Método find()
        - Retorna o elemento, do array, que satisfaz a
        condição da função callback;

        - Se o elemento não existir, será retornado undefined;

        - Mias uma vez, uma função callback, passada como argumento para cada item
        do array, é invocada e retorna o elementos, se ele existir, ou undefined, se
        ele não existir;

        - Sintaxe:
            array.find(função_callback(elemento, índice))
        
        - OBS.: Possui mais parâmetros;

        - Podemos utilizar uma função anônima ou uma arrow function;
*/

//  othersNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNumberExists = othersNumbers.find((number) => {
    return number === 12;
})

console.log(myNumberExists);