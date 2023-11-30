import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <nav className='header'>
        <ul>
            <li>
                <NavLink className='link' to='/' end>Produtos</NavLink>
            </li>
            <li>
                <NavLink className='link' to='contato'>Contato</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header