import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL1, config } from "../services";
import { useHistory, useParams, Link, Route } from "react-router-dom";

function Form1(props) {
  const [relationships, setRelationships] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)
  const [anonAuthor, setAnonAuthor] = useState("");
  const [situation, setSituation] = useState("");
  const [dreamReact, setDreamReact] = useState("");
  const [reality, setReality] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.relationships.length > 0 && params.id) {
      const foundRelationships = props.relationships.find(
        (rel) => params.id === rel.id
      );
      if (foundRelationships) {
        setTitle(foundRelationships.fields.title);
        setSituation(foundRelationships.fields.situation);
        setDreamReact(foundRelationships.fields.dreamReact);
        setReality(foundRelationships.fields.reality);
        setAnonAuthor(foundRelationships.fields.anonAuthor);
      }
    }
  }, [props.relationships, params.id]);

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
      const relationshipURL = `${baseURL1}/${params.id}`;
      await axios.put(relationshipURL, { fields }, config);
    } else {
      await axios.post(baseURL1, { fields }, config);
      props.setToggleFetch((curr) => !curr);
      history.push("/relationships");
    }
  };

  return (


    <Route path="/relationships/new">
      <form onSubmit={handleSubmit}>
        <h4>VENT</h4>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <br />
        <label>Situation </label>
        <textarea
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />
        <br />
        <br />
        <label>I WISH I could of </label>
        <textarea
          value={dreamReact}
          onChange={(e) => setDreamReact(e.target.value)}
        />
        <br />
        <br />
        <label>Reality</label>
        <textarea value={reality} onChange={(e) => setReality(e.target.value)} />
        <br />
        <br />
        <label>name or alias</label>
        <input
          value={anonAuthor}
          onChange={(e) => setAnonAuthor(e.target.value)}
        />{" "}
        <br />
        <br />
        <button type="submit">RAGE</button>
        </form>
      </Route>
  );
}

export default Form1;
