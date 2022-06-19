/*
    Loop do... while
        - Sintaxe:
            do {
                instruções...
            }while(condição) 

            Primeiramente, as instruções do corpo do loop do... while, são executadas e, em seguida, a condição é avaliada. Se a condição for true, o loop do... while é executado novamente. Esse processo acaba se repetindo até que a condição seja false;
        
        - While x Do... While
            A diferença entre os loops, se dá pelo fato do loop do... while ter suas instruções executadas, antes da condição ser avaliada. Logo, o loop do..while vai ser executado pelo menos uma vez, independentemente se a condição for verdadeira ou não;

        - Assim como ocorre no loop for, nos loops while e do...while, podemos cair em loops infinitos quando temos uma condição que sempre retorna true;

*/       

// Exemplos:
// #Ex.: 1
const number = 5;

let i = 1;
do {
    if(i === 1) console.log(`Mensagem exibida ${i} vez!`);
    else console.log(`Mensagem exibida ${i} vezes!`);

    i++;
} while(i <= number)

// #Ex.: 2 - Soma dos 100 primeiros número naturais
sum = 0;

i = 1;
do {
    sum += i;
    
    i++;
} while(i <= 100)

console.log(`Soma = ${sum}`);