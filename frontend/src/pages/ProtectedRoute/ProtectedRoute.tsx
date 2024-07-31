import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

type ProtectedRouteProps = {
    element: React.ReactElement;
};

export function ProtectedRoute({ element }: ProtectedRouteProps) {
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? element : <Navigate to="/" />;
}
