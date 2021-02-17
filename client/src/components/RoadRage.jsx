import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {baseURL3, config} from '../services/index.js'

function RoadRage(props) {
  const [roadRage, setRoadRage] = useState([]);
  const [toggleFetch, setToggleFetch] = useState("");
  const {
    title,
    situation,
    dreamReact,
    reality,
    anonAuthor,
  } = props.roadRage.fields;
 
  // useEffect(() => {
  //   const getRoadRageData = async () => {
  //     const res = await axios.get(baseURL3, config);
  //     setRoadRage(res.data.records);
  //     console.log(res.data.records)
  //   };
  //   getRoadRageData();
  // }, [toggleFetch]);


  return (
    <Link to='/road-rage'>

      <div className='input-container'>
        <h3>{title}</h3>
        <h6>The Scene: {situation}</h6>
        <h4>My Mind: {dreamReact}</h4>
        <h6>What Actually Happened: {reality}</h6>
        <h6>posted by {anonAuthor}</h6>
      </div>
  
    </Link>
  )
}

export default RoadRage;
