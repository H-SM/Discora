import { useContext, useEffect } from "react";
import ServerList from "../components/ServerList";
import UserChat from "../components/UserChat/UserChat";
import { UserContext } from "../context/user/userContext";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { UserDetailsFirebase } = context;
  useEffect(() => {
    if(!UserDetailsFirebase) navigate("/login"); 
  })
  return (
    <div className="w-[100%] h-[100vh] flex flex-row">
      <ServerList />
      <UserChat />
    </div>
  );
};

export default Home;
