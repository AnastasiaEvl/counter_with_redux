import React, {useEffect} from "react";
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {getData} from "./actions";



function App() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getData())
    },[])
    const increment = () =>{
        dispatch({type: 'PLUS'})
    }
    const decrement = () =>{
        dispatch({type: 'MINUS'})
    }
  return (
    <div className="App">
        <h1 className='App__title'>Counter with Redux</h1>
        <div className='App__counter'>
            {counter}
        </div>
        <br/>
        <div className='App__buttons'><button className='App__button' onClick={increment}>+</button>
        <button className='App__button' onClick={decrement}>-</button></div>
    </div>
  );
}

export default App;
