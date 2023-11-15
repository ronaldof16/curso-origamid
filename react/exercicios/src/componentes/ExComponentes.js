import React from 'react'
import Home from './Home';
import Produtos from './Produtos';


// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

  

const ExComponentes = () => {
    let Pagina;
    const { pathname } = window.location
    if (pathname === '/produtos') {
        Pagina = Produtos;
    } else {
        Pagina = Home;
    }

  return (
    <div>
        <ul>
            <li><a href='./'>Home</a></li>
            <li><a href='./produtos'>Produtos</a></li>    
        </ul>
        <Pagina />
    </div>
    
  )
}

export default ExComponentes;