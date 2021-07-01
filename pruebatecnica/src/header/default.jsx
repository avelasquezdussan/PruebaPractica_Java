import React, { useState } from 'react';
import ActivoServiceTodos from '../Servicios/ActivoServiceTodos';
import FormularioCrearActivo from '../Servicios/FormularioCrearActivo'

import { Title, DivHeader, DivNavBar, NavBarItem } from './styles';

function Header(props) {

    const [mostrarActivos, setMostrarActivos] = useState(true);
    const [mostrarNuevo, setMostrarNuevo] = useState(false);
    function mostrarA() {

        setMostrarActivos(true);
        setMostrarNuevo(false);
    }

    function nuevoA() {

        setMostrarActivos(false);
        setMostrarNuevo(true);
    }

    return (

        <div style={{
            maxWidth: '1280px',
            padding: '0 10px',
            margin: '0 auto',
            zIndex: '10'
        }}>
            <Title>ADMINISTRADOR DE ACTIVOS FIJOS</Title>
            <DivHeader>

                <DivNavBar>

                    <NavBarItem onClick={mostrarA}>
                        <span>Activos</span>
                    </NavBarItem>
                    <NavBarItem onClick={nuevoA}>
                        <span>Nuevos Activos</span>
                    </NavBarItem>

                </DivNavBar>


            </DivHeader>
            <hr />
            {mostrarActivos ?

                <ActivoServiceTodos />

                : null}

            {mostrarNuevo ?

                <FormularioCrearActivo />

                : null}


        </div>

    )
}
export default Header;