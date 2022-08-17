import React from "react";

// type NewComponentPropsType ={
//     students: Array <studentType>
// }
// type studentType ={
//     id:number
//     name:string
//     age:number
//
// }

export const NewComponent = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return(
        <div>
            {topCars.map((el , index) => {
                return(
                    <table>
                        <td>{index}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </table>
                )
            })}
            {/*<ul>*/}
            {/*    {props.students.map((el) => {*/}
            {/*        return( <li key={el.id}>*/}
            {/*                <span>{el.name}</span>*/}
            {/*                <span>  age:  {el.age}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*    )*/}
            {/*    }*/}
            {/*   */}
            {/*</ul>*/}
        </div>
    )
}