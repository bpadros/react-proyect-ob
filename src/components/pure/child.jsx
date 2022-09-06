import React ,{useRef} from 'react';

const Child = ({name , send ,update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value
        alert(` text in input: ${text}`)
    }

    function pressButtonParams(text){
        alert(`TEXT: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }


    return (
        <div style={{background: 'cyan' ,padding:'30px'}}>
            <p onMouseOver={()=>console.log('on mouse over')}>Hello , {name}</p>
            <button onClick={()=>console.log('boton 1 pulsado')}>BOTON 1</button>

            <button onClick={pressButton}>BOTON 2</button>
            <button onClick={()=>pressButtonParams('Hello')}>BOTON 3</button>
            
            <input 
            placeholder='insert a text'
            ref={messageRef}
            onChange={(e)=>console.log('input change' , e.target.value)} 
            onCopy={()=>console.log('input copy')}
            onFocus={()=>console.log('input focus')}/>
              <button onClick={()=>send(messageRef.current.value)}>SEND MESSAGE</button>
              <div style={{marginTop:'20px'}}>
                <form onSubmit={submitName}>
                    <input
                    ref={nameRef} 
                    placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
              </div>
        </div>
    );
}

export default Child;
