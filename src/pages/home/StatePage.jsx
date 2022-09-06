import React from 'react';
import {useLocation} from 'react-router-dom'

const StatePage = () => {

    const location = useLocation()

    console.log('Location state' ,location.state.online) //state sent
    console.log('query param' ,location.search) //query params sent



    return (
        <div>
            <h1>State : {location.state.online ? 'The user is online' : 'The is offline'}</h1>
            
        </div>
    );
};

export default StatePage;