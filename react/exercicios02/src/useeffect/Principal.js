import React from 'react'
import Prod from './Prod'

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const Principal = () => {
    const [produto, setProduto] = React.useState(null);

    function handleClick(e) {
        setProduto(e.target.innerText);
    }

    React.useEffect(() => {
        const produtoLocal = localStorage.getItem('produto')
        if(produtoLocal !== null) {
            setProduto(produtoLocal)
        }
    }, [])

    React.useEffect(() => {
        if(produto !== null) {
            window.localStorage.setItem('produto', produto)
        }
    }, [produto]);


    return (
        <div>
            <h1>Preferência: {produto}</h1>
            <button onClick={handleClick} style={{ margin: '1rem', padding: '0.25rem'}}>notebook</button>
            <button onClick={handleClick} style={{ margin: '1rem', padding: '0.25rem'}}>smartphone</button>
            <Prod info={produto} />
        </div>
    )
}

export default Principal