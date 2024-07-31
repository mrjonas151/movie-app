import { createContext, ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export type AuthContextData = {
    userProvider: UserProps | undefined;
    isAuthenticated: boolean;
    loading: boolean;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [userProvider, setUserProvider] = useState<UserProps>();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = !!userProvider;
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const token = await user.getIdToken(true);
                    if (token) {
                        axios.get("http://localhost:3333/users", {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        }).then(response => {
                            const { id, name, email } = response.data;
                            setUserProvider({ id, name, email });
                            navigate('/dashboard');
                        }).catch(error => {
                            console.error("Error user:", error);
                        });
                    }
                } catch (error) {
                    console.error("Error token:", error);
                }
            } else {
                setUserProvider(undefined);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signOut = async () => {
        const auth = getAuth();
        try {
            const user = auth.currentUser;
            if (user) {
                const token = await user.getIdToken(true);
                await axios.post("http://localhost:3333/users/revokeToken", {}, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                await auth.signOut();
                setUserProvider(undefined);
                navigate('/');
            } else {
                console.error("User is not logged in");
            }
        } catch (error) {
            console.error("Error token or sign out", error);
        }
    };

    return (
        <AuthContext.Provider value={{ userProvider, isAuthenticated, loading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
