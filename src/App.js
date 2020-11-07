import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/formulario'
import Cita from './components/Cita'

function App() {

  //citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }

  //arreglo de citas
  const [citas, guardarCitas] = useState([]);


  //use effect operaciones cuando state cambia
  useEffect( () =>{
    if(citasIniciales){
      localStorage.getItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas])
  

  //function de las citas actuales y agrege las nuevas
  const crearCita = cita => {
    //console.log(cita);
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //funcion que elimina una cita por su id
  const eliminarCita = id => {
    //console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }

  //mensaje Condicional
  //console.log(citas.length);
  const titulo = citas.length === 0 ? 'No hay citas':'Administa tus citas'

  return (
    <Fragment>
      <h1>Administrador de paciente</h1>
      <div className="container">
         <div className="row">
            <div className="one-half column">
              <Formulario 
                crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              { citas.map( cita => ( 
                
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ) ) }
            </div>

         </div>

      </div>
    </Fragment>
  );
}

export default App;
