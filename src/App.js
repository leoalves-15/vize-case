import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Logged from './Pages/Logged';
import LoginProvider from './Contexts/login-contexts';

function App() {
  return (
    <div className="App">
      <Router>
        <LoginProvider>
          <Routes>
            <Route path="/Login" element={<Login />}> </Route>
            <Route path="/Register" element={<Register />}> </Route>
            <Route path="/" element={<Logged />}> </Route>
          </Routes>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
