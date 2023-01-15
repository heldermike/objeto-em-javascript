const cliente = {
    nome : "Andre",
    idade : 32,
    cpf :"12222112",
    email : "andre@dominio.com.br",

};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);