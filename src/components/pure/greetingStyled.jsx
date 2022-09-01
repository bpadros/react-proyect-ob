import React , {useState} from 'react';

//definiendo estilos en constantes:

// ? estilo para usuario logueado
const loggedStyle = {
    color: 'white'
}


//? estilo para usuario no logueado

const unloggedStyle = {
    color: 'tomato',
    fontWeight : 'bold'
}



const GreetingStyled = (props) => {

    //generemos un estado para el componente
    //y asi controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false);

const greetingUser = () => (<p>Hola, {props.name}</p>)
const pleaseLogIn = () => (<p>Please log in</p>)


    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ? 
        greetingUser()
         : 
        pleaseLogIn()
        }
           
           <button onClick={()=>{
            console.log('boton pulsado')
            setLogged(!logged)
           }}>
            {logged ? 'Logout ' : 'Log in'}
           </button>
        </div>
    );
}

export default GreetingStyled;
