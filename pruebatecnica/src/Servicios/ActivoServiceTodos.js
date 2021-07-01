import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TablaResultados, Title,Select,Button } from './styles';
import FormularioEditarActivo from '../Servicios/FormulariosEditarActivo';
const ActivoServiceTodos = () => {
  var url= 'http://localhost:8181/activos/todos';
  const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });
  const [statusAPI, setStatusAPI] = useState();
  const [mensaje, setMensaje] = useState();
  const [resultadoTipos, setResultadoTipos] = useState({ respuesta: 'KO' });
  const [selectedTipo, setSelectedTipo] = useState("-1");
  const [selectedRegistro, setSelectedRegistro] = useState("-1");
  const [mostrarFormularioEditar,setMostrarFormularioEditar] = useState(false);

  useEffect(() => {
    const consultaAPI = async () => {
      axios.get(url).then(response => {

        setRespuestaAPI(response.data.data);

      })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setStatusAPI(error.response.status);
            setMensaje(error.response.data.message)
          }

        })



    };


    consultaAPI();
  }, []);

  useEffect(() => {
    const consultarTipos = async () => {
      axios.get("http://localhost:8181/activos/tipos").then(response => {

        setResultadoTipos(response.data)

      })
    };


    consultarTipos();
  }, []);


  const buscarPortipo = async () => {

    if (selectedTipo === "-1") {

      

    } else {

      var urlTipo = "http://localhost:8181/activos/buscar/tipo/" + selectedTipo;


      axios.get(urlTipo).then(response => {
        setStatusAPI(response.data.status);
        setRespuestaAPI(response.data.data);

      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setStatusAPI(error.response.status);
          setMensaje(error.response.data.message)
        } 
      })
    }
  };


  function editarRegistro(registro) {
      
    console.log("entre a editar"+registro);
    setMostrarFormularioEditar(true);
    setSelectedRegistro(registro);

  }
  function handleSelectChange(event) {
    console.log("enrtr" + event.target.value)
    setSelectedTipo(event.target.value);
  }

  const MostrarRespuesta = () => {


    return (

      Object.keys(respuestaAPI).length > 0 ?
        Object.keys(respuestaAPI).map(key => {
          var tipo = respuestaAPI[key]['tipo'];
          

          if (tipo !== undefined) {
            console.log(tipo.name);
          }
          

          return (
            <tr key={key}>
              <td>{respuestaAPI[key]['name']}</td>
              <td>{respuestaAPI[key]['descripción']}</td>
              <td>{respuestaAPI[key]['numero']}</td>
              <td>{respuestaAPI[key]['serial']}</td>
              <td>{respuestaAPI[key]['fecha']}</td>
              <td>{respuestaAPI[key]['alto']}</td>
              <td>{respuestaAPI[key]['ancho']}</td>
              <td>{respuestaAPI[key]['largo']}</td>
              <td>{respuestaAPI[key]['peso']}</td>
              <td>{respuestaAPI[key]['valor']}</td>
              <td>{respuestaAPI[key]['tipo'] !== undefined ? respuestaAPI[key]['tipo'].name : ""}</td>
              <td>{respuestaAPI[key]['area']!== undefined ? respuestaAPI[key]['area'].name+' - ' +respuestaAPI[key]['area']['ciudad'].name : ""}</td>
              <td>{respuestaAPI[key]['persona'] !== undefined ? respuestaAPI[key]['persona'].name : ""}</td>
              <td><button onClick={() => editarRegistro(respuestaAPI[key])}>Editar</button></td>


            </tr>
          );
        })
        : null
    )
  };

  return (
    <div>
      {
        mostrarFormularioEditar?
        <div>
         <FormularioEditarActivo props={selectedRegistro}/>
          </div>
      :null}
      {!mostrarFormularioEditar?
      <div>
      <Select onChange={handleSelectChange}>
        <option value="-1">Seleccione...</option>
        {Object.keys(resultadoTipos).map(key => {

          return (
            <option value={resultadoTipos[key]['id']}>{resultadoTipos[key]['name']}</option>

          )

        })}
      </Select>

      <Button onClick={buscarPortipo}>Buscar</Button>

      <Title>RESULTADOS DE ACTIVOS</Title>

      {statusAPI === 400 ?
        <TablaResultados>
          <tbody>
            <td>{mensaje}</td>
          </tbody>
        </TablaResultados>
        :
        <TablaResultados>
          <thead>
            <td>Nombre</td>
            <td>Descripcion</td>
            <td>Numero</td>
            <td>Serial</td>
            <td>Fecha</td>
            <td>Alto</td>
            <td>Ancho</td>
            <td>Largo</td>
            <td>Peso</td>
            <td>Valor</td>
            <td>Tipo</td>
            <td>Area</td>
            <td>Persona</td>
            <td>Editar</td>
          </thead>
          <tbody>
            <MostrarRespuesta />
          </tbody>
        </TablaResultados>}
        </div>
        :null}
    </div>
  );
};

export default ActivoServiceTodos;