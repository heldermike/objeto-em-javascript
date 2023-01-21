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

function ligaParaCliente(telefoneComercial,telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda)