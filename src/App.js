import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "./components/Header";
import Cards from "./components/Cards";
import { fetchData } from "./redux/job_action_reducer";

// To do error handling for rendering

const App = () => {
  const { data, status, error, totalCount } = useSelector(
    (state) => state.job_action_reducer
  );
  const dispatch = useDispatch();

  const containerRef = useRef(null);
  const debouncedScroll = useRef(null);

  const [minExpFilter, setMinExpFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [salaryFilter, setSalaryFilter] = useState("");
  const [remoteFilter, setRemoteFilter] = useState("");
  const [techstackFilter, setTechstackFilter] = useState(""); //data dont exist in endpoint
  const [roleFilter, setRoleFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState(""); //data dont exist in endpoint
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    setShowData(data);
  }, [data]);

  useEffect(() => {
    let tempData = [];

    if (minExpFilter) {
      tempData = [
        ...tempData,
        ...showData.filter((item) => {
          return item.minExp >= minExpFilter;
        }),
      ];
    }

    if (salaryFilter) {
      tempData = [
        ...tempData,
        ...showData.filter((item) => {
          return item.minJdSalary >= salaryFilter.slice(0, 2);
        }),
      ];
    }

    if (remoteFilter) {
      tempData = [
        ...tempData,
        ...showData.filter((item) => {
          console.log("------", item.location, " ---- ", remoteFilter)
          if (remoteFilter === "Remote") {
            return item.location === "remote";
          } else {
            return item.location !== "remote";
          }
        }),
      ];
    }

    if (roleFilter) {
      tempData = [
        ...tempData,
        ...showData.filter((item) => {
          return item.jobRole.toLowerCase() === roleFilter.toLowerCase();
        }),
      ];
    }

    if(minExpFilter==='' && !salaryFilter && !remoteFilter && !roleFilter) {
      tempData = [...data]
    }

    setShowData(tempData);
  }, [minExpFilter, locationFilter, salaryFilter, remoteFilter, roleFilter]);

  // Function to handle changing minimum experience filter value
  const handleMinExpChange = (event) => {
    setMinExpFilter(event);
  };

  // Function to handle changing location filter value
  const handleLocationChange = (event) => {
    setLocationFilter(event);
  };

  // Function to handle changing salary filter value
  const handleSalaryChange = (event) => {
    setSalaryFilter(event);
  };

  // Function to handle changing remote filter value
  const handleRemoteChange = (event) => {
    setRemoteFilter(event);
  };

  // Function to handle changing role filter value
  const handleRoleChange = (event) => {
    setRoleFilter(event);
  };

  // Initial fetch when component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const fetchMoreData = () => {
    dispatch(fetchData());
  };

  // const fetchJobs = () => {
  //   dispatch(fetchData());
  // }

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
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={!error && status !== "loading"}
        loader={<h4>Loading...</h4>}
        endMessage={<p>Waiting for more data</p>}
      >
        <Cards data={showData} />
      </InfiniteScroll>
      {status === "loading" && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {/* <button onClick={fetchJobs} >click me</button> */}
    </div>
  );
};

export default App;
