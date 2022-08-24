import React from "react";
// filtered microtask lesson 5(App)
// import React, {useState} from 'react';
// import './App.css';
// import {NewComponent} from "./NewComponent";
//
// export type FilterType = 'all'|'RUBLS'|'Dollars'
//
// function App() {
//     const [money, setMoney] = useState([
//         { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//         { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//         { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//         { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//         { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
//     ])
//     const [a,setA] = useState<FilterType>('all')
//
//     let currentMoney = money
//     if( a  ==='RUBLS'){
//         currentMoney = money.filter((fm)=>fm.banknots==='RUBLS')
//     }if( a  ==='Dollars'){
//         currentMoney = money.filter((fm)=>fm.banknots==='Dollars')
//     }
//     const onClickFilterHandler = (nameButton:FilterType) => {
//         setA(nameButton);
//     }
//     return (
//         <>
//             <NewComponent  callback={onClickFilterHandler} current={currentMoney} />
//             {/*<ul>*/}
//             {/*    {currentMoney.map((el,index)=> {*/}
//             {/*        return(*/}
//             {/*            <li key={index}>*/}
//             {/*                <span>  {el.banknots}  </span>*/}
//             {/*                <span>  {el.value}  </span>*/}
//             {/*                <span>  {el.number}  </span>*/}
//             {/*            </li>*/}
//             {/*        )*/}
//             {/*    })}*/}
//             {/*</ul>*/}
//             {/*<div style={{marginLeft: '35px'}}>*/}
//             {/*    <button onClick={()=>onClickFilterHandler('all')}> all </button>*/}
//             {/*    <button onClick={()=>onClickFilterHandler('RUBLS')}> RUBLS </button>*/}
//             {/*    <button onClick={()=>onClickFilterHandler('Dollars')}> Dollars </button>*/}
//             {/*</div>*/}
//         </>
//     );
// }
//
//
// export default App;
