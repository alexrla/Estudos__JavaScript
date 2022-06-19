/*
    - Os loops, na programação, são utilizados para repetir um determinado bloco de código;

    - Sintaxe:
        for(inicialização; condição; incremento){
            instruções...
        }

        inicialização: uma declração que é executada uma única vez antes do loop ser executado;

        condição: uma expressão que é avaliada antes de cada iteração do loop (se for true, as instruções dentro do corpo do loop serão executadas e, se for false, o loop é encerrado);

        incremento: uma declaração que é executada após cada iteração do loop;
*/


// Exemplos:
// #Ex.: 1
const number = 5;

for(let i = 1; i <= number; ++i)  {
    if(i === 1) console.log(`Mensagem exibida ${i} vez!`);
    else console.log(`Mensagem exibida ${i} vezes!`);
}

// #Ex.: 2 - Soma dos 100 primeiros número naturais (incluindo o zero)
let sum = 0;

for(let i = 1; i <= 100; ++i) {
    sum += i;
}

console.log(`Soma = ${sum}`);


/*
    Loop infinito
        - Se na condição de um loop, passarmos um condição que sempre retorna true (verdadeiro), iremos cair em um loop infinito (else será executado, até encher totalemnte a memória);

    Corpo com a apenas uma instrução
            - Quando o corpo possuir apenas uma instrução, podemos omitir as chaves. Ex.:

                for(inicialização; condição; incremento){
                    console.log("");
                }
    
    Loops aninhados
        - Podemos ter loops for, aninhados. Ex.:

            for(inicialização; condição; incremento)    {
                for(inicialização; condição; incremento)    {
                    instruções...
                }
            }
                
    }
*/