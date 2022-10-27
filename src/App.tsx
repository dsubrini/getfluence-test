import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Calendar } from './components/pages/Calendar';
import { Login } from './components/pages/Login';
import { Profil } from './components/pages/Profil';
import { Navigation } from './components/UI/organisms/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
