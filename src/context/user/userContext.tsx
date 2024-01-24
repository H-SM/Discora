import { createContext } from "react";

interface User {
  name: string;
  img: string;
  userid: string;
  joined: string;
  color: string;
}

interface Server {
  name: string;
  // Add other details for the server
}

interface UserContextProps {
  userInfo: number;
  setUserInfo: React.Dispatch<React.SetStateAction<number>>;
  userChat: User;
  setUserChat: React.Dispatch<React.SetStateAction<User>>;
  serverChat: { name: string };
  setServerChat: React.Dispatch<React.SetStateAction<{ name: string }>>;
  server: Server;
  setServer: React.Dispatch<React.SetStateAction<Server>>;
  myDetail: User;
  SetMyDetail: React.Dispatch<React.SetStateAction<User>>;
}

const userContext = createContext<UserContextProps | undefined>(undefined);

export default userContext;
