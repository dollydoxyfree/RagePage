import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import {baseURL2, config} from '../services/index.js'

function Hospitality(props) {
  const [hospitality, setHospitality] = useState([]);
  const [toggleFetch, setToggleFetch] = useState("");

 
  useEffect(() => {
    const getHospData = async () => {
      const res = await axios.get(baseURL2, config);
      setHospitality(res.data.records);
      console.log(res.data.records)
    };
    getHospData();
  }, [toggleFetch]);


  return (
    <Link to='/hospitality'>
      <div>

      </div>
    </Link>
  )
}

export default Hospitality;
