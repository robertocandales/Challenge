import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import generateStore from './redux/store/store';
import './App.css';
import Pokemones from './components/pokemones';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Pokemones}></Route>
          {/*<Route exact path='/:name' component={PokemonDetails} />*/}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
