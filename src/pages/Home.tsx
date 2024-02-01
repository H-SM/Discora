import { useContext, useEffect, useState } from "react";
import ServerList from "../components/ServerList";
import UserChat from "../components/UserChat/UserChat";
import { UserContext } from "../context/user/userContext";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { UserDetailsFirebase } = context;
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      if (!UserDetailsFirebase) navigate("/login");
      else setLoader(false);
    }, 500);
  },[]);
  return (
    <div className="w-[100%] h-[100vh] flex flex-row">
      {!loader &&
        <>
          <ServerList />
          <UserChat />
        </>
      }
    </div>
  );
};

export default Home;
