/*Ejemplo de uso del Hook usestate
crear un componente de tipo funcion y acceder a su estado privado a traves de un hook,y ademas,poder modificarlo*/

import React , {useState} from 'react';

const Ejemplo = () => {

    //valor inicial para un contador
    const valorInicial = 0

    // valir inicial para una persona
    const personaInicial = {
        nombre : 'Martin',
        email : 'martin@imaginagroup.com'
    }

    /*queremos que el valorInicial y personaInicial sean parte 
    del estado del componente para asi poder gestionar su cambio 
    y que este se vea reflejado en la vista del componente
    
    const[nombreVariable,funcionParaCambiar] = useState(valorInicial)*/

    const  [contador,setContador] = useState(valorInicial);
    const [persona,setPersona] = useState(personaInicial);


    /*funcion para actualizar el estado privado que contiene el contador */

    function incrementarContador(){
        // ? functionparaCambiar(nuevovalor)
        setContador(contador+1)
    }

    /* funcion para actualizar el estado de persona en el componente*/

    function actualizarPersona(){
        setPersona({
            nombre : 'Pepe',
            email : 'pepe@imagina.com'
        })
    }


    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR : {contador}</h2>
            <h2>DATOS DE LA PERSONA : </h2>
            <h3>NOMBRE : {persona.nombre}</h3>
            <h3>EMAIL : {persona.email}</h3>

        <div>
            {/*bloque de botones para actualizar el estado dle componente */}
            <button onClick={incrementarContador}>INCREMENTAR CONTADOR</button>
            <button onClick={actualizarPersona}>ACTUALIZAR PERSONA</button>
        </div>    
        </div>
    );
}

export default Ejemplo;
