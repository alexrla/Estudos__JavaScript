/* 
    - Usado somente em loops (diante de instruções condicionais);

    - Encerra o loop imediatamente;

    - Sintaxe:
        break;
*/

// Exemplos:
// #Ex.: 01 - Loop for
for(let i = 0; i < 5; ++i)  {
    if(i === 3) break;

    console.log(i + 1);
}

// #Ex.: 02 - Loop while
let i = 0;

while(i < 5)  {
    if(i === 3) break;

    console.log(i + 1);

    i++;
}

// #Ex.: 03 - Loop do...while
i = 0;

do {
    if(i === 3) break;

    console.log(i + 1);

    i++;
} while(i < 5)

/*
    - Nos exemplos dados acima, os loops são executados e, vejamos que eles não esperam a condição se tornam falsa, para serem encerrados. Quando 'i' atinge o valor 3, o loop é encerrado;

    - Em loops aninhados, a instrução break encerra o loop na qual ela se encontra (seja ele o mais interno, ou o loop externo);

    - Porém, em loops aninhados, a instrução break normalmente se encontra no loop mais interno;
*/