import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../Contexts/login-contexts';
import LoggedContainer from '../../Components/LoggedContainer';
import { Container } from '../../Components/GenericComponents';

function Logged() {
  const [currentProfile, setCurrentProfile] = useState({});
  const [profiles, setProfiles] = useState({});
  const { GetCurrentProfile, VerifyLogin, GetProfiles } = useContext(LoginContext);

  useEffect(() => {
    const currentProfileAUX = GetCurrentProfile();
    VerifyLogin(currentProfileAUX);
    setCurrentProfile(currentProfileAUX);
  }, [GetCurrentProfile]);

  useEffect(() => {
    (async () => {
      const result = await GetProfiles(1);
      setProfiles(result);
    })();
  }, [GetProfiles]);

  useEffect(() => {
    console.log('profiles', profiles);
  }, [profiles]);

  return (
    <Container>
      {typeof currentProfile?.Token !== 'undefined' && (<LoggedContainer profiles={profiles?.data} />)}
    </Container>
  );
}

export default Logged;
