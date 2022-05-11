import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../../Contexts/login-contexts';
import LoginContainer from '../../Components/LoginContainer';
import { Container } from '../../Components/GenericComponents';

function Login() {
  const { currentProfile, VerifyLogin } = useContext(LoginContext);
  useEffect(() => {
    VerifyLogin(currentProfile);
  }, [currentProfile]);

  return (
    <Container>
      <LoginContainer />
    </Container>
  );
}

export default Login;
