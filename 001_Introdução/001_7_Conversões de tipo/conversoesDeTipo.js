// Conversões de tipo

/*
    - Conversãode dados de um tipo, para outro (por exemplo, converter um número em string e vice-versa);

    - Existem dois tipos de conversão de tipo: implícita e explícita ;
*/

// Conversão implícita - conversão automática de tipo

// Quando temos uma string numérica e o sinal de adição, o outro operando é convertido automaticamente para string (obtemos uma concatenação)
let resultado;

resultado = "3" + 2; 
console.log(resultado) // "32"

resultado = true + "3"; 
console.log(resultado); // "true3"

resultado = "3" + undefined; 
console.log(resultado); // "3undefined"

resultado = null + "3"; 
console.log(resultado); // "null3"

// Quando temos uma string numérica e o operador não é o de adição, a string é convertida para número, automaticamente
resultado = "4" - "2"; 
console.log(resultado); // 2

resultado = "4" - 2;
console.log(resultado); // 2

resultado = "4" * 2;
console.log(resultado); // 8

resultado = "4" / 2;
console.log(resultado); // 2

// Quando tentamos fazer uma operação aritmética entre strings que não seja a concatenação, obtemos NaN
resultado = "hello" - "world";
console.log(resultado); // NaN

resultado = "4" - "hello";
console.log(resultado); // NaN

// Quando usamos um operador booleano em uma operação aritmética, o true é convertido para 1 e o false para 0
resultado = "4" - true;
console.log(resultado); // 3

resultado = 4 + true;
console.log(resultado); // 5

resultado = 4 + false;
console.log(resultado); // 4

// Quando o null, está envolvido em uma operação aritmética, ele é convertido para o número 0
resultado = 4 + null;
console.log(resultado);  // 4

resultado = 4 - null;
console.log(resultado);  // 4

// Quando temos o tipo undefined envolvido em uma operação aritmética, com algum valor do tipo number, boolean ou null, obtemos NaN
resultado = 4 + undefined;
console.log(resultado);  // NaN

resultado = 4 - undefined;
console.log(resultado);  // NaN

resultado = true + undefined;
console.log(resultado);  // NaN

resultado = null + undefined;
console.log(resultado);  // NaN


// Conversão explícita - conversão de tipo manual (feita através de métodos do próprio JavaScript)

// #01 - Método Number(): converte strings numéricas e valores booleanos em números

// String para número
resultado = Number("324");
console.log(resultado); // 324

resultado = Number("324e-1") 
console.log(resultado); // 32.4

// Booleano para número
resultado = Number(true);
console.log(resultado); // 1

resultado= Number(false);
console.log(resultado); // 0

// Strings vazias e o null, retornam o valor 0
resultado = Number(null);
console.log(resultado);  // 0

resultado = Number(" ")
console.log(resultado);  // 0

// Se a string não for numérica, obteremos o NaN
resultado = Number("hello");
console.log(resultado); // NaN

resultado = Number(undefined);
console.log(resultado); // NaN

resultado = Number(NaN);
console.log(resultado); // NaN

// Também podemos utilizar os métodos parseInt(), parseFloat e Math.floor(), além do operador unário ( + ), para gerar números
resultado = parseInt("20.01");
console.log(resultado); // 20

resultado = parseFloat("20.01");
console.log(resultado); // 20.01

resultado = +"20.01";
console.log(resultado); // 20.01

resultado = Math.floor("20.01");
console.log(resultado); // 20


// #02 - Métodos String()/toString(): converte outros tipos para string
// Número para string
resultado = String(324);
console.log(resultado);  // "324"

resultado = String(2 + 4);
console.log(resultado); // "6"

//Outros tipos de dados para string
resultado = String(null);
console.log(resultado); // "null"

resultado = String(undefined);
console.log(resultado); // "undefined"

resultado = String(NaN);
console.log(resultado); // "NaN"

resultado = String(true);
console.log(resultado); // "true"

resultado = String(false);
console.log(resultado); // "false"

// using toString()
resultado = (324).toString();
console.log(resultado); // "324"

resultado = (true).toString();
console.log(resultado); // "true"


// #03 - Métodos String()/toStringBoolean(): converte outros tipos para booleano
// Obtendo false ("", 0, undefined, null, NaN)
resultado = Boolean("");
console.log(resultado); // false

resultado = Boolean(0);
console.log(resultado); // false

resultado = Boolean(undefined);
console.log(resultado); // false

resultado = Boolean(null);
console.log(resultado); // false

resultado = Boolean(NaN);
console.log(resultado); // false

// Para os demais valores, obtemos true
resultado = Boolean(324);
console.log(resultado); // true

resultado = Boolean("hello");
console.log(resultado); // true

result = Boolean(" ");
console.log(resultado); // true


/*
    OBS.:
        - JavaScript considera o 0 como false e todo número diferente de 0, como true.
        Mas, se true for convertido para um número, teremos o 1 como resultado;

        - O método String() pega o null e o undefined e os converte em string. Já o método
        toString(), não funciona quando passamos o null e o undefined, acaba apresentando 
        um erro;

        - Em JavaScript: undefined, null, 0, NaN, "", são convertidos para false, quando aplicamos
        o método Boolean();
*/