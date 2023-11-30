import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Produtos from './componentes/Produtos';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Contato from './componentes/Contato';
import Produto from './componentes/Produto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='content'>
        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='produto/:id' element={<Produto />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
