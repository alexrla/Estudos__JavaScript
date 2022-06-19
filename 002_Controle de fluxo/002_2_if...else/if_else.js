/*
    IF... ELSE
        - Instruções usada quando se há a necessidade de executar um 
        bloco de código (conjunto de instruções), em detrimento a outros;

        - No JavaScript, essas instruções podem ser montadas de três formas diferentes:
            if;
            if... else;
            if... else if... else;
*/

/*
    IF
        - Sintaxe:
            if (condição) {
                instruções...
            }
        
        - A instrução if avalia a condição entre parênteses;
        - Se a condição for verdadeira, o bloco de instruções é executado;
        - Se a condição for falsa, o bloco de instruções é ignorado;

        - OBS.: o código entre chaves ( {} ), é tido como o corpo da instrução if;
*/

// Exemplo
let number = 2;

if(number > 0)  {
    console.log("O número é positivo");
}


/*
    IF... ELSE
        - Sintaxe:
            if (condição) {
                instruções do corpo do if...
            } else {
                instruções do corpo do else...
            }
        
        - A instrução if avalia a condição entre parênteses;
        - Se a condição for verdadeira, as instruções do corpo do if, são executadas (e as instruções no corpo do else são ignoradas);
        - Se a condição for falsa, as instruções do corpo do else, é que serão executadas (e as instruções no corpo do if é que serão ignoradas);

        - OBS.: 
            Podemos ter várias instruções if, mas só uma instrução else;

            Não passamos uma codição para o else;
*/

// Exemplo
number = -1;

if(number > 0)  {
    console.log("O número é positivo");
} else  {
    console.log("O número é negativo ou é igual a 0");
}


/*
    IF... ELSE IF ... ELSE
        - Sintaxe:
            if (condição) {
                instruções do corpo do if...
            } else if(condição) {
                instruções do corpo do else if...
            } else  {
                instruções do corpo do else ...
            }
        
        - A instrução if avalia a condição entre parênteses;
        - Se a condição for verdadeira, as instruções do corpo do if, são executadas (e as instruções no corpo do else if e do else, são ignoradas);
        - Se a condição do if for falsa, a condição do else if é avaliada;
        - Se a condição for verdadeira, as instruções do corpo do else if, são executadas (e as instruções no corpo do if e do else, são ignoradas);
        - Se a condição do else if, também for falsa, as instruções do corpo do else é que serão executadas (e as instruções no corpo do if e do else if, são ignoradas);

        - OBS.: 
            Podemos ter várias instruções else if, mas só uma instrução if e só uma instrução else;
*/

// Exemplo
number = 0;

if(number > 0)  {
    console.log("O número é positivo");
} else if(number == 0)  {
    console.log("O número é igual a 0");
} else  {   
    console.log("O número é negativo");
}

/*
    Instruções aninhadas
        - Podemos ter instruções if, if...else e if...else if...else, dentro das mesmas. Ex.:

            if(condição) {
                if(condição) {
                    instruções...
                } else {
                    instruções...
                }
            } else {    
                instruções...
            }
        
        Vejamos que o aninhamento, acaba complicando e deixando mais complexa, a lógica e a leitura do código. Logo, sempre que possível, devemos evitar instruções aninhadas;

    Corpo com a apenas uma instrução
            - Quando o corpo possuir apenas uma instrução, podemos omitir as chaves. Ex.:

                if(condição)  
                    console.log("");
                else if(condição)  
                    console.log("");
                else
                    console.log("");   
*/
