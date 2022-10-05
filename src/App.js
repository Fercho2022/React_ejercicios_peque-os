import React from 'react';

import Saludo from './components/Saludo';


function App() {
  return (
    <div className='container mt-5'>
      <h1>Component</h1>
        <Saludo persona="Juanito"/>
        <Saludo persona="Ignacio"/>
        <Saludo persona="Catalina"/>
        
    
    </div>
  );
}

export default App;
