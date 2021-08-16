import { Link } from "react-router-dom";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="container">
      <h1>Mateistas</h1>
      <Link to="/Profile/kira">jhonatan quirama pino</Link>
      <Link to="/Profile/DChiapa">diego chiapa</Link>
    </div>
  );
};
