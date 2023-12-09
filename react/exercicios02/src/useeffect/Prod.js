import React from 'react'

const Prod = ({ info }) => {
    const [dados, setDados] = React.useState(null);
    console.log(info)
    
    React.useEffect(() => {
        if(info !== null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${info}`)
            .then(r => r.json())
            .then(r => {
                setDados(r)
            })
        }
    }, [info]);
 
    if(dados === null) return null
    return (
        <div>
            <h1>{dados.nome}</h1>
            <p>{dados.preco}</p>
        </div>
    )
}

export default Prod