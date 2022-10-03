import React from 'react';
import Contador from './components/contador';
import Jsx from './components/Jsx';
import Lista from './components/Lista';
import Formulario from './components/Formulario';


function App() {
  return (
    <div className='container mt-5'>
      <h1>Hola mundo React</h1>
      <Contador></Contador>
      <Jsx></Jsx>
      <Lista></Lista>
      <Formulario></Formulario>
        
    
    </div>
  );
}

export default App;
