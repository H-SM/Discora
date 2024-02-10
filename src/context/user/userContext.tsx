import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";
import UserChat from "../../components/UserChat/UserChat";
import { GithubAuthProvider, GoogleAuthProvider, User, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase";
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
  joined: string;
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
  Loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  server: Server,
  setServer: Dispatch<SetStateAction<Server>>,
  myDetail: myDetailer,
  SetMyDetail: Dispatch<SetStateAction<myDetailer>>,
  RegisterUser: (email: string, name: string, password: string) => void;
  signInUser: (email: string, password: string) => void;
  signInUserGitHub: () => void;
  signInUserGoogle: () => void;
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
  setUserChat: (userChat: UserChat) => { },
  serverChat: {
    name: "general"
  },
  setServerChat: (serverChat: ServerChat) => { },
  userInfo: 0,
  setUserInfo: (userInfo: number) => { },
  Loading: false,
  setLoading: (Loading: boolean) => { },
  server: {
    name: "default",
  },
  setServer: (server: Server) => { },
  myDetail: {
    name: "",
    img: "",
    userid: "",
    joined: "",
    color: "",
  },
  SetMyDetail: (myDetail: myDetailer) => { },
  UserDetailsFirebase: null as User | null, // or initialize with an empty object if you prefer {}
  setUserDetailsFirebase: (user: User) => { },
} as UserContextInterface

export const UserContext = createContext(defaultState);

type UserProviderProps = {
  children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [userInfo, setUserInfo] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [userChat, setUserChat] = useState({
    name: "",
    img: "",
    userid: "",
    joined: "",
    color: ""
  });
  const [serverChat, setServerChat] = useState({
    name: "general"
  });
  const [UserDetailsFirebase, setUserDetailsFirebase] = useState<User | null>(null!);

  const host = "http://localhost:8000";

  const [myDetail, SetMyDetail] = useState({
    name: "",
    img: "",
    userid: "",
    joined: "",
    color: "",
  });
  const [server, setServer] = useState({
    name: "default"
    // make the rest of the details for the servers soon
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUserDetailsFirebase(res) : setUserDetailsFirebase(null);
      // TODO: do the abv for myDetails
    });

    return unsubscribe;
  });

  const RegisterUser = (email: string, name: string, password: string) => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          return updateProfile(auth.currentUser!, {
            displayName: name
          })
        })
        .then(res => console.log(res));
    } catch {
      (err: any) => {
        console.error(err.message);
      }
    } finally {
      // setLoading -> false
    }
  };

  const getuserinfo = async (id : string, name : string, email : string, img : string, username : string, joined : string, color : string) => {
    try {
      const response = await fetch(`${host}/user/${id}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, name, email, img, username, joined, color}) 
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const json = await response.json();
      SetMyDetail({
        name: json.username!,
        img: json.img!,
        userid: json.id,
        joined: json.joined!,
        color: json.color!,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  const signInUser = (email: string, password: string) => {
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then(res => {
          
          SetMyDetail({
            name: res.user.displayName!,
            img: res.user.photoURL!,
            userid: res.user.uid,
            joined: res.user.metadata.creationTime!,
            color: "orange"
          });

          getuserinfo(
            res.user.uid,
            res.user.displayName!,
            res.user.email!,
            res.user.photoURL!,
            res.user.displayName!,
            res.user.metadata.creationTime!,
            "orange"
          );
        });
    } catch (err: any) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }
  //TODO: implement ALL THE LOADING HERE NOT IN THE HOME.JSX (prevents the time out thing)
  const signInUserGoogle = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
        const user = result.user;
        console.log("user >>>", user);
        SetMyDetail({
          name: user.displayName!,
          img: user.photoURL!,
          userid: user.uid,
          joined: user.metadata.creationTime!,
          color: "orange"
        });
        // setUser(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        alert(errorCode)
      }).finally(() => setLoading(false));
  }
  const signInUserGitHub = () => {
    const provider = new GithubAuthProvider();
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        console.log(result);
        const user = result.user;
        console.log("user >>>", user);
        SetMyDetail({
          name: user.displayName!,
          img: user.photoURL!,
          userid: user.uid,
          joined: user.metadata.creationTime!,
          color: "orange"
        });
        // setUser(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        alert(errorCode)
      }).finally(() => setLoading(false));
  }

  const logoutUser = () => {
    signOut(auth);
  }

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  }
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, userChat, setUserChat, serverChat, setServerChat, server, setServer, myDetail, SetMyDetail, RegisterUser, signInUser, logoutUser, forgotPassword, UserDetailsFirebase, setUserDetailsFirebase, signInUserGitHub, signInUserGoogle, Loading, setLoading }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider

