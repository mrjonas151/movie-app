import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import popcorn from "../../assets/popcorn.gif";
import styles from "./ProtectedRoute.module.css";

type ProtectedRouteProps = {
    element: React.ReactElement;
};

export function ProtectedRoute({ element }: ProtectedRouteProps) {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className={styles.container}>
                <img src={popcorn} alt="Loading..." />
            </div>
        );
    }

    if (isAuthenticated) {
        return element;
    } else {
        return <Navigate to="/" state={{ from: location }} />;
    }
}
