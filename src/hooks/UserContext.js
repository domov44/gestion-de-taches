import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuthState = async () => {
            try {
                const currentUser = await fetchUserAttributes();
                setUser(currentUser); 
                setLoggedIn(true);
            } catch (error) {
                setLoggedIn(false);
            }
        };

        checkAuthState();
    }, []);

    const login = () => setLoggedIn(true);
    const logout = () => {
        setUser(null); 
        setLoggedIn(false);
    };

    const updateUser = (newUserData) => {
        setUser(newUserData);
    };

    if (isLoggedIn === null) {
        return <div>Loading...</div>;
    }

    return (
      <UserContext.Provider value={{ isLoggedIn, user, login, logout, updateUser }}>
          {children}
      </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
