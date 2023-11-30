import React from 'react';
import "./Contato.css";
import foto from '../img/contato.jpg'
import Head from './Head';

const Contato = () => {
  return (
    <section className='contato animeLeft'>
      <Head title='Renak | Contato' description='Página de contato' />
      <img src={foto} alt='Máquina de escrever'/>
      <div>
        <h1>Contato</h1>
        <ul className='dados'>
          <li>ronaldo@dev.com</li>
          <li>12345-1234</li>
          <li>Av. José Otávio, 125</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato