import React, { useContext, useState } from 'react';
import {
  Container, UserInput, RegisterButton, Form,
} from '../GenericComponents';
import { LoginContext } from '../../Contexts/login-contexts';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { Register } = useContext(LoginContext);

  const UserRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      Register(name, email, password);
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => UserRegister(e)}>
        <UserInput>
          <input type="text" value={email} onChange={(e) => { setEmail((e.target.value)); }} />
          <span>Usuário (email)</span>
        </UserInput>
        <UserInput>
          <input type="password" name="password" autoComplete="on" value={password} onChange={(e) => { setPassword((e.target.value)); }} />
          <span />
        </UserInput>
        <UserInput>
          <input type="text" value={name} onChange={(e) => { setName((e.target.value)); }} />
          <span>Nome</span>
        </UserInput>
        <RegisterButton type="submit">
          Registrar
        </RegisterButton>
      </Form>
    </Container>
  );
}

export default Login;
