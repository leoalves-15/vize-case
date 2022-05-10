import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LoginProvider from './Contexts/login-contexts';

function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}> </Route>
            <Route path="/Register" element={<Register />}> </Route>
          </Routes>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
