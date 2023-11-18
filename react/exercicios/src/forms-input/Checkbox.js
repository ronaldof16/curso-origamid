import React from 'react'

const Checkbox = () => {
    const [cores, setCores] = React.useState(['vermelho']);

    function handleChange({target}) {
        if(target.checked) {
            setCores([...cores, target.value])   
        } else {
            setCores(cores.filter((cor) => cor !== target.value))
        }
        
    }

    return (
        <form>
            <h2>Cores</h2>       
            <label><input type='checkbox' checked={cores.includes('azul')}  value='azul' onChange={handleChange}></input>Azul</label>
            <label><input type='checkbox' checked={cores.includes('vermelho')}  value='vermelho' onChange={handleChange}></input>Vermelho</label>
        </form>
    )
}

export default Checkbox