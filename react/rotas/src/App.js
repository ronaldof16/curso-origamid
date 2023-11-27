import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Sobre from './componentes/Sobre';
import Header from './componentes/Header';
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada';
import './App.css'
import Login from './componentes/Login';
import Produto from './componentes/Produto';




function App() {
  return (
    <BrowserRouter > 
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />}/>
        <Route path='produto/:id/*' element={<Produto />} />
        <Route path='*' element={<PaginaNaoEncontrada />} />
      </Routes> 
    </BrowserRouter >
  );
}

export default App;
