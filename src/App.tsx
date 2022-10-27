import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Calendar } from './components/pages/Calendar';
import { Login } from './components/pages/Login';
import { Profil } from './components/pages/Profil';
import { Navigation } from './components/UI/organisms/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </div>
  );
}

export default App;
