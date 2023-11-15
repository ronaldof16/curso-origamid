import React from 'react'
import Titulo from './Titulo';

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

const Produtos = () => {
  return (
    <ul>
        <Titulo texto='Produtos' />
        {produtos.map(({nome, propriedades}) => (
            <li key={nome}>{nome} 
                <ul>
                    {propriedades.map((propriedade) => (
                        <li key={propriedade}>{propriedade}</li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
  ) 
}

export default Produtos