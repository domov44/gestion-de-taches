import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, confirmSignIn, resetPassword } from 'aws-amplify/auth'; 

import { useUser } from '../hooks/UserContext';
import Form from './Form';
import InputText from './InputText';
import Button from './Button';

function CustomSignIn() {
    const { login, refreshUser } = useUser();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);

    const handleSignIn = async () => {
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
    
            console.log('Réponse de l\'API après connexion :', { isSignedIn, nextStep });
    
            if (!isSignedIn && nextStep && nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
                setShowResetPasswordForm(true);
                return;
            }
    
            if (isSignedIn) {
                console.log('Connexion réussie !');
                login();
                await refreshUser(); // Mettre à jour les informations de l'utilisateur
                navigate('/');
            } else {
                console.log('La connexion a échoué.');
            }
        } catch (error) {
            console.log('Erreur lors de la connexion :', error);
        }
    };
    
    

    return (
        <Form>
            <h1>{showResetPasswordForm ? 'Réinitialiser le mot de passe' : 'Connexion'}</h1>
            {showResetPasswordForm ? (
                <>
                    <InputText type={'password'} label={'Nouveau mot de passe'} value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)} required/>
                    <Button type="button">Modifier le mot de passe</Button>
                </>
            ) : (
                <>
                    <InputText type={'text'} label={'Nom d\'utilisateur'} value={username}
                            onChange={(e) => setUsername(e.target.value)} required/>
                    <InputText type={'password'} label={'Mot de passe'} value={password}
                            onChange={(e) => setPassword(e.target.value)} required/>
                    <Button type="button" onClick={handleSignIn}>Se connecter</Button>
                </>
            )}
        </Form>
    );
}

export default CustomSignIn;
