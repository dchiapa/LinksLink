import { users } from "../assets/users.json";
import { ProfileLink } from "../components/ProfileLink";
import "../css/Home.css";

export const Home = () => {
  return (
    <div className="container">
      <h1>Mateistas</h1>
      {users.map((user) => (
        <ProfileLink user={user} key={user.id} />
      ))}
    </div>
  );
};
