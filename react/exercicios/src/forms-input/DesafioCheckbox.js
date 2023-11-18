import React from 'react'
const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const DesafioCheckbox = () => {


    const [cores, setCores] = React.useState(['azul', 'verde']);

    function handleChange({target}) {
        if(target.checked) {
            setCores([...cores, target.value])   
        } else {
            setCores(cores.filter((cor) => cor !== target.value))
        }   
    }

    function handleChecked(cor) {
        return cores.includes(cor);
      }

    return (
        <form>
            {coresArray.map((cor) => (
                <label key={cor} style={{textTransform: 'capitalize'}}><input type='checkbox' checked={handleChecked(cor)}  value={cor} onChange={handleChange}></input>{cor}</label>
            ))}
        </form>

    )
}

export default DesafioCheckbox