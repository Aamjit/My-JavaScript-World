import React, {useState} from 'react';
import './UseState.css'


const UseState = () =>{

     const [counter, setCounter] = useState(0)
     const [input,setInput] = useState("Input here")
     
     const increment =() =>{
         setCounter(counter+1)
     }

     let changeInput=(event)=>{
        const value = event.target.value;
        setInput(value)
     }
    return(
        <div>
            <h1>UseState</h1>
            <div className="display">
                <h3>Counter</h3>
                {counter}
            </div>
            <button className="button-count" onClick={increment}>Count</button>

            <div className="display">
                <h3>Onchange</h3>
                {input}
            </div>
            <input onChange={changeInput} />
        </div>
    )
 }

 export default UseState;