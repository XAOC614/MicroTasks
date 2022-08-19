import React, {useState} from 'react';
import './App.css';


function App() {
    // let a = 1
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler2 = ()=>{
        setA(a=0)
        console.log(a)
    }
    return (
        <div className="App">
            <div>{a}</div>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>number</button>
        </div>
    );
}


export default App;
