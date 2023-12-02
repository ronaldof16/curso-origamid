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

//et valorCompras = compras.map((produto) => +produto.preco.replace("R$ ","").replace(",", "."))

let totalCompras = compras.reduce((acumulador, produto) => {
  const precoLimpo = +produto.preco.replace("R$ ", "").replace(",",  ".")
  console.log(precoLimpo)

  return acumulador + precoLimpo
  
  
  
}, 0)


console.log(totalCompras);

