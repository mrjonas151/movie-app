import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Home/Dashboard";
import MyMovies from "./pages/MyMovies/MyMovies";
import { ProtectedRoute } from "./pages/ProtectedRoute/ProtectedRoute";
import { ColorProvider } from "./contexts/ColorContext";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <ColorProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/dashboard"
                    element={<ProtectedRoute element={<Dashboard />} />}
                />
                <Route
                    path="/myMovies"
                    element={<ProtectedRoute element={<MyMovies />} />}
                />
            </Routes>
            <ToastContainer />
        </ColorProvider>
    );
}

export default App;
