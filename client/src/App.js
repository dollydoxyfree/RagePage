import Nav from "./components/Nav";
import Home from "./components/Home";
import Hospitality from "./components/Hospitality";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import RoadRage from "./components/RoadRage";
import Relationships from "./components/Relationships";
import axios from "axios";
import { baseURL1, baseURL2, baseURL3, config } from "./services/index.js";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Handles from './components/Handles'

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
      console.log(res.data.records);
    };
    getRoadRageData();
  }, [toggleFetch]);

  return (
    <div className="header-div">

      <Handles />

      <div className="title-container">
        <header>
          <div className="ragePage">
            
            <h1 id="title1">RAGE☠︎PAGE</h1>
          </div>
          <h3 id="title2">...What Really GRINDS My Gears...</h3>
        </header>


      </div>

      <div className="nav-div">
        <Nav />
      </div>

      <Route path="/" exact>
        <div className="gearsGiph">
          <br/>
          <Home />
      </div>
      </Route>

      <Route path="/relationships" >
        <div className="section">
          <h1>Relationships</h1>
        </div>

        <div className="buttons-container">
          <Link to="/relationships/new">
            <button id="relButt">Create Post</button>
          </Link>
        </div>

        
        <Route path="/relationships/new" exact> 
          <div className="form1">
            <Form1
              relationships={relationships}
              setToggleFetch={setToggleFetch}
            />
          </div>
        </Route>

        <Route path='/relationships' exact>
        <div className="relationships-container">
          {relationships.map((relationships) => (
            <Relationships relationships={relationships} />
          ))}
          </div>
          </Route>
      </Route>

      <Route path="/hospitality">
        <div className="section">
          {" "}
          <h1>Business</h1>
        </div>

        <div className="buttons-container">
          <Link to="/hospitality/new">
            <button id="hosButt">Create Post</button>
          </Link>
        </div>

        <Route path="/hospitality/new" >
          <div className="form2">
            <Form2 hospitality={hospitality} setToggleFetch={setToggleFetch} />
          </div>
        </Route>

        <Route path='/hospitality' exact>
        <div className="hospitality-container">
          {hospitality.map((hospitality) => (
            <Hospitality hospitality={hospitality} />
          ))}
          </div>
          </Route>
      </Route>

      <Route path="/road-rage">
        <div className="section">
          {" "}
          <h1>Road Rage</h1>
        </div>

        <div className="buttons-container">
          <Link to="/road-rage/new" exact>
            <button id="roaButt">Create Post</button>
          </Link>
        </div>
        <Route path="/road-rage/new">
          <div className="form3">
            <Form3 roadRage={roadRage} setToggleFetch={setToggleFetch} />
          </div>
        </Route>
<Route path='/road-rage' exact>
        <div className="road-rage-container">
          {roadRage.map((roadRage) => (
            <RoadRage roadRage={roadRage} />
          ))}
          </div>
          </Route>
      </Route>
   
    </div>


  );
}

export default App;
