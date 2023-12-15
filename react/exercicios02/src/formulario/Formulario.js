import React from 'react';



const formFiel = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text',
    },
    {
        id: 'email',
        label: 'Email',
        type: 'text',
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password',
    },
    {
        id: 'cep',
        label: 'Cep',
        type: 'text',
    },
    {
        id: 'rua',
        label: 'Rua',
        type: 'text',
    },
    {
        id: 'numero',
        label: 'Numero',
        type: 'text',
    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text',
    },
    {
        id: 'cidade',
        label: 'Cidade',
        type: 'text',
    },
    {
        id: 'estado',
        label: 'Estado',
        type: 'text',
    }
]

const reduce = formFiel.reduce((acc, item) => {
    //console.log(acc)
    return {
        ...acc, 
        [item.id]: ''
    }
}, {});

//console.log(reduce)

const Formulario = () => {
    const [form, setForm] = React.useState(reduce)

    const [resposta, setResposta] = React.useState(null);

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value })
    }

    function handleClick(e) {
        e.preventDefault();
        fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        }).then(response => setResposta(response));
    }

    return (
        <form onSubmit={handleClick}>
            {formFiel.map(({id, label, type}) => (
                <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input id={id} type={type} value={form[id]} onChange={handleChange} />
                </div>
            ))}

            {resposta && resposta.ok && <p>Formulário Enviado com sucesso!</p>}
            <button onClick={handleClick}>Enviar</button>  
        </form>
    )
}

export default Formulario