import { users } from "../assets/users.json";
import {
  faGithubAlt,
  faLinkedin,
  faGitlab,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../css/Profile.css";
export const Profile = (props) => {
  let userName = props.match.params.userName;
  let user = users.filter((user) => user.userName === userName);
  let icon = "";
  return user.map((user) => (
    <section className="profile" key={user.id}>
      <img className="profile__image" src={user.img} alt="Imagen del usuario" />
      <h2 className="profile__title">Name: {user.userName}</h2>
      {user.rrss.map((rs) => {
        switch (rs.red.toLowerCase()) {
          case "linkedin":
            icon = faLinkedin;
            break;
          case "github":
            icon = faGithubAlt;
            break;
          case "gitlab":
            icon = faGitlab;
            break;
          case "faFacebook":
            icon = faFacebook;
            break;
          case "faInstagram":
            icon = faInstagram;
            break;
          default:
            break;
        }
        return (
          <a
            className="profile__link"
            href={rs.link}
            target="_blank"
            rel="noopener noreferrer"
            key={rs.red}
          >
            <FontAwesomeIcon icon={icon} />
            {rs.red.toUpperCase()}
          </a>
        );
      })}
    </section>
  ));
};
