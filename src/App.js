import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Listado from './components/Listado';

function App() {
  return (
    <>
      <h2>Formulario Login</h2>
      {/* Meto dentro del componente switch todos los elementos
    que quiero renderizar */}
      <Switch>
        <Route exact path='/'component={Login} />
        <Route path='/listado'component={Listado} />
        <Login />
        <Listado />
      </Switch>
    </>
  );
}
export default App;
