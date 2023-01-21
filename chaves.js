const cliente = {
    nome : "Joao",
    idade : 24 ,
    email : "joao@firma.com",
    telefone : ["1632145678","1923456789"],

};

cliente.enderecos = [
    {
        rua : "R Joao Climber",
        numero : 1234,
        apartamento : true,
        complemento : "bl 13 ap 304"
    },
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro.É necessario ter um enderecos cadastrado.");
}