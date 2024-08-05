import { createContext, useState, useEffect, ReactNode, FC } from "react";

interface ColorContextProps {
    isRed: boolean;
    toggleColor: () => void;
}

export const ColorContext = createContext<ColorContextProps | undefined>(
    undefined
);

interface ColorProviderProps {
    children: ReactNode;
}

export const ColorProvider: FC<ColorProviderProps> = ({ children }) => {
    const [isRed, setIsRed] = useState<boolean>(true);

    useEffect(() => {
        const savedColor = localStorage.getItem("isRed");
        if (savedColor !== null) {
            setIsRed(JSON.parse(savedColor));
        }
    }, []);

    const toggleColor = () => {
        const newIsRed = !isRed;
        setIsRed(newIsRed);
        localStorage.setItem("isRed", JSON.stringify(newIsRed));
    };

    return (
        <ColorContext.Provider value={{ isRed, toggleColor }}>
            {children}
        </ColorContext.Provider>
    );
};
