import React, { useContext, useState } from 'react';
import {
  Container, UserInput, LoginButton, RegisterButton, Form,
} from '../GenericComponents';
import { LoginContext } from '../../Contexts/login-contexts';

function RegisterContainer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Login } = useContext(LoginContext);

  const UserLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      Login(email, password);
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => UserLogin(e)}>
        <UserInput>
          <input type="text" value={email} onChange={(e) => { setEmail((e.target.value)); }} />
          <span>Usuário</span>
        </UserInput>
        <UserInput>
          <input type="password" value={password} onChange={(e) => { setPassword((e.target.value)); }} />
          <span>Senha</span>
        </UserInput>
        <LoginButton>
          Login
        </LoginButton>
        <RegisterButton type="submit">
          Registrar
        </RegisterButton>
      </Form>
    </Container>
  );
}

export default RegisterContainer;
