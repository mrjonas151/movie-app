import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

type ProtectedRouteProps = {
    element: React.ReactElement;
};

export function ProtectedRoute({ element }: ProtectedRouteProps) {
    const { isAuthenticated, loading } = useContext(AuthContext);
    
    if(loading) {
        return;
    }

    if (isAuthenticated) {
        return element;
    } else {
        return <Navigate to="/" />;
    }
}
