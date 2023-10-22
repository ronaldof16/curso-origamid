// Retorne um número aleatório
// entre 1050 e 2000
let aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050) ;
console.log(aleatorio)


// Retorne o maior número da lista abaixo
const numeros = '4, 45, 20, 8, 9';
let arrayNumeros = numeros.split(", ");
console.log(Math.max(...arrayNumeros))


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let somaTotal = 0;                    
listaPrecos.forEach((item) => {
  item = item.toLowerCase().replace("r$ ", "").trim()
  item = item.replace(",", ".")
  item = Math.round(item)
  somaTotal += item;
})                                     

console.log(somaTotal) 

somaTotal = somaTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
  
console.log(somaTotal)
  
  