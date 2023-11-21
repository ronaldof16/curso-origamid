import React from 'react'

const InputRadio = ({ pergunta, options, id, onChange, value, active}) => {
    if(active === false) return null;

    return (
        <fieldset style={{marginBottom: '1rem', padding: '2rem'}}>
            <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
            {options.map((option) => (
                <label key={option}><input id={id} checked={value === option} onChange={onChange} type='radio' value={option}/>{option}</label>
            ))}
        </fieldset>
    )
}

export default InputRadio