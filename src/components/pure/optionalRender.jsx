import React , {useState} from 'react';


let red = 250
let green = 0
let blue = 100

// ? estilo para usuario logueado
const loggedStyle = {
    backgroundColor:'green',
    color: 'white'
}


//? estilo para usuario no logueado

const unloggedStyle = {
    backgroundColor:`rgb ${red},${green},${blue}`,
    color: 'white',
    fontWeight : 'bold'
}


//login /logout buttons

const LoginButton = ({loginAction , propStyle}) =>{
    return (
        <button style={propStyle} onClick={loginAction}>LOGIN</button>
    )
}


const LogoutButton = ({logoutAction , propStyle}) =>{
    return (
        <button style={propStyle}  onClick={logoutAction}>LOGOUT</button>
    )
}

//? (expresion TRUE ) && expresion => se renderiza la expresion
//? (expresion FALSE) && EXPRESION => no se renderiza la expresion





const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessageS] = useState(0);

    // const updateAccess = () =>{
    //     setAccess(!access)
    // }

    const loginAction = () =>{
        setAccess(true)
    }

    const logoutAction = () =>{
        setAccess(false)
    }

    let optionalButton;

if(access){
    optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
}else{
    optionalButton = <LoginButton  propStyle={loggedStyle}  loginAction={loginAction}></LoginButton>
}

//unread messages

let addMessages = () => {
setNMessageS(nMessages+1)
}





    return (
        <div>
        {/* Optional Button*/}
            {optionalButton}
            {/*N messages unread */}
            {/* {nMessages > 0 && nMessages===1 && <p>You have {nMessages} new message...</p>}
            {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            {nMessages === 0 && <p>There are no new messages</p>} */}
            {/* Ternary operator*/}
            {access ? <div>
                {nMessages>0  ?  <p>You have {nMessages} new message{nMessages>1 ? 's' : null}...</p> : <p>There are no new messages</p>}
            <button onClick={addMessages}>{nMessages=== 0 ? 'Add your first message' : 'Add new message'}</button> 
            </div>: null}
           
        </div>
    );
}

export default OptionalRender;
