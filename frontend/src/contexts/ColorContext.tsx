import { createContext, useState, ReactNode, FC } from "react";

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

    const toggleColor = () => {
        setIsRed(!isRed);
    };

    return (
        <ColorContext.Provider value={{ isRed, toggleColor }}>
            {children}
        </ColorContext.Provider>
    );
};
