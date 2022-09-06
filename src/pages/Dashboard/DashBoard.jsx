import React from 'react';
import Button from '@mui/material/Button'
import Copyright from '../../components/pure/Copyright';
import {useHistory} from 'react-router-dom'

const DashBoard = () => {

    const history = useHistory()

    const logout = () =>{
        history.push('/login')
    }



    return (
        <div>
            <Button variant="contained" onClick={logout}>Log out</Button>
            <Copyright></Copyright>

        </div>
    );
};

export default DashBoard;