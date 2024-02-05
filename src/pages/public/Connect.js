// Connect.js
import React from 'react';
import { useUser } from '../../hooks/UserContext';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';
import CustomSignIn from '../../components/CustomSigIn';
import CustomSignOut from '../../components/CustomSignOut';
Amplify.configure(awsExports);

export default function Connect() {
    const { login, logout, isLoggedIn } = useUser();

    return (
      <>
          {isLoggedIn ? (
            <>
                <CustomSignOut />
            </>
          ) : (
            <>
                <CustomSignIn onLogin={login} />
            </>
          )}
      </>
    );
}
