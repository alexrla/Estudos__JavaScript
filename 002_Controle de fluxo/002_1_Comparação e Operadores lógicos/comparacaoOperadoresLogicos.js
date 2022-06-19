// Operadores de comparação
/*
    - Comparam dois valores e retornam um valor booleano (true ou false);

    - Operadores de comparação, são utilizados na tomada de decisões e em loops;

    - Tipos de operadores de comparação:
        - Igual a ( == ): retorna true se ambos os operandos forem iguais
            Ex.: 5 == "5"; // true

        - Diferente de ( != ): retorna true se ambos os operandos forem diferentes
            Ex.: 5 != "5"; // false

        - Igual a, estrito ( === ): retorna true se ambos os operandos forem iguais e do mesmo tipo
            Ex.: 5 === "5"; // false
        
        - Diferente de, estrito ( !== ): retorna true se ambos os operandos são iguais e de tipos diferentes, ou se ambos os operandos são diferentes
            Ex.: 5 !== "5"; // true
        
        - Maior que ( > ): retorna true se o operando à esquerda for maior que o operando à direita
            Ex.: 3 > 2; // true
        
        - Maior ou igual a ( >= ): retorna true se o operando à esquerda for maior, o igual ao operando à direita
            Ex.: 3 >= 3; // true
        
        - Menor que ( < ): retorna true se o operando à esquerda for menor que o operando à direita
            Ex.: 3 < 2; // false
        
        - Menor ou igual a ( <= ): retorna true se o operando à esquerda for menor, o igual ao operando à direita
            Ex.: 2 <= 2; // true

*/

// Exemplos:
let a = 2, b = 4, c = "oi";

// Igual a ( == )
console.log(a == 2); // true
console.log(b == "4") // true
console.log(c == "Oi") // false

/*
    - Operador de comparação: ( == )
    - Operador de atribuição: ( = )
*/

// Diferente de ( != )
console.log(a != 3); // true
console.log(c != "Oi"); // true

// Igual a, estrito ( === )
console.log(a === 2); // true
console.log(a === "2"); // true

// Diferente de, estrito ( !== )
console.log(a !== 2); // false
console.log(a !== "2"); // true 
console.log(c !== "Oi"); // true 

// Maior que ( > )
console.log(a > 1); // true


// Maior ou igual a ( >= )
console.log(b >= 4); // true

// Menor que ( < )
console.log(a < 3); // false
console.log(b < 5); // true

// Menor ou igual a ( <= )
console.log(a <= 3); // true
console.log(b <= 5); // true


// Operadores Lógicos
/*
    Tipos de operadores de comparação:
        - E [AND] lógico ( && ): retorna true se ambos os operandos forem true
            Ex.: true && false; // false

        - OU [OR] lógico ( || ): retorna true se pelo menos um dos operandos forem true
            Ex.: true || false; // true

        - NÃO [NOT] lógico ( ! ): retorna true se o operando for false e retorna false se o operando for true
            Ex.: !true; // false
*/

// Exemplos:
a = true, b = false, c = 4;

// E [AND] lógico ( && )
console.log(a && a); // true
console.log(a && b); // false
console.log((c > 2) && (c < 2)); // false

// OU [OR] lógico ( || )
console.log(a || a); // true
console.log(b || b); // false
console.log((c > 2) || (c < 2)); // true

// NÃO [NOT] lógico ( ! )
console.log(!a); // false
console.log(!b); // true

/*
    - Também podemos  usar operadores lógicos com números. 
    Em JavaScript, 0 é false e os demais valores diferentes
    de 0 são true;
*/