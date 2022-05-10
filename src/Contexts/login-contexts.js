import React, { createContext, useState, useMemo } from 'react';
import axios from 'axios';

export const LoginContext = createContext({});

function LoginProvider(props) {
  const [isLogged, setLogged] = useState(false);
  const [erro, setErro] = useState('');

  const Register = (name, email, password) => {
    const data = JSON.stringify({
      name,
      email,
      password,
    });

    const config = {
      method: 'post',
      url: 'https://devfront.vize.solutions/api/authaccount/registration',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => {
        localStorage.setItem('sessionLogin', {
          name: response.data.name,
          email: response.data.email,
          id: response.data.id,
          token: response.data.token,
        });
      })
      .catch((error) => {
        setErro(error);
      });
  };

  const Login = (email, password) => {
    const data = JSON.stringify({
      email,
      password,
    });

    const config = {
      method: 'post',
      url: 'https://devfront.vize.solutions/api/authaccount/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => {
        localStorage.setItem('sessionLogin', {
          name: response.data.name,
          email: response.data.email,
          id: response.data.id,
          token: response.data.token,
        });
      })
      .catch((error) => {
        setErro(error);
      });
  };

  const value = useMemo(() => ({
    isLogged, setLogged, Register, Login, erro,
  }), []);

  return (
    <LoginContext.Provider
      value={value}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
