/*
    O que ele faz?
        - Transforma um número indeterminado de argumentos, passados
        para uma função, em um array
*/

// Sem
function showNames(names)   {
    console.log(names);
}

// Com
function showNamesTwo(...names)   {
    console.log(names);
}

showNames("Beatriz", "Luan", "Laura");
showNamesTwo("Beatriz", "Luan", "Laura");

// +Exemplo
function listUsers(users, ...newUsers)  {
    const totalUsers = [
        ...users,
        ...newUsers
    ];

    console.log(totalUsers);
}

const users = ["João", "André"];

listUsers(users, "Lucas");