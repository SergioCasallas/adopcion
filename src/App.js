import Welcome from './components/Welcome/Welcome.jsx';
import Selection from './components/Selection/Selection.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/selection'>
          <Selection />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
