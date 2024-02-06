import React from 'react';
import { useUser } from '../../hooks/UserContext';

const Profil = () => {
    const { userData } = useUser();

    if (!userData) {
        return <div>Chargement...</div>;
    }

    return (
      <div>
          <h1>Profil utilisateur</h1>
          <p>Nom d'utilisateur : {userData.username}</p>
          <p>Email : {userData.email}</p>
          <p>Numéro de téléphone : {userData.phone_number}</p>
      </div>
    );
};

export default Profil;
