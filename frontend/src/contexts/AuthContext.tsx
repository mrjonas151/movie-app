import { createContext, ReactNode, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    lastName: string;
    email: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;
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
                            const { id, name, lastName, email } = response.data;
                            setUser({ id, name, lastName, email });
                        }).catch(error => {
                            console.error("Error user:", error);
                        });
                    }
                } catch (error) {
                    console.error("Error token:", error);
                }
            } else {
                setUser(undefined);
            }
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
                setUser(undefined);
                navigate('/');
            } else {
                console.error("User is not logged in");
            }
        } catch (error) {
            console.error("Error token or sign out", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
