// CustomSignIn.js
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {signIn, getCurrentUser, fetchUserAttributes} from 'aws-amplify/auth';
import {useUser} from '../hooks/UserContext';
import Form from './Form';
import InputText from './InputText';
import Button from './Button';

function CustomSignIn() {
    const {login} = useUser();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const {isSignedIn, signInStep} = await signIn({username, password});
            console.log('Réponse de l\'API après connexion :', {isSignedIn, signInStep});

            if (isSignedIn) {
                console.log('Connexion réussie !');

                // Appel de la fonction pour récupérer les détails de l'utilisateur actuellement authentifié
                await currentAuthenticatedUser();

                // Met à jour l'état de connexion en appelant la fonction du contexte utilisateur
                login();
                navigate('/');
            } else {
                console.log('Étape de connexion inconnue ou non définie.');
            }
        } catch (error) {
            console.log('Erreur lors de la connexion :', error);
        }
    };

    async function currentAuthenticatedUser() {
        try {
            const {username, userId, signInDetails} = await getCurrentUser();
            console.log(`Nom d'utilisateur : ${username}`);
            // Récupérer les attributs de l'utilisateur, y compris l'email
            const userAttributes = await fetchUserAttributes();
            // Vous pouvez maintenant accéder aux attributs de l'utilisateur directement
            const userEmail = userAttributes.email;
            const userNumber = userAttributes.phone_number;

            console.log(`Email d'utilisateur : ${userEmail}`);
            console.log(`Numéro d'utilisateur : ${userNumber}`);
            console.log(`ID utilisateur : ${userId}`);
            console.log(`Détails de la connexion :`, signInDetails);
        } catch (err) {
            console.log(err);
        }
    }

    return (
      <Form>

          <h1>Connexion</h1>
          <InputText type={'text'} label={'Nom d\'utilisateur'} value={username}
                     onChange={(e) => setUsername(e.target.value)} required/>
          <InputText type={'password'} label={'Mot de passe'} value={password}
                     onChange={(e) => setPassword(e.target.value)} required/>
          <Button type="button" onClick={handleSignIn}>Se connecter</Button>
      </Form>
    );
}

export default CustomSignIn;
