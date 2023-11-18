import React from 'react'

const Radio = () => {
    const [dado, setDado] = React.useState('');
    const [cor, setCor] = React.useState('')

    function handleChange({target})  {
        setDado(target.value)
    }

    return (
        <form>
            <h2>Produtos</h2>
            {dado}
            <label><input type='radio' name='produto' onChange={handleChange} value='smartphone'></input>Smartphone</label>
            <label><input type='radio' name='produto' onChange={handleChange} value='notebook'></input>Notebook</label>
            <h2>Cores</h2>
            {cor}
            <label><input type='radio' name='cor' onChange={({target}) => setCor(target.value)} value='azul'></input>Azul</label>
            <label><input type='radio' name='cor' onChange={({target}) => setCor(target.value)} value='vermelho'></input>Vermelho</label>
        </form>
    )
}

export default Radio