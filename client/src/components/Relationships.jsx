import axios from "axios";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL1, config } from "../services/index.js";


function Relationships(props) {
  const [relationships, setRelationships] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const {
    title,
    situation,
    dreamReact,
    reality,
    anonAuthor,
  } = props.relationships.fields;



  return (





    <Link to="/relationships">
      <div className='input-container'>
        <h3>{title}</h3>
        <h6>{situation}</h6>
        <h4>{dreamReact}</h4>
        <h6>{reality}</h6>
        <h6>posted by {anonAuthor}</h6>
      </div>
    </Link>


  );
}

export default Relationships;
