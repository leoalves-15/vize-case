import React, { useEffect, useState } from 'react';
import { Container } from '../GenericComponents';
import { Table, Title } from './Table';

function LoggedContainer(props) {
  const [profilesArray, setProfileArray] = useState([]);
  const { profiles = [] } = props;

  useEffect(() => {
    setProfileArray(profiles.slice(0, 5));
  }, [props]);

  return (
    <Container>
      <Title>Usuários:</Title>
      <Table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
        {profilesArray.map((profile) => (
          <tr>
            <td>{profile.id}</td>
            <td>{profile.name}</td>
          </tr>
        ))}
      </Table>
    </Container>
  );
}

export default LoggedContainer;
