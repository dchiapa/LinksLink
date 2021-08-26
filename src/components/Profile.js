import { users } from "../assets/users.json";
import { Link } from "../components/Link";
import { useParams } from "react-router";
import "../css/Profile.css";

export const Profile = () => {

  const { userName } = useParams();
  let user = users.filter((user) => user.userName === userName);

  return user.map((user) => (
    <section className="profile" key={ user.id }>
      <img className="profile__image" src={ user.img } alt="Imagen del usuario" />
      <h2 className="profile__title">Name: { user.userName }</h2>
      <Link user={ user } />
    </section>
  ));
  
};
