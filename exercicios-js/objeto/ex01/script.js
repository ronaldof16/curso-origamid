// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo

let dados = {
    nome: "Ronaldo",
    sobrenome: "Fernando",
    casado: true,
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome
    }   
}

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
    raca: "Labrador",
    idade: "10 anos",
    latir: function(pessoa) {
        if(pessoa === "homem") {
            return "Auuuuuuuuu";
        }
    }
}

console.log(cachorro.latir("homem"));
console.log(cachorro.latir("mulher"));
