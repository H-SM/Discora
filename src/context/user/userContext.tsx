import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import UserChat from "../../components/UserChat/UserChat";
import auth from "../../firebase"
import { User, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
export interface UserChat {
  name: string;
  img: string;
  userid: string;
  joined: string;
  color: string;
}


export interface myDetailer {
  name: string;
  img: string;
  userid: string;
  joined: number;
  color: string;
}

export interface Server {
  name: string;
  // Add other details for the server
}

export interface ServerChat {
  name: string;
  // Add other details for the server
}

export interface UserContextInterface {
  userChat: UserChat,
  setUserChat: Dispatch<SetStateAction<UserChat>>,
  serverChat: ServerChat,
  setServerChat: Dispatch<SetStateAction<ServerChat>>,
  userInfo: number,
  setUserInfo: React.Dispatch<React.SetStateAction<number>>,
  server: Server,
  setServer: Dispatch<SetStateAction<Server>>,
  myDetail: myDetailer,
  SetMyDetail: Dispatch<SetStateAction<myDetailer>>,
  RegisterUser: (email: string, name: string, password: string) => void;
  signInUser: (email: string, password: string) => void;
  signInUserGoogle: () => void;
  signInUserGitHub: () => void;
  logoutUser: () => void;
  forgotPassword: (email: string) => Promise<void>;
  UserDetailsFirebase: User | null,
  setUserDetailsFirebase: Dispatch<SetStateAction<User | null>>,
}

const defaultState = {
  userChat: {
    name: "",
    img: "",
    userid: "",
    joined: "",
    color: ""
  },
  setUserChat: (userChat : UserChat) => {},
  serverChat: {
    name: "general"
  },
  setServerChat: (serverChat : ServerChat) => {},
  userInfo: 0,
  setUserInfo: (userInfo : number) => {},
  server: {
    name : "default",
  },
  setServer:(server : Server) => {},
  myDetail: {
    name: "h-s-m",
    img: "https://avatars.githubusercontent.com/u/98532264?v=4",
    userid: "h-s-m",
    joined: Date.now(),
    color: "orange"
  },
  SetMyDetail: (myDetail : myDetailer) => {},
  UserDetailsFirebase: null as User | null, // or initialize with an empty object if you prefer {}
  setUserDetailsFirebase: (user: User) => {},
} as UserContextInterface

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children : React.ReactNode
}

const UserProvider = ({children} : UserProviderProps) => {
  const [userInfo, setUserInfo] = useState(0);
  const [userChat, setUserChat] = useState({
    name: "",
    img: "",
    userid: "",
    joined: "",
    color: ""
  });
  const [serverChat, setServerChat] = useState({
      name : "general"
  });
  const [UserDetailsFirebase, setUserDetailsFirebase] = useState<User | null>(null!);

  const [myDetail, SetMyDetail] = useState({
      name: "h-s-m",
      img: "https://avatars.githubusercontent.com/u/98532264?v=4",
      userid: "h-s-m",
      joined: Date.now(),
      color: "orange"
  });
  const [server, setServer] = useState({
    name : "default"
    // make the rest of the details for the servers soon
});
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUserDetailsFirebase(res) : setUserDetailsFirebase(null);
      // TODO: do the abv for myDetails
    });

    return unsubscribe;
});

  //TODO: check the types here
  const RegisterUser = (email : string, name : string, password : string) => {
    try {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      return updateProfile(auth.currentUser!, {
        displayName : name
      })
    })
    .then(res => console.log(res));
    }catch{(err : any) => {
      console.error(err.message);
    }
    }finally {
      // setLoading -> false
    }
  };

  const signInUser = (email : string, password : string) => {
    try {
      signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log(res));
    }catch(err : any) {
      console.error(err.message);
    }finally {
      // setLoading -> false
    }
  }
  //TODO: implement ALL THE LOADING HERE NOT IN THE HOME.JSX (prevents the time out thing)
  const signInUserGoogle = () => {
    try {
      signInWithRedirect(auth, new GoogleAuthProvider())
      .then(res => console.log(res));
    }catch(err : any) {
      console.error(err.message);
    }finally {
      // setLoading -> false
    }
  }

  const signInUserGitHub = () => {
    try {
      signInWithRedirect(auth, new GithubAuthProvider())
      .then(res => console.log(res));
    }catch(err : any) {
      console.error(err.message);
    }finally {
      // setLoading -> false
    }
  }

  const logoutUser = () => {
    signOut(auth)
  }

  const forgotPassword = (email : string) => {
    return sendPasswordResetEmail(auth, email);
  }
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, userChat, setUserChat, serverChat, setServerChat,server, setServer, myDetail, SetMyDetail, RegisterUser, signInUser, logoutUser, forgotPassword, UserDetailsFirebase, setUserDetailsFirebase, signInUserGoogle, signInUserGitHub}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider

