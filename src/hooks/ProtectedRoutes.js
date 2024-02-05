import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

function ProtectedRoutes({ children }) {
    const { isLoggedIn } = useUser();

    return isLoggedIn ? children : <Navigate to="/connect" replace />;
}

export default ProtectedRoutes;
