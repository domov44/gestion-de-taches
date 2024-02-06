import React from 'react';
import { useUser } from '../../hooks/UserContext';

const ProfilePage = () => {
    const { user } = useUser();

    if (!user) {
        return <div>Utilisateur non connecté</div>;
    }

    return (
        <div>
            <h1>Profil de {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Numéro de téléphone: {user.phone_number}</p>
        </div>
    );
};

export default ProfilePage;
