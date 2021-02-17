import Nav from "./components/Nav";
import Hospitality from "./components/Hospitality";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import RoadRage from "./components/RoadRage";
import Relationships from "./components/Relationships";
import axios from "axios";
import { baseURL1, baseURL2, baseURL3, config } from "./services/index.js";
import Form1 from './components/Form1'

function App() {
  const [relationships, setRelationships] = useState([]);
  const [hospitality, setHospitality] = useState([]);
  const [roadRage, setRoadRage] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getRelationships = async () => {
      const res = await axios.get(baseURL1, config);
      setRelationships(res.data.records);
      console.log(res.data.records);
    };
    getRelationships();
  }, [toggleFetch]);


  useEffect(() => {
    const getHospitality = async () => {
      const res = await axios.get(baseURL2, config);
      setHospitality(res.data.records);
      console.log(res.data.records);
    };
    getHospitality();
  }, [toggleFetch]);


   
  useEffect(() => {
    const getRoadRageData = async () => {
      const res = await axios.get(baseURL3, config);
      setRoadRage(res.data.records);
      console.log(res.data.records)
    };
    getRoadRageData();
  }, [toggleFetch]);


  return (
    <div>
      <header className='title-container'>
        <h1 id="title1">WGMG</h1>
        <h3 id="title2">What GRINDS My Gears</h3>
      </header>

      <div>
        <Nav />
      </div>

      <Route path="/relationships">
        <div className="relationships-container">
          {relationships.map((relationships) => (
            <Relationships relationships={relationships} />
          ))}
        </div>
      </Route>

      <Route path="/hospitality">
        <div className="hospitality-container">
          {hospitality.map((hospitality) => (
            <Hospitality hospitality={hospitality} />
          ))}
        </div>
      </Route>

      
      <Route path="/road-rage">
        <div className="road-rage-container">
          {roadRage.map((roadRage) => (
            <RoadRage roadRage={roadRage} />
          ))}
        </div>
      </Route>

    </div>
  );
}

export default App;
