
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user/userContext";
import logo from "../assets/logo_discora_nobg_new.png"
import { useNavigate } from "react-router-dom";
import { BsGithub , BsGoogle } from 'react-icons/bs';

const Login = () => {
  const navigate = useNavigate();

  const context = useContext(UserContext);
  const { RegisterUser, signInUser, forgotPassword, UserDetailsFirebase, signInUserGoogle, signInUserGitHub } = context!;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  
  useEffect(() => {
    if(UserDetailsFirebase) {
      console.log(UserDetailsFirebase);
      navigate("/");
    } 
  })
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email != "" && name != "" && password != "") RegisterUser(email, name, password);
    else if(email != "" && password != "") signInUser(email, password);
    else if(email != "") forgotPassword(email).then(() => setEmail(""))
  };
  return (
   <div className="w-full h-[100vh] flex justify-center items-center">             
  <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
            <img className="w-[12vh]" src={logo} alt=""/>
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form className="text-white" onSubmit={handleSubmit}>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" value={email} onChange={(e) => handleInputChange(e, setEmail)}/>
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" value={password} onChange={(e) => handleInputChange(e, setPassword)}/>
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Name" aria-label="Name" value={name} onChange={(e) => handleInputChange(e, setName)}/>
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    {/* <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <a href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
    </div> */}
    <div className="my-6 mx-2">
                    <div className="relative"> 
                    {/* 50 */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-gray-800 px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex gap-2">
                        <button type='button' onClick={signInUserGoogle} className='inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'>
                        <BsGoogle /> 
                        </button>
                        <button type='button' onClick={signInUserGitHub} className='inline-flex w-full justify-center rounded-md bg-transparent px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'>
                        <BsGithub /> 
                        </button>
                    </div>
    </div>
</div>  
</div>    
  )
}

export default Login
