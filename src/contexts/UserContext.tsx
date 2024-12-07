import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

export type User = {
    name: string;
    email: string;
};

export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

// Crear el contexto con valor inicial undefined
const UserContext = createContext<UserContextInterface | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext debe ser usado dentro de un UserProvider");
    }
    return context;
};

type UserProviderProps = {
    children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User>({
        name: 'palas',
        email: 'palas@gmail.com',
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );

};
