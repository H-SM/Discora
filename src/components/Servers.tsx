import { useContext } from "react";
import { UserContext } from "../context/user/userContext";
import ServerIcon from "./Servers/ServerIcon";
    
const Servers = () => {
    const context = useContext(UserContext);
    const { setUserInfo, setServer, setServerChat } = context!;
    const handleClick : (namer: string) => void = (namer) => {
      setUserInfo(2);
      setServer({
        name : namer
      });
      setServerChat({
        name : "general"
    });
    }
  return (
    <div className="flex flex-col gap-2 ">
      <ServerIcon name="hsm-s" img=""/>
      <ServerIcon name="sidserver" img="https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"/>
    </div>
  );
};

export default Servers;
