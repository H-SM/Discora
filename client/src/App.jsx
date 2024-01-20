import "./App.css";
import Home from "./pages/Home";
import UserState from "./context/user/userState";

function App() {
  return (
    <>
      <UserState>
      <Home />
      </UserState>
    </>
  );
}

export default App;
