import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Home/Dashboard";
import MyMovies from "./pages/MyMovies/MyMovies";
import MyMovies2 from "./pages/MyMovies/MyMovies2";
import { ProtectedRoute } from "./pages/ProtectedRoute/ProtectedRoute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies2" element={<ProtectedRoute element={<MyMovies2 />} />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/myMovies" element={<ProtectedRoute element={<MyMovies />} />} />
        </Routes>
    );
}

export default App;
