import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {baseURL1, config} from '../services/index.js'

function Relationships(props) {
  const [relationships, setRelationships] = useState([]);
  const [toggleFetch, setToggleFetch] = useState("");
  

 
  useEffect(() => {
    const getRelationships = async () => {
      const res = await axios.get(baseURL1, config);
      setRelationships(res.data.records);
      console.log(res.data.records)
    };
    getRelationships();
  }, [toggleFetch]);


  return (
    <Link to='/relationships'>
      <div>

      </div>
    </Link>
  )
}

export default Relationships;
