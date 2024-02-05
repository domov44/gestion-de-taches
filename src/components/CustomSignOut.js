// CustomSignOut.js
import React from 'react';
import { signOut } from 'aws-amplify/auth';
import { useUser } from '../hooks/UserContext';

function CustomSignOut() {
    const { logout } = useUser();

    const handleSignOut = async () => {
        try {
            await signOut();
            console.log('Déconnexion réussie !');

            logout();
        } catch (error) {
            console.log('Erreur lors de la déconnexion :', error);
        }
    };

    return (
      <button type="button" onClick={handleSignOut}>
          Déconnexion
      </button>
    );
}

export default CustomSignOut;
