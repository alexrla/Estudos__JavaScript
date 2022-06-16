// Operadores

/*
    - Operadores são "símbolos especiais", utilizados para a realização de operações
    entre operandos (valores e variáveis). Exemplo: 2 + 3 (nesse exemplo, "+" é o operador
    que realiza a adição e 2 e 3, são os operandos);

    - Tipos de operadores:
        - De Atribuição;
        - Aritméticos;
        - De comparação;
        - Lógicos;
        - Bit a Bit;
        - De string;
        .
        .
        .
*/

// Operadores de atribuição: são utilizados para atribuir valores às variáveis
/*
    Tipos de operadores de atribuição:
        - Atribuição ( = )
            Ex.: number = 7;

        - Atribuição de adição ( += )
            Ex.: number += 5 <=> number = number + 5;

        - Atribuição de subtração ( -= )
            Ex.: number -= 2 <=> number = number - 2;
        
        - Atribuição de multiplicação ( *= )
            Ex.: number *= 3 <=> number = number * 3; 
        
        - Atribuição de divisão ( /= )
            Ex.: number /= 6 <=> number = number / 6;
        
        - Atribuição de resto/módulo ( %= )
            Ex.: number %= 4 <=> number = number % 4;
        
        - Atribuição de exponenciação/potenciação ( **= )
            Ex.: number **= 9 <=> number = number ** 9;
*/


// Operadores aritméticos: utilizados para a realização de cálculos aritméticos
/*
    Tipos de operadores aritméticos:
        - Adição ( + )
            Ex.: a + b;

        - Subtração ( - )
            Ex.: a - b;

        - Multiplicação ( * )
            Ex.: a * b;
        
        - Divisão ( / )
            Ex.: a / b; 
        
        - Módulo/Resto ( & )
            Ex.: a % b;
        
        - Exponenciação/Potenciação ( ** )
            Ex.: a ** b;
        
        - Incremento ( ++ )
            Ex.: ++a; // Aumenta em 1
        
        - Decremento ( -- )
            Ex.: --b; // Diminui em 
            
        OBS.: O operador de exponenciação ( ** ) foi introduzido no ECMAScript 2016, logo,
        alguns navegadores não oferecem suporte para ele;
*/

let a = 2, b = 3;

// Adição
console.log(a + b); // 2 + 3 = 5

// Subtração
console.log(a - b); // 2 - 3 = -1

// Multiplicação
console.log(a * b); // 2 * 3 = 6

// Divisão
console.log(a / b); // 2 / 3 = 0.666...

// Módulo/Resto
console.log(a % b); // 2 % 3 = 2

// Exponenciação
console.log(a ** b); // 2 ** 3 = 8

// Incremento
console.log(++a); // 2 + 1 = 3 => a = 3
console.log(a++); // 2 + 1 = 3 => a = 3
console.log(a); // a = 4

// Decremento
console.log(--b); // 3 - 1 = 2 => b = 2
console.log(b--); // 3 - 1 = 2 => b = 2
console.log(b); // b = 1


// Operadores de comparação: utilizados para comparar dois operandos (retornam um valor booleano: true ou false)
/*
    Tipos de operadores de comparação:
        - Igual a ( == ): retorna true se ambos os operandos forem iguais
            Ex.: x == y;

        - Diferente de ( != ): retorna true se ambos os operandos forem diferentes
            Ex.: x != y;

        - Igual a, estrito ( === ): retorna true se ambos os operandos forem iguais e do mesmo tipo
            Ex.: x === y;
        
        - Diferente de, estrito ( !== ): retorna true se ambos os operandos são iguais e de tipos diferentes, ou se ambos os operandos são diferentes
            Ex.: x !== y; 
        
        - Maior que ( > ): retorna true se o operando à esquerda for maior que o operando à direita
            Ex.: a > b;
        
        - Maior ou igual a ( >= ): retorna true se o operando à esquerda for maior, o igual ao operando à direita
            Ex.: a >= b;
        
        - Menor que ( < ): retorna true se o operando à esquerda for menor que o operando à direita
            Ex.: a < b;
        
        - Menor ou igual a ( <= ): retorna true se o operando à esquerda for menor, o igual ao operando à direita
            Ex.: a <= b;
*/

// Igual a
console.log(2 == 2); // true
console.log(2 == "2"); // true

// Diferente de
console.log(3 != 2); // true
console.log("oi" != "Oi"); // true

// Igual a, estrito
console.log(2 === 2); // true
console.log(2 === "2"); // false

// Diferente de, estrito
console.log(2 !== 2); // false
console.log(2 !== "2"); // true


// Operadores lógicos: realizam operações lógicas e retornam um valor booleano (true ou false)
/*
    Tipos de operadores de comparação:
        - E [AND] lógico ( && ): retorna true se ambos os operandos forem true
            Ex.: x && y;

        - OU [OR] lógico ( || ): retorna true se pelo menos um dos operandos forem true
            Ex.: x || y;

        - NÃO [NOT] lógico ( ! ): retorna true se o operando for false
            Ex.: !x;
*/

// E (AND)
console.log(true && true); // true
console.log(true && false); // false

// OU (OR)
console.log(true || false); // true

// NÃO (NOT)
console.log(!false); // true

// Outros operadores
/*
    - De string ( + ): utilizado para concatenar (unir) strings
        Ex.: console.log("hello" + "world");
        
    - Vírgula ( , ): avalia vários operandos e retorna o valor do último;
        Ex.: let a (1, 2, 3); // a = 3
    
    - Ternário ( ?: ): retorna um valor com base na condição;
        Ex.: (4 > 2) ? true : false; // true

    - Delete ( delete ): exclui a propriedade de um objeto ou um elemento de um array
        Ex.: delete a

    - Typeof ( typeof ): retorna uma string indicando o tipo de dados da variável
        Ex.: typeof 2; // "number"
*/