import { useAuth0 } from "@auth0/auth0-react";
import ServerList from "../components/ServerList";
import UserChat from "../components/UserChat/UserChat";
import { useEffect } from "react";

const Home = () => {
  const { user } = useAuth0();

  useEffect(() => {
    console.log(user);
  },[])
  return (
    <div className="w-[100%] h-[100vh] flex flex-row">
      <ServerList />
      <UserChat />
    </div>
  );
};

export default Home;
