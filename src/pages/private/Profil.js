import React from 'react';
import { useUser } from '../../hooks/UserContext';
import {Link} from 'react-router-dom';
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
            <Link to="/update-profil">Modifier le profil</Link>
        </div>
    );
};

export default ProfilePage;
