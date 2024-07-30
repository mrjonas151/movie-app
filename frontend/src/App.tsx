import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Home/Dashboard";
import Modal from "./components/Modal/Modal";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/modal" element={<Modal />} />
        </Routes>
    );
}

export default App;
