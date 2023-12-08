import React from 'react'
import Informacoes from './Informacoes'


// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const Produto = () => {
    const [dados, setDados] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    async function handleClick({ target }) {
        setLoading(true);
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`);
        const json = await response.json();
        setDados(json)
        setLoading(false);
    }
            

    return (
        <div>
            <button onClick={handleClick} style={{ margin: '1rem' }}>smartphone</button>
            <button onClick={handleClick} style={{ margin: '1rem' }}>tablet</button>
            <button onClick={handleClick} style={{ margin: '1rem' }}>notebook</button>
            {loading && <p>Carregando...</p>}
            {!loading && dados && <Informacoes dados={dados} />}
        </div>
    )
}

export default Produto