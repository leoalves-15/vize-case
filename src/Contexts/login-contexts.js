import React, {
  createContext, useState, useMemo,
} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LoginContext = createContext({});

function LoginProvider(props) {
  const [isLogged, setIsLogged] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

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
        sessionStorage.setItem('sessionLogin', JSON.stringify(response.data.data));
        navigate('/');
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
        sessionStorage.setItem('sessionLogin', JSON.stringify(response.data.data));
        navigate('/');
      })
      .catch((error) => {
        setErro(error);
      });
  };

  const GetCurrentProfile = () => {
    let session = sessionStorage.getItem('sessionLogin');
    session = JSON.parse(session);
    if (session) {
      setIsLogged(true);
    }
    return session;
  };

  async function GetProfiles(page) {
    const profile = GetCurrentProfile();
    const data = JSON.stringify({
      email: profile?.Email,
    });

    const config = {
      method: 'get',
      url: `https://devfront.vize.solutions/api/users?page=${page}`,
      headers: {
        Authorization: `Bearer ${profile?.Token}`,
        'Content-Type': 'application/json',
      },
      data,
    };
    return axios(config)
      .then((response) => response.data)
      .catch((error) => (error));
  }

  const VerifyLogin = () => {
    const profile = GetCurrentProfile();
    if (typeof profile?.Token !== 'undefined') {
      navigate('/');
    } else {
      navigate('/Login');
    }
  };
  const value = useMemo(() => ({
    Register, Login, isLogged, GetCurrentProfile, erro, VerifyLogin, GetProfiles,
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
