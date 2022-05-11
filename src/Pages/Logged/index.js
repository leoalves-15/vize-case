import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../Contexts/login-contexts';
import LoggedContainer from '../../Components/LoggedContainer';
import { Container } from '../../Components/GenericComponents';

function Logged() {
  const [profiles, setProfiles] = useState({});
  const {
    VerifyLogin, GetProfiles, currentProfile, isLogged,
  } = useContext(LoginContext);

  useEffect(() => {
    VerifyLogin(currentProfile);
  }, [currentProfile]);

  useEffect(() => {
    (async () => {
      const result = await GetProfiles(1);
      setProfiles(result);
    })();
  }, [GetProfiles]);

  return (
    <Container>
      {isLogged && (<LoggedContainer profiles={profiles?.data} />)}
    </Container>
  );
}

export default Logged;
