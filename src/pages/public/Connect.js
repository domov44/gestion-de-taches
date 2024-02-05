import React, { useState } from 'react';
//import styled from "styled-components";

import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../../aws-exports';
import CustomSignIn from '../../components/CustomSigIn';
import CustomSignOut from '../../components/CustomSignOut';
Amplify.configure(awsExports);
export default function Connect() {
    return (
      <>
          <CustomSignIn/>
            <CustomSignOut/>
      </>
    )
}

//const Container = styled.div`

//`;
