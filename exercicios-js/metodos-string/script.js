// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

let somaTaxas = 0;
let somaRecebimentos = 0;
  transacoes.forEach(item => {
    const numeroLimpo = +item.valor.replace("R$ ", "");
    if(item.descricao.slice(0, 4) === "Taxa") {
        somaTaxas += numeroLimpo;
    } else if(item.descricao.slice(0, 4) === "Rece") {
      somaRecebimentos += numeroLimpo;
  }
  })

  console.log(somaTaxas)
  console.log(somaRecebimentos)
  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  let transportesArray = transportes.split(';');
  console.log(transportesArray)
  let transportesString = transportesArray.join(', ');
  console.log(transportesString)
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

  let htmlA = html.split("span").join("a");
  console.log(htmlA)
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  let frase2 = frase.charAt(frase.length - 1)
  console.log(frase2)
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
let totalTaxas = 0;
transacoes2.forEach((item) => {
  item = item.trim().toLowerCase().slice(0,4)
  if(item === "taxa") {
    totalTaxas++
  }
})

console.log(totalTaxas)



  
  
  