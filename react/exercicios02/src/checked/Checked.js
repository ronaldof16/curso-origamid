import React from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const Checked = () => {
    const [cores, setCores] = React.useState([]);
  
    function handleChange({ target }) {
      if (target.checked) {
        setCores([...cores, target.value]);
      } else {
        setCores(cores.filter((cor) => cor !== target.value));
      }
    }
  
    function handleChecked(cor) {
      return cores.includes(cor);
    }
  
    return (
      <form>
        {coresArray.map((cor) => (
            <div key={cor}>
                <label><input type='checkbox' value={cor} checked={handleChecked(cor)} onChange={handleChange} />{cor}</label>
            </div>
        ))}
      </form>
    );
  };

  export default Checked;
  