import React from 'react';
import {useLocation,useHistory} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const history = useHistory()

    console.log('we are in route' , location.pathname )

    const navigate = (path) =>{
        history.push(path)
    }

    const goBack = () =>{
        history.goBack()
    }

    const goForward = () =>{
        history.goForward()
    }


    return (
        <div>
           <h1>About | Faqs Page</h1> 
           <div>
            <button onClick={()=>navigate('/')}>
                Go to home
            </button>
            <button onClick={goBack}>
                Go back
            </button>
            <button onClick={goForward}>
                Go forward
            </button>
           </div>
        </div>
    );
};

export default AboutPage;