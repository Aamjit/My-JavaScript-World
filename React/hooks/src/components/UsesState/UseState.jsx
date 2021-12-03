import React, {useState} from 'react';
import './UseState.css'


const UseState = () =>{

    const [counter, setCounter] = useState(0)
    const [input,setInput] = useState("Input here")
    
    const useStateContent = document.querySelector(".useState");
    const useStateButton = document.querySelector(".useStateButton")

    const showState = () =>{
        useStateContent.classList.remove(".hidden");
    }

    const closeState = () =>{
        useStateContent.classList.add(".hidden")
    }

    // useStateButton.addEventListener('click',showState)
    
    const increment = () =>{
        setCounter(counter+1)
    }

    let changeInput=(event)=>{
    const value = event.target.value;
    setInput(value)
    }
    return(
        <div>
            <button className="useStateButton" onClick={showState}>UsesState</button>
            <div className="useState hidden">
                <h1>UseState</h1>
                <div className="display">
                    <h3>Counter</h3>
                    {counter}
                </div>
                <button className="button-count" onClick={increment}>Count</button>

                <div className="display">
                    <h3>Change on type</h3>
                    {input}
                </div>
                <input onChange={changeInput} />
            </div>
        </div>
    )
}

export default UseState;