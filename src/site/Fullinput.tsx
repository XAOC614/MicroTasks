import React, {ChangeEvent, useState} from "react";

type FullinputType ={
    addTitle:(title:string)=>void
}
export const FullInput = (props:FullinputType) => {
    let [title,setTitle]= useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        {setTitle(event.currentTarget.value)}
    }
    const onClickHandler = () => {
        {props.addTitle(title)}
        setTitle("")
    }
    return(
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}