// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos)

let objetoCursos = arrayCursos.map((item) => {
  const titulo = item.querySelector("h1").innerText;
  const descricao = item.querySelector(".aulas").innerText;
  const aulas = item.querySelector(".aulas").innerText;
  const horas = item.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(objetoCursos)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const arrayNumeros = numeros.filter((item) => {
  return item > 100
});

console.log(arrayNumeros)


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const arrayInstrumentos = instrumentos.some((item) => {
  return item === "Baixo";
})

console.log(arrayInstrumentos)


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let arrayCompras = compras.reduce((acumulador, item) => {
  let valor = Number(item.preco.replace("R$ ", "").replace(",", "."));
  console.log(valor);
  return acumulador + valor;
  
}, 0)

console.log(`O total das compras é de R$ ${arrayCompras}`) 
  
  