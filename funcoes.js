const cliente ={
    nome : "Joao",
    idade : 33,
    email : "joao@firma.com",
    telefone : ["1123456789","1187654321"],
    saldo : 200,
    efetuaPagamento : function(valor) {
        if(valor > this.saldo ) {
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor ;
            console.log(`Pagamento realizado . Novo saldo : ¨${this.saldo}`);
        }
    },
};

 cliente.efetuaPagamento(25);