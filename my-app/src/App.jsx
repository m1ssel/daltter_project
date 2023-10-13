import { Mainpage } from "./pages/mainpage/Mainpage";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App
