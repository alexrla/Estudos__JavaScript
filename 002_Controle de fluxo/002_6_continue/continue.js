/* 
    - Usado somente em loops (diante de instruções condicionais);

    - Pula a iteração atual do loop;

    - Sintaxe:
        continue;
*/

// Exemplos:
// #Ex.: 01 - Loop for
for(let i = 1; i <= 5; ++i)  {
    if(i === 3) continue;

    console.log(i);
}

// #Ex.: 02 - Loop while
let i = 0;

while(i < 5)  {
    i++;

    if(i === 3) continue;

    console.log(i);  
}

// #Ex.: 03 - Loop do...while
i = 0;

do {
    i++;

    if(i === 3) continue;

    console.log(i);
} while(i < 5)

/*
    - Nos exemplos dados acima, os loops são executados e, quando i atinge o valor 3, a iteração é pulada (por isso o valor 3 não é exibido);

    - Em loops aninhados, a instrução continue encerra o loop na qual ela se encontra (seja ele o mais interno, ou o loop externo);

    - Porém, em loops aninhados, a instrução continue normalmente se encontra no loop mais interno;
*/