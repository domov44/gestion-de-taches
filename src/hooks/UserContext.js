// UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState(null); // Ajoutez un état pour stocker les informations de l'utilisateur

    useEffect(() => {
        const checkAuthState = async () => {
            try {
                const currentUser = await fetchUserAttributes();
                setUser(currentUser); // Stockez les informations de l'utilisateur une fois connecté
                setLoggedIn(true);
            } catch (error) {
                setLoggedIn(false);
            }
        };

        checkAuthState();
    }, []);

    const login = () => setLoggedIn(true);
    const logout = () => {
        setUser(null); // Supprimez les informations de l'utilisateur lors de la déconnexion
        setLoggedIn(false);
    };

    if (isLoggedIn === null) {
        return <div>Loading...</div>;
    }

    return (
      <UserContext.Provider value={{ isLoggedIn, user, login, logout }}> {/* Fournissez les données de l'utilisateur */}
          {children}
      </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
