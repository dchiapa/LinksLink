import { Link } from "react-router-dom";
import "../css/ProfileLink.css";
export const ProfileLink = ({ user }) => {
  return (
    <Link to={`/profile/${user.userName}`}>
      <img src={user.img} alt="Imagen del usuario" />
      {user.userName}
    </Link>
  );
};
