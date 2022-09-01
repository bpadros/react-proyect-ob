/**
 * Ejemplo para entener el suo de props.cildren
 * 
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de children Props</h1>
            <h2>
            Nombre : {props.nombre}
            </h2>
            {/*props.children pintara por defecto
            aquello que se encuentre entra las etiquetas de apertura y cierra
            de este componenete desde el componente de orden superior*/}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
