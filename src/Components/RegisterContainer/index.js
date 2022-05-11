import React, { useContext, useState } from 'react';
import {
  Container, UserInput, RegisterButton, Form, ErrorAlert, RowForm,
} from '../GenericComponents';
import { LoginContext } from '../../Contexts/login-contexts';

function RegisterContainer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageEmptyFields, setMessageEmptyFields] = useState('');
  const [haveErro, setHaveErro] = useState(false);

  const {
    Register,
    messageRegisterPassword,
    messageRegisterEmail,
    messageRegisterName,
  } = useContext(LoginContext);

  const UserRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      Register(name, email, password);
    } else {
      setHaveErro(true);
      if (!name) {
        setMessageEmptyFields('Preencha todos os campos');
      }
      if (!email) {
        setMessageEmptyFields('Preencha todos os campos');
      }
      if (!password) {
        setMessageEmptyFields('Preencha todos os campos');
      }
    }
    if (messageRegisterPassword || messageRegisterEmail || messageRegisterName) {
      setHaveErro(true);
    }
  };

  return (
    <Container>
      <Form onSubmit={(e) => UserRegister(e)}>
        <RowForm>
          <UserInput>
            <input type="text" value={email} onChange={(e) => { setEmail((e.target.value)); }} />
            <span>Usuário</span>
          </UserInput>
          {haveErro && (
          <ErrorAlert>
            {messageEmptyFields
          || messageRegisterEmail}
          </ErrorAlert>
          )}
        </RowForm>
        <RowForm>
          <UserInput>
            <input type="password" name="password" autoComplete="on" value={password} onChange={(e) => { setPassword((e.target.value)); }} />
            <span>Senha</span>
          </UserInput>
          {haveErro && (
          <ErrorAlert>
            {messageEmptyFields || messageRegisterPassword}
          </ErrorAlert>
          )}
        </RowForm>
        <RowForm>
          <UserInput>
            <input type="text" value={name} onChange={(e) => { setName((e.target.value)); }} />
            <span>Nome</span>
          </UserInput>
          {haveErro && (
          <ErrorAlert>
            {messageEmptyFields
           || messageRegisterName}
          </ErrorAlert>
          )}
        </RowForm>
        <RegisterButton type="submit">
          Registrar
        </RegisterButton>
      </Form>
    </Container>
  );
}

export default RegisterContainer;
