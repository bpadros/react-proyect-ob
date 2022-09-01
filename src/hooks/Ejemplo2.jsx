/* ejemplo de uso de :
-useState()
-useRef()
-useEffect()
*/


import React ,{useState, useEffect , useRef} from 'react';

const Ejemplo2 = () => {

    //vamos a crear dos contadores distintos 
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a crear una referencia con UseRef para asociar
    //una variable con un elemento del DOM del componente (vista html)
    const miRef = useRef()

    function incrementarUno(){
    setContador1(contador1+1)
    }

    function incrementarDos(){
        setContador2(contador2+1) 
    }

    /*trabajando con UseEffect */

    /* 
    ? caso 1 : Ejecutar un snippet de codigo
    cada vez que haya un cambio en el estado del componente
    se ejectuta aquello que este dentro del useEffect*/

//   useEffect(() => {
//    console.log("cambio en el estado del componente")
//    console.log("mostrando refeencia a elemento del DOM")
//    console.log(miRef)
//   })

/*
? caso 2 : ejecutar solo cuando cambie contador 1 
cada vez que haya un cambio en contador 1 , se ejecuta lo que diga el el useEffect()
en caso de que cambie contador2 , no habra ejecucion */

// useEffect(() => {
//     console.log("cambio en el estado del CONTADOR1")
//     console.log("mostrando refeencia a elemento del DOM")
//     console.log(miRef)
// }, [contador1]);

/*
? caso 2 : ejecutar solo cuando cambie contador 1 o contador 2
cada vez que haya un cambio en contador 1 , se ejecuta lo que diga el el useEffect()
cada vez que haya un cambio en contador 2 , se ejecuta lo que diga el el useEffect() */

useEffect(() => {
    console.log("cambio en el estado del CONTADOR1")
    console.log("mostrando refeencia a elemento del DOM")
    console.log(miRef)
}, [contador1,contador2]);









    return (
        <div>
            <h1>Ejemplo de useState, useRef y UseEffect</h1>
            <h2>CONTADOR 1 : {contador1}</h2>
            <h2>CONTADOR 2 : {contador2}</h2>
            {/* elemento referenciado*/ }
            <h4 ref={miRef}>
                Ejemplo del elemento referenciado
            </h4>

        <div>
            {/*botones para cambiar los contadores */}
            <button onClick={incrementarUno}>INCREMENTAR UNO</button>
            <button onClick={incrementarDos}>INCREMENTAR DOS</button>
        </div>    
        </div>
    );
}

export default Ejemplo2;
