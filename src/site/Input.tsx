import React, {ChangeEvent} from "react";
type InputType = {
    title:string
    setTitle:(title:string)=>void
}
export const Input = (props:InputType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        {props.setTitle(event.currentTarget.value)}
    }
    return (
        <input onChange={onChangeInputHandler} value={props.title}/>
    )
}