import { Link } from "react-router-dom";

import "./doggos.css";

export default function Doggos(props) {
  return (
    <section className="doggos">
      <h1>OMG look at this doggo!</h1>
      <img src="https://placedog.net/640/480?random" alt="A doggo" />

      <Link to="/doggos/dog">
        <span style={{ color: "steelblue" }}>View a special doggo</span>
      </Link>
    </section>
  );
}
