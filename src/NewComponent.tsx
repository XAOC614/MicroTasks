import React from "react";
import {FilterType} from "./App";

type NewComponentType = {
    callback: (nameButton:FilterType) => void
    current:Array<Money>
}
type Money ={
    banknots: string
    value: number
    number: string
}


export const NewComponent = (props:NewComponentType) => {
    return (
        <>
        <ul>
            {props.current.map((el,index)=> {
                return(
                    <li key={index}>
                        <span>  {el.banknots}  </span>
                        <span>  {el.value}  </span>
                        <span>  {el.number}  </span>
                    </li>
                )
            })}
        </ul>
    <div style={{marginLeft: '35px'}}>
        <button onClick={()=>props.callback('all')}> all </button>
        <button onClick={()=>props.callback('RUBLS')}> RUBLS </button>
        <button onClick={()=>props.callback('Dollars')}> Dollars </button>
    </div>
        </>
    );
}
