import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, UserInput, LoginButton, RegisterButton, Form, ErrorAlert, RowForm,
} from '../GenericComponents';
import { LoginContext } from '../../Contexts/login-contexts';

function RegisterContainer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { Login } = useContext(LoginContext);
  const navigate = useNavigate();

  const UserLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      Login(email, password);
    } else {
      if (!email) {
        setEmailError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => UserLogin(e)}>
        <RowForm>
          <UserInput>
            <input type="text" value={email} onChange={(e) => { setEmail((e.target.value)); }} />
            <span>Usuário</span>
          </UserInput>
          {emailError && (<ErrorAlert>Preencha corretamente o email</ErrorAlert>)}
        </RowForm>
        <RowForm>
          <UserInput>
            <input type="password" name="password" autoComplete="on" value={password} onChange={(e) => { setPassword((e.target.value)); }} />
            <span>Senha</span>
          </UserInput>
          {passwordError && (<ErrorAlert>Preencha corretamente a senha</ErrorAlert>)}
        </RowForm>
        <LoginButton type="submit">
          Login
        </LoginButton>
        <RegisterButton onClick={() => { navigate('/Register'); }}>
          Registrar
        </RegisterButton>
      </Form>
    </Container>
  );
}

export default RegisterContainer;
