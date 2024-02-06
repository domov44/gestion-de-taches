// UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(null);
    const [userData, setUserData] = useState(null); // Ajouter un state pour stocker les données utilisateur

    useEffect(() => {
        const checkAuthState = async () => {
            try {
                const user = await getCurrentUser();
                setLoggedIn(true);
                setUserData(user); // Stocker les données utilisateur lorsqu'il est connecté
            } catch (error) {
                setLoggedIn(false);
                setUserData(null); // Réinitialiser les données utilisateur si la connexion échoue
            }
        };

        checkAuthState();
    }, []);

    const login = () => setLoggedIn(true);
    const logout = () => {
        setLoggedIn(false);
        setUserData(null); // Réinitialiser les données utilisateur lors de la déconnexion
    };

    if (isLoggedIn === null) {
        return <div>Loading...</div>;
    }

    return (
      <UserContext.Provider value={{ isLoggedIn, login, logout, userData }}> {/* Fournir les données utilisateur */}
          {children}
      </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
