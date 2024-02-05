// UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';  // Assurez-vous d'ajuster l'importation selon votre configuration Amplify

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(null); // Utilisez null au lieu de false au départ

    useEffect(() => {
        // Vérifier l'état de connexion au chargement initial
        const checkAuthState = async () => {
            try {
                await getCurrentUser();
                setLoggedIn(true);
            } catch (error) {
                setLoggedIn(false);
            }
        };

        checkAuthState();
    }, []);  // Assurez-vous de ne l'exécuter qu'une seule fois au chargement initial

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    if (isLoggedIn === null) {
        // En cours de vérification de l'état de connexion, peut afficher une charge ou un écran de connexion si nécessaire
        return <div>Loading...</div>;
    }

    return (
      <UserContext.Provider value={{ isLoggedIn, login, logout }}>
          {children}
      </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
