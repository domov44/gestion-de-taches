import React from 'react';
import { signOut } from 'aws-amplify/auth';

function CustomSignOut() {
    const handleSignOut = async () => {
        try {
            await signOut();
            console.log('Déconnexion réussie !');
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
