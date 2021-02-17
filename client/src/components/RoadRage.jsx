import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {baseURL3, config} from '../services/index.js'

function RoadRage(props) {
  const [roadRage, setRoadRage] = useState([]);
  const [toggleFetch, setToggleFetch] = useState("");

 
  useEffect(() => {
    const getRoadRageData = async () => {
      const res = await axios.get(baseURL3, config);
      setRoadRage(res.data.records);
      console.log(res.data.records)
    };
    getRoadRageData();
  }, [toggleFetch]);


  return (
    <Link to='/road-rage'>
      <div>

      </div>
    </Link>
  )
}

export default RoadRage;
