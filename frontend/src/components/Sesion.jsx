import { useState } from "react";
import ContentSesion from "../elements/ContentSesion";

import styled from "styled-components";
import Imagen from "../images/carrusel/parqueadero2.jpg";
import colores from "../styles/colores";

const Fondo = styled.div`
    background-image: url(${Imagen});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    padding: 80px;

    @media (max-width: 800px) { padding: 30px; }
`;
const Contenedor = styled.div`
    margin: auto;
    max-width: 1000px;
    width: 100%;
`;
const ContenedorHeader = styled.div`
    height: 60px;
    display: flex;

    @media (max-width: 800px) { height: 40px; }
`;
const Header = styled.button`
    background-color: ${props => (props.$inLogin ? colores.azulPrimario : colores.grisOscuro)};
    cursor: ${props => (props.$inLogin ? "auto" : "pointer")};
    width: 50%;
    height: 100%;
    border: none;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${colores.blanco};
    transition: 0.7s all ease;

    &:hover{
        color: ${props => (!props.$inLogin ? colores.azulPrimario : colores.grisClaro)};
    }
`;

const Sesion = () => {
    // Para saber en que pestaña se encuentra el usuario
    const [inLogin, cambiarInLogin] = useState(true);
    
    return (
        <Fondo>
            <Contenedor>
                <ContenedorHeader>
                    <Header $inLogin={inLogin} onClick={() => cambiarInLogin(true)}>Iniciar Sesión</Header>
                    <Header $inLogin={!inLogin} onClick={() => cambiarInLogin(false)}>Registrarse</Header>
                </ContenedorHeader>
                <ContentSesion inLogin={inLogin} />
            </Contenedor>
        </Fondo>
    )
}

export default Sesion