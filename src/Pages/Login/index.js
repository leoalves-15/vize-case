import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../../Contexts/login-contexts';
import LoginContainer from '../../Components/LoginContainer';
import { Container } from '../../Components/GenericComponents';

function Login() {
  const { GetCurrentProfile, VerifyLogin } = useContext(LoginContext);
  useEffect(() => {
    const currentProfileAUX = GetCurrentProfile();
    VerifyLogin(currentProfileAUX);
  }, [GetCurrentProfile]);

  return (
    <Container>
      <LoginContainer />
    </Container>
  );
}

export default Login;
