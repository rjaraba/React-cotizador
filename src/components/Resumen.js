import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../Helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;


const Resumen = ({datos}) => {

    //Extraer de datos para no poner datos.marca, datos.plan, etc...
    const {marca, year, plan} = datos;

    if (marca === '' || year === '' || plan === '') {
        return null;
    }
    const marcaNew = primerMayuscula(marca);
    const planNew = primerMayuscula(plan);

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { marcaNew } </li>
                <li>Plan: { planNew } </li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContenedorResumen>
     );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;