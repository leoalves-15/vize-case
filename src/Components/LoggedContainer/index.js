import React from 'react';
import { Container } from '../GenericComponents';

function LoggedContainer(props) {
  const { profiles = [] } = props;
  return (
    <Container>
      <table>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
        {profiles.map((profile) => (
          <tr>
            <td>{profile.id}</td>
            <td>{profile.name}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}

export default LoggedContainer;
