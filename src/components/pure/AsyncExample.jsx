import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obtainNumber(){
        generateNumber()
        .then((response)=>alert(`Response: ${response}`))
        .catch((error)=>alert(`Something went wrong: ${error}`))
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
        .then((response)=>alert(`Response: ${response}`))
        .catch((error)=>alert(`Something went wrong: ${error}`))
    }

    async function saveSessionStorage(key,value){
        await sessionStorage.setItem(key,value)

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage(){
        saveSessionStorage('name','Martin')
        .then((response)=>{
            let value = response
            alert(`saved name: ${value}`)
        }).catch((error)=>{
            alert(`Something went wrong: ${error}`)
        }).finally(()=> {console.log('SUCCESS: Name saved and retreived')})
    }


    async function obtainMessage(){

        let promise = new Promise((resolve,reject)=>{

            setTimeout(()=>resolve('Hello World'),2000)
        })

        let message = await promise
        await alert(`Message received ${message}`)


    }

     const returnError = async()=>{
        await Promise.reject(new Error('ooops'))
     }

     const consumeError = () =>{
        returnError()
        .then((response)=>alert(`Everythins is ok : ${response}`))
        .catch((error)=>alert(`Somethinf went wrong : ${error}`))
        .finally(()=>alert('finally executed'))
     }



     const urlNotFound= async () =>{
        try{
            let response = await fetch('https://invalidURL.com')
            alert(`response : ${JSON.stringify(response)}`)
        } catch(error){
            alert(`Somethinf went wrong with your url : ${error}`)
        }
     }


     const multiplePromise = async () =>{
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URLS :${error}`))
     }



    return (
        <div>
        <h1>Async promise examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain promise Number</button>
            <button onClick={showStorage}>Save Name and show</button>
            <button onClick={obtainMessage}>Sent message un 2 seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to UnkNOWN url</button>
            <button onClick={multiplePromise}>Multiple promises</button>
        </div>
    );
};

export default AsyncExample;