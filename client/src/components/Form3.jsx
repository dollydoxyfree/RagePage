import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL3, config } from "../services";
import { useHistory, useParams, Link, Route } from "react-router-dom";

function Form3(props) {
  const [roadRage, setRoadRage] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [anonAuthor, setAnonAuthor] = useState("");
  const [situation, setSituation] = useState("");
  const [dreamReact, setDreamReact] = useState("");
  const [reality, setReality] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.roadRage.length > 0 && params.id) {
      const foundRoadRage = props.RoadRage.find(
        (roa) => params.id === roa.id
      );
      if (foundRoadRage) {
        setTitle(foundRoadRage.fields.title);
        setSituation(foundRoadRage.fields.situation);
        setDreamReact(foundRoadRage.fields.dreamReact);
        setReality(foundRoadRage.fields.reality);
        setAnonAuthor(foundRoadRage.fields.anonAuthor);
      }
    }
  }, [props.roadRage, params.id]);

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
      const roadRageURL = `${baseURL3}/${params.id}`;
      await axios.put(roadRageURL, { fields }, config);
    } else {
      await axios.post(baseURL3, { fields }, config);
      props.setToggleFetch((curr) => !curr);
      history.push("/road-rage");
    }
  };

  return (


    <Route path="/road-rage/new">
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
      <Link to="/road-rage">
      <h6 className='cancel'>cancel</h6>
          </Link>
        </div>
        

        </form>
      </Route>
  );
}

export default Form3;
