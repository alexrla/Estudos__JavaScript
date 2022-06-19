/*
    Loop while
        - Sintaxe:
            while(condição) {
                instruções...
            }

            A condição do loop while é avaliada. Se ela for true, as instruções contidas no corpo do loop while são executas e, após a execução, a condição é mais uma vez avaliada. Esse processo se repete até que a condição avaliada seja false;

        - Loop for x Loop while
            O loop for, geralmente, é utilizado quando o número de iterações é conhecido. Já os loops while e do...while, são utilizados quando não conhecemos o número de iterações

        - Como ocorre no loop for, no loop while também podemos omitir as chaves, quando temos somente uma instrução:
            
            while(condição) 
                console.log("");
*/

// Exemplos:
// #Ex.: 1
const number = 5;

let i = 1;
while(i <= number)  {
    if(i == 1) console.log(`Mensagem exibida ${i} vez!`);
    else console.log(`Mensagem exibida ${i} vezes!`);

    i++;
}

// #Ex.: 2 - Soma dos 100 primeiros número naturais (incluindo o zero)
let sum = 0;

i = 1;
while (i <= 100) {
    sum += i;

    i++;
}

console.log(`Soma = ${sum}`);


/*
    Loops aninhados
        - Podemos aninhar loops while e do... while. Ex.:

            while(condição)    {
                while(condição)    {
                    instruções...
                }
            }
*/