
import { useContext } from "react";
import { UserContext } from "../context/user/userContext";


const Login = () => {

  const context = useContext(UserContext);
  const { SetMyDetail } = context!;

  return (
    <div>
      login here
    </div>
  )
}

export default Login
