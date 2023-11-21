import React from 'react'
import Input from './Input'
import useForm from '../hooks-criacao/useForm';

const Validacao = () => {
    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm();
    const sobrenome = useForm(false);
    

    function handleSubmit(event) {
        event.preventDefault();
        if(cep.validate() && email.validate() && nome.validate()) {
            console.log('Enviar');
        } else {
            console.log('Não enviar')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label='CEP' id='cep' type='text' placeholder='00000-000' {...cep} />
            <Input label='Email' id='email' type='email' {...email} />
            <Input label='Nome' id='nome' type='text' {...nome} />
            <Input label='Sobrenome' id='sobrenome' type='text' {...sobrenome} />
            
            <button>Enviar</button>
        </form>
    )
}

export default Validacao