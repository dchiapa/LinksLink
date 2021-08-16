import { Link } from "react-router-dom";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="container">
      <h1>Mateistas</h1>
      <Link to="/Profile/jhonatan" user="kira">jhonatan quirama pino</Link>
      <Link to="/Profile/diego" user="diego">diego chiapa</Link>
    </div>
  );
};

