import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const reduce = perguntas.reduce((acc, item) => {
  console.log(acc);
  return {...acc, [item.id]: ''}
}, {})


const Desafio = () => {
  const [respostas, setRespostas] = React.useState(reduce)

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);
 
  function handleChange({target}) {
    setRespostas({...respostas, [target.id]: target.value})
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta);
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`)
  }

  function handleClick() {
    if(slide < perguntas.length -1) {
      setSlide(slide + 1)
    } else {
      setSlide(slide + 1)
      resultadoFinal()
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      {perguntas.map((pergunta, index) => (
        <Radio key={pergunta.id} active={slide === index} {...pergunta} onChange={handleChange} value={respostas[pergunta.id]}/>
      ))}

      {resultado ? resultado : <button onClick={handleClick}>Próxima</button>}
      
    </form>
  )
}

export default Desafio