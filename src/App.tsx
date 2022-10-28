import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from './components/pages/Login';
import { Profil } from './components/pages/Profil';
import { UserContext } from './context/userContext';
import { Calendar } from './components/pages/Calendar';
import { Navigation } from './components/UI/organisms/Navigation';

import './App.css';

function App() {
  const [user, setUser] = useState({
    email: 'test@test.fr',
    password: 'test',
    isLogged: false,
  });
  return (
    <main className="App">
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Navigation />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </main>
  );
}

export default App;
