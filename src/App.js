import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Cards from './components/Cards';
import { fetchData } from './redux/job_action_reducer';


const App = () => {

  const data = useSelector(state => state.job_action_reducer.data);
  console.log(data);

  const dispatch = useDispatch()


  return (
    <div className="App">

      <Header />
      <div>
        <Cards />
      </div>
      <button onClick={() => dispatch(fetchData)} >click me</button>
    </div>
  );
}

export default App;
