const cliente = {
    nome : "Joao",
    idade : 24,
    email : "joao@firma.com",
    telefone : ["1223445567","11232455667"],

};

cliente.enderecos = [ 
    {
    rua : "R. Joseph Climber",
    numero : 1334,
    apartamento : true,
    complemento : "ap 344",
},
];

cliente.enderecos.push ({
    rua : "R. Joseph Ladder",
    numero : 404,
    apartamento : false,
    
});

const listaApenasApartamentos = cliente.enderecos.filter((endereco)=> endereco.apartamento === true );

console.log(listaApenasApartamentos);
