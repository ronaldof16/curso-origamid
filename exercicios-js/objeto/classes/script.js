class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Animal extends Pessoa {
    constructor(nome,raca) {
        super(nome)
        this.raca = raca;
    }
}

const prim = new Animal("rock", "viralata")

console.log(prim)



