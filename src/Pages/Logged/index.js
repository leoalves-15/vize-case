import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../Contexts/login-contexts';

function Logged() {
  const [currentProfile, setCurrentProfile] = useState({});
  const { GetCurrentProfile, VerifyLogin } = useContext(LoginContext);

  useEffect(() => {
    const currentProfileAUX = GetCurrentProfile();
    VerifyLogin(currentProfileAUX);
    setCurrentProfile(currentProfileAUX);
  }, [GetCurrentProfile]);

  return (
    <p>{typeof currentProfile?.Token !== 'undefined' ? 'entrou' : 'não entrou'}</p>
  );
}

export default Logged;
