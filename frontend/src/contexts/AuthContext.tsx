import { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export type AuthContextData = {
    userProvider: UserProps | undefined;
    isAuthenticated: boolean;
    loading: boolean;
    signOut: () => void;
};

type UserProps = {
    id: string;
    name: string;
    email: string;
};

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [userProvider, setUserProvider] = useState<UserProps | undefined>();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);
    const isAuthenticated = !!userProvider;
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const newToken = await user.getIdToken(true);
                    if (newToken) {
                        setToken(newToken);
                        try {
                            const response = await axios.get(
                                "http://localhost:3333/users",
                                {
                                    headers: {
                                        Authorization: `Bearer ${newToken}`,
                                    },
                                }
                            );
                            const { id, name, email } = response.data;
                            setUserProvider({ id, name, email });
                        } catch (error) {
                            console.error("Error fetching user:", error);
                        }
                    }
                } catch (error) {
                    console.error("Error getting token:", error);
                }
            } else {
                setUserProvider(undefined);
                setToken(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!loading && isAuthenticated) {
            const path = window.location.pathname;
            if (path === "/" || path === "/signup") {
                navigate("/dashboard");
            }
        }
    }, [isAuthenticated, loading, navigate]);

    const signOut = async () => {
        const auth = getAuth();
        try {
            const user = auth.currentUser;
            if (user) {
                const currentToken = await user.getIdToken(true);
                await axios.post(
                    "http://localhost:3333/users/revokeToken",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${currentToken}`,
                        },
                    }
                );
                await auth.signOut();
                setUserProvider(undefined);
                setToken(null);
                navigate("/");
            }
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };

    return (
        <AuthContext.Provider
            value={{ userProvider, isAuthenticated, loading, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
}
