import { users } from "../assets/users.json";
import { ProfileLink } from "../components/ProfileLink";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="container">
      
      {users.map((user) => (
        <ProfileLink user={user} key={user.id} />
      ))}
    </div>
  );
};
