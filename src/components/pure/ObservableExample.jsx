import React ,{useState} from 'react';
import { getNumbers } from '../services/observableServices';


const ObservableExample = () => {


   

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {

        console.log('Subscripcion to observable')
        getNumbers.subscribe({
            next(newNumber){
                    console.log('New number' ,newNumber)
                    setNumber(newNumber)
            },
            error(error){
                alert(`Something went wrong: ${error}`)
                console.log('error')
            },
            complete(){
                alert(`Finished with ${number}`)
                console.log('Done with observable')
            }
        })

        // console.log('FInished receiving numbers')
    }



    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={obtainNewNumbers}>Obtain Numbers</button>
        </div>
    );
};

export default ObservableExample;