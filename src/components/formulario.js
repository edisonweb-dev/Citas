import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

  //Crear state de citas

  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
  });

  const [error, actualizarError] = useState(false);


  //funcion se ejecuta al hacer un input
  const actualizarState = e =>{
      //e.target.value
      actualizarCita({
        ...cita,
        [e.target.name] : e.target.value
      })
  }

  //extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita

  //cuando envia el formulario
  const submitCita = e => {
    e.preventDefault()

    //Validar
    if( 
      mascota.trim() === '' ||  
      propietario.trim() === '' ||  
      fecha.trim() === '' ||  
      hora.trim() === '' ||  
      sintomas.trim() === '' 
      ){
        
        actualizarError(true);
        return;
    }

    actualizarError(false);
    //Asignar un Id
    cita.id = uuidv4();
    

    //Crear la cita
    crearCita(cita)

    //Reiniciar el form
    actualizarCita({
      mascota: '',
      propietario:'',
      fecha:'',
      hora:'',
      sintomas:''
    })
  }

  return (
    <Fragment>
      <h2>Desde Formulario</h2>

      { error ?  <p className="alerta-error">Todos los campos son Obligatorio</p> : null }

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="nombre propietario"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        
        <label>sintomas</label>
        <textarea 
        className="u-full-width"
        name="sintomas"
        onChange={actualizarState}
        value={sintomas}
        >

        </textarea>

        <button 
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar Nota
        </button>

      </form>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}
export default Formulario;