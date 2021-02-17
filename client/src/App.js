import Nav from "./components/Nav";
import Home from './components/Home'
import Hospitality from "./components/Hospitality";
import { Route, Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import RoadRage from "./components/RoadRage";
import Relationships from "./components/Relationships";
import axios from "axios";
import { baseURL1, baseURL2, baseURL3, config } from "./services/index.js";
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'


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
      
      <Route path='/' exact>
      <div id='gearsGiph'><br/><br/>
        <Home />
      </div>
      </Route>

      <Route path="/relationships">
        <div className='buttons-container'>
      <Link to='/relationships/new'><button id='relButt'>Create Post</button></Link>
        <Link to='/relationships'><button>cancel</button></Link>
        </div>
        <Route path="/relationships/new">
        <div className="form1">
          <Form1
            relationships={relationships}
            setToggleFetch={setToggleFetch}
          />
        </div>
      </Route>
        <div className="relationships-container">
          {relationships.map((relationships) => (
            <Relationships relationships={relationships} />
          ))}
        </div>
      </Route>

      <Route path="/hospitality">
        <div className='buttons-container'>
      <Link to='/hospitality/new'><button id='hosButt'>Create Post</button></Link>
        <Link to='/hospitality'><button>cancel</button></Link>
        </div>
        <Route path="/hospitality/new">
        <div className="form2">
          <Form2
            hospitality={hospitality}
            setToggleFetch={setToggleFetch}
          />
        </div>
          </Route>
          
        <div className="hospitality-container">
          {hospitality.map((hospitality) => (
            <Hospitality hospitality={hospitality} />
          ))}
        </div>
      </Route>

      
      <Route path="/road-rage">

        <div className='buttons-container'>
      <Link to='/road-rage/new'><button id='roaButt'>Create Post</button></Link>
        <Link to='/road-rage'><button>cancel</button></Link>
        </div>
        <Route path="/road-rage/new">
        <div className="form3">
          <Form3
            roadRage={roadRage}
            setToggleFetch={setToggleFetch}
          />
        </div>
          </Route>


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
