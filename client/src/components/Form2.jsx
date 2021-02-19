import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL2, config } from "../services";
import { useHistory, useParams, Link, Route } from "react-router-dom";

function Form2(props) {
  const [hospitality, setHospitality] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [anonAuthor, setAnonAuthor] = useState("");
  const [situation, setSituation] = useState("");
  const [dreamReact, setDreamReact] = useState("");
  const [reality, setReality] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.hospitality.length > 0 && params.id) {
      const foundHospitality = props.Hospitality.find(
        (hos) => params.id === hos.id
      );
      if (foundHospitality) {
        setTitle(foundHospitality.fields.title);
        setSituation(foundHospitality.fields.situation);
        setDreamReact(foundHospitality.fields.dreamReact);
        setReality(foundHospitality.fields.reality);
        setAnonAuthor(foundHospitality.fields.anonAuthor);
      }
    }
  }, [props.hospitality, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      situation,
      dreamReact,
      reality,
      anonAuthor,
    };

    if (params.id) {
      const hospitalityURL = `${baseURL2}/${params.id}`;
      await axios.put(hospitalityURL, { fields }, config);
    } else {
      await axios.post(baseURL2, { fields }, config);
      props.setToggleFetch((curr) => !curr);
      history.push("/hospitality");
    }
  };

  return (




    <Route path="/hospitality/new">

        
      <form onSubmit={handleSubmit}>
        <h4>VENT</h4>
        <label>Title</label><br/>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <label>Situation </label><br/>
        <textarea
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />
        <br />
        <br />
        <label>I WISH I could of </label><br/>
        <textarea
          value={dreamReact}
          onChange={(e) => setDreamReact(e.target.value)}
        />
        <br />
        <br />
        <label>Reality</label><br/>
        <textarea value={reality} onChange={(e) => setReality(e.target.value)} />
        <br />
        <br />
        <label>name or alias</label><br/>
        <input
          value={anonAuthor}
          onChange={(e) => setAnonAuthor(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="submit">RAGE</button>

        
        <div className='cancel'>
      <Link to="/hospitality">
            <button>cancel</button>
          </Link>
        </div>
        

        </form>

        
      </Route>
  );
}

export default Form2;
