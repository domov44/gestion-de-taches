import React, { useEffect } from 'react';
import { useUser } from '../../hooks/UserContext';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const { user, isLoggedIn } = useUser();

    // Utilisez useEffect pour charger les données de l'utilisateur lors de l'initialisation du composant
    useEffect(() => {
        // Ajoutez ici la logique pour charger les données de l'utilisateur si nécessaire
    }, []);

    // Si l'utilisateur n'est pas connecté ou que les données de l'utilisateur ne sont pas encore disponibles, affichez un indicateur de chargement
    if (!isLoggedIn || !user) {
        return <div>Chargement...</div>;
    }

    // Une fois que les données de l'utilisateur sont disponibles, affichez les informations du profil
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

