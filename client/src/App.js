import Home from "./components/Home";
import Hospitality from './components/Hospitality'
import {Route, Link} from 'react-router-dom'
import "./App.css";
import RoadRage from './components/RoadRage'
import Relationships from "./components/Relationships";

function App() {
  return (
    <div>
  
      <Home />
      <Relationships />
      <Hospitality />
      <RoadRage />
   
    </div>
  );
}

export default App;
