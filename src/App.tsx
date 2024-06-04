import React from 'react';
import { Element } from 'react-scroll';
import './index.css';
import Cv from './screens/cv';
import Formulaire from './screens/formulaire';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-[#111F44] text-white">
      <nav>
        <NavLink to='/formulaire'> Formulaire</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={ <Cv />} />
        <Route path='/formulaire' element={ <Formulaire />} />

      </Routes>
      
    </div>
  );
}




export default App;
