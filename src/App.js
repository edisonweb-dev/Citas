import React, { Fragment } from 'react';
import Formulario from './components/formulario'

function App() {
  return (
    <Fragment>
      <h1>Administrador de paciente</h1>
      <div className="container">
         <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">

            </div>

         </div>

      </div>
    </Fragment>
  );
}

export default App;
