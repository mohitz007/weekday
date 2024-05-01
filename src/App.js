import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Cards from './components/Cards';
import { fetchData } from './redux/job_action_reducer';


// To do error handling for rendering

const App = () => {

  const {data,status,error} = useSelector(state => state.job_action_reducer);
  console.log("data from App",data,status,error);

  const [minExpFilter, setMinExpFilter] = useState(0);
  const [locationFilter, setLocationFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState(0);
  const [remoteFilter, setRemoteFilter] = useState(true);
  const [techstackFilter, setTechstackFilter] = useState(''); //data dont exist in endpoint
  const [roleFilter, setRoleFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState(''); //data dont exist in endpoint
  

  // Function to handle changing minimum experience filter value
  const handleMinExpChange = (event) => {
    setMinExpFilter(event.target.value);
  };

  // Function to handle changing location filter value
  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  // Function to handle changing salary filter value
  const handleSalaryChange = (event) => {
    setSalaryFilter(event.target.value);
  };

  // Function to handle changing remote filter value
  const handleRemoteChange = (event) => {
    setRemoteFilter(event.target.checked);
  };

 
  // Function to handle changing role filter value
  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  // Function to fetch more data when reaching bottom
  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      // Fetch more data if not already loading
      if (status !== 'loading') {
        dispatch(fetchData());
      }
    }
  };

  useEffect(() => {
    // Add event listener to detect scrolling
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [status]); 

  // Initial fetch when component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const dispatch = useDispatch()

  const fetchJobs = () => {
    dispatch(fetchData());
  }



  return (
    <div className="App">
      <div>
        <Header
          minExpFilter={minExpFilter}
          locationFilter={locationFilter}
          salaryFilter={salaryFilter}
          remoteFilter={remoteFilter}
          roleFilter={roleFilter}
          handleMinExpChange={handleMinExpChange}
          handleLocationChange={handleLocationChange}
          handleSalaryChange={handleSalaryChange}
          handleRemoteChange={handleRemoteChange}
          handleRoleChange={handleRoleChange}
         />
      </div>
      <div>
        <Cards
          data={data}
         />
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {/* <button onClick={fetchJobs} >click me</button> */}
    </div>
  );
}

export default App;
