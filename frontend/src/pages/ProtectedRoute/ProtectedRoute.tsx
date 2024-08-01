import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

type ProtectedRouteProps = {
    element: React.ReactElement;
};

export function ProtectedRoute({ element }: ProtectedRouteProps) {
    const { isAuthenticated, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (isAuthenticated) {
        return element;
    } else {
        return <Navigate to="/" state={{ from: location }} />;
    }
}
