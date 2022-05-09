import React from 'react';
import { LoginButton, RegisterButton, UserInput } from './Components/GenericComponents';

function App() {
  return (
    <div className="App">
      <LoginButton> teste</LoginButton>
      <RegisterButton> teste</RegisterButton>
      <UserInput>
        <input type="text" required />
        <span>Nome</span>
      </UserInput>
    </div>
  );
}

export default App;
