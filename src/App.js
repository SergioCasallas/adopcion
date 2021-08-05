import Welcome from './components/Welcome/Welcome.jsx';
import Selection from './components/Selection/Selection.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Animal from './components/Animal/Animal.jsx';
import datosApi from './json/prueba.json';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/selection'>
          <Selection datosApi={datosApi} />
        </Route>
        <Route exact path='/animals/:name'>
          <Animal datosApi={datosApi} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
