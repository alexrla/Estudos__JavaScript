/*
    - Processo de chamar a si mesmo;

    - Uma função recursiva, é uma função que chama a si mesma;

    - Sintaxe:
        function nomeDaFuncao() {
            instruções...
            
            nomedaFuncao();

            instruções...
        }

        nomeDaFuncao();

    No exemplo acima, nomeDaFuncao() é uma função recursiva, ela chama a si mesma;

    - Uma função recursiva deve ter uma condição para parar de chamar a si mesma. Do contrário, a função vai se chamar indefinidamente (caimos em uma espécie de loop infinito, no caso, uma recursão infinita); 

    - A essa condição, damos o nome de condição básica;

    - Para evitar a recursão infinita, usamos abordagens como if...else (estruturas condicionais), onde, dependendo da veracidade da condição, realizamos a chamada recursiva ou não. Ex.:
        function nomeDaFuncao() {
            if(condição)    {
                nomeDaFuncao();
            }
            else    {
                interrompendo a chamada recursiva...
            }
        }

        nomeDaFuncao(); 
*/

// Exemplo - Fatorial de um número
function factorial(num) {

    // Se o número for igual a 0
    if (num === 0) return 1;

    // Se o número for positivo
    else return num * factorial(num - 1);

}

const number = 3;

// O cálculo do fatorial só deve ocorrer se o número não for negativo
if (number > 0) {
    let result = factorial(number);
    console.log(`${number}! = ${result}`);
}

/*
    - No exemplo, quando chamamos a função factorial(), passando um valor inteiro não negativo, a função factorial() passa a chamar a si mesma (processo de recursão), diminuindo num, até que ele seja igual a 0. Quando temos num sendo igual a 0, a função factorial() retorna 1, que é o fatorial de 0...

        factorial(3) - retorna: 3 * factorial(2);
        factorial(2) - retorna: 3 * 2 *  factorial(1);
        factorial(2) - retorna: 3 * 2 * 1 *  factorial(0);
        factorial(0) - retorna: 3 * 2 * 1 * 1;       
*/