import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {Button} from "./site/Button";



function App() {
    // const title1 = 'What to learn 1'
    // const title2 = 'What to learn 2'
    // const tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false },
    //     { id: 4, title: "Redux", isDone: false }
    // ]
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]
    // const  myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello I am VASYA')
    // }
    // // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello I am Ivan')
    // }
    const onClickHandler = (name:string) => {
        console.log(name)
    }
    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (number:number) => {
        console.log(number)
    }
    const button1Foo = (subscriber: string, age:number, address:string) => {
        console.log(subscriber,age,address)
    }
    const button2Foo = (subscriber: string, age?:number) => {
        console.log(subscriber,age)
    }

    return (
        <div className="App">
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=> foo2(100200)}>2</button>*/}
            <Button name={'MyYouTubeChannel-1'} callBack={()=>button1Foo('I am Vasya',21,'live in Minsk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={()=>button2Foo('I am Ivan',33)}/>
            <Button name={'stupidButton'} callBack={()=> button2Foo('i am Stupid Button')}/>
            {/*<NewComponent/>*/}
            {/*<Header titleForHeader = {'NEW HEADER'}/>*/}
            {/*<Body titleForBody = {'NEW BODY'}/>*/}
            {/*<div>*/}
            {/*<Todolist title={title1} titleNew={100200} tasks={tasks1}/>*/}
            {/*<Todolist title={title2} tasks={tasks2}/>*/}
            {/*</div>*/}
            {/*<Footer titleForFooter = {'NEW FOOTER'}/>*/}
        </div>
    );
}



export default App;
