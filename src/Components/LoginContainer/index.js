import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, UserInput, LoginButton, RegisterButton, Form, ErrorAlert, RowForm,
} from '../GenericComponents';
import { LoginContext } from '../../Contexts/login-contexts';

function RegisterContainer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageLoginEmpyt, setMessageLoginEmpyt] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const {
    Login,
    erroEmailLogin,
    setErroEmailLogin,
    messageLoginErro,
  } = useContext(LoginContext);
  const navigate = useNavigate();

  const UserLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      Login(email, password);
    } else {
      if (!email) {
        setErroEmailLogin(true);
        setMessageLoginEmpyt('Preencha todos os campos');
      }
      if (!password) {
        setPasswordError(true);
        setMessageLoginEmpyt('Preencha todos os campos');
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => UserLogin(e)}>
        <RowForm>
          <UserInput>
            <input type="text" value={email} onChange={(e) => { setEmail((e.target.value)); }} />
            <span className={email ? 'valid' : 'empty'}>Usuário</span>
          </UserInput>
          {erroEmailLogin && (<ErrorAlert>{messageLoginEmpyt || messageLoginErro}</ErrorAlert>)}
        </RowForm>
        <RowForm>
          <UserInput>
            <input type="password" name="password" autoComplete="on" value={password} onChange={(e) => { setPassword((e.target.value)); }} />
            <span className={password ? 'valid' : 'empty'}>Senha</span>
          </UserInput>
          {passwordError && (<ErrorAlert>{ messageLoginEmpyt || messageLoginErro}</ErrorAlert>)}
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
