import React, {useState} from 'react';
import './App.css';
import {FullInput,} from "./site/Fullinput";
import {Input} from "./site/Input";

import {Button1} from "./site/Button1";



function App() {
    let[message,setMessage] = useState([
        {message: ' message 1'},
        {message: ' message 2'},
        {message: ' message 3'}
    ])

    let [title,setTitle]= useState('')


    const addTitle = (title:string) => {
        let newMessage = {message :title}
        setMessage([newMessage,...message])
    }
    const callBackButtonHandler = () => {
        addTitle(title)
        setTitle('')
    }
    return (
      <div className = {'App'}>
          {/*<FullInput addTitle={addTitle}/>*/}
          <Input title={title} setTitle={setTitle} />
          <Button1 name={'+'} callBack={callBackButtonHandler}/>
          {message.map((el , index)=> {
              return(
                  <div key={index}>{el.message}</div>
              )
          })}

      </div>
    );
}


export default App;
