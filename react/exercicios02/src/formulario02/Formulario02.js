import React from 'react';


const formCampos = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text'
    },
    {
        id: 'email',
        label: 'Email',
        type: 'text'
    },
    {
        id: 'senha',
        label: 'Senha',
        type: 'password'
    },
    {
        id: 'cep',
        label: 'Cep',
        type: 'text'
    },
    {
        id: 'rua',
        label: 'Rua',
        type: 'text'
    },
    {
        id: 'numero',
        label: 'Numero',
        type: 'text'
    },
    {
        id: 'bairro',
        label: 'Bairro',
        type: 'text'
    },
    {
        id: 'cidade',
        label: 'Cidade',
        type: 'text'
    },
    {
        id: 'estado',
        label: 'Estado',
        type: 'text'
    }
]

const reduz = formCampos.reduce((acc, campo) => {
    console.log(acc)
    return {...acc, [campo.id]: '' }
}, {})

const Formulario02 = () => {
    const [form, setForm] = React.useState(reduz)

    const [resposta, setResposta] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({...form, [id]: value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        }).then((response) => setResposta(response));
        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit}>
            {formCampos.map(({id, label, type}) => (
                <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input type={type} id={id} value={form[id]} onChange={handleChange} />
                </div>
            ))}

            {loading && <h4>Carregando...</h4>}
            {resposta && resposta.ok ? <p>Formulário enviado com sucesso!!!</p> : <p>Não foi possível enviar</p>}
            <button>Enviar</button>
        </form>
    )
}

export default Formulario02