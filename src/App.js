import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Cards from './components/Cards';
import { fetchData } from './redux/job_action_reducer';


const App = () => {

  const {data,status,error} = useSelector(state => state.job_action_reducer);
  console.log("data from App",data,status,error);

  const dispatch = useDispatch()

  const fetchJobs = () => {
    dispatch(fetchData());
  }

  return (
    <div className="App">

      <Header />
      <div>
        <Cards />
      </div>
      <button onClick={fetchJobs} >click me</button>
    </div>
  );
}

export default App;
