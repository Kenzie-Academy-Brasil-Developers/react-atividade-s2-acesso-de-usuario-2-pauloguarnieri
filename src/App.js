import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Company } from './pages/Company';
import { Customer } from './pages/Customer';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Member's list</h1>
      </header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/customer/:id'>
          <Customer />
        </Route>
        <Route exact path='/company/:id'>
          <Company />
        </Route>
        <Route exact path='/register'>

        </Route>
      </Switch>

    </div>
  );
}

export default App;
