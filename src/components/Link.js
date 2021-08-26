import {
  faGithubAlt,
  faLinkedin,
  faGitlab,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Link = ({ user }) => {
  let icon = "";
  return user.rrss.map((rs) => {
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
  });
};
