import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Home/Dashboard";
import UserMovies from "./pages/UserMovies/UserMovies";
import Modal from "./components/Modal/Modal";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
