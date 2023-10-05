// Crie uma função para verificar se um valor é Truthy
function verificar(numero) {
    return !!numero;
}

console.log(verificar());


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(x) {
    return 4 * x;
}

console.log(perimetro(5));


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}

nomeCompleto("Ronaldo", "Fernando");


// Crie uma função que verifica se um número é par
function verificaPar(x) {
    if(x % 2 === 0) {
        console.log("É par");
    } else {
        console.log("É Ímpar");
    }
}

verificaPar(6);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(dado) {
    return typeof dado;
}

console.log(tipo("nome"))
console.log(tipo(true))
console.log(tipo(2))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function nome() {
    console.log("Ronaldo")
}

addEventListener("click", (x) => { console.log("Olá")})
addEventListener("click", verificaPar)
addEventListener("mousemove", nome)