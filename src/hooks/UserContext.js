// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
      <UserContext.Provider value={{ isLoggedIn, login, logout }}>
          {children}
      </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
