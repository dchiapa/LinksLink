import { users } from "../assets/users.json";
import { useParams } from "react-router-dom";

export const Profile = () => {
 let { id } = useParams();
  /* const userPreview = props.match.params.id.slice(1, props.match.params.id.length);
  users.filter((user) => {
    if (user.userName === userPreview) {
      console.log(user);
    }
  }); */

  return (
    <div className="container">
      {console.log(users)}
      {
            users
              .filter((user) => user.id === id)
              .map((user) => (
                <div className="full-card" key={ user.id }>
                  <h2>Name: {user.userName}</h2>
                  <h3>{user.github}</h3>
                </div>
              ))}
    </div>
  );
};
