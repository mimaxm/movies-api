import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from './routes/routes';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { DetailMovie } from './pages/DetailMovie/DetailMovie';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.about} component={About} />
        <Route
          path={routes.movieDetails}
          render={(props) => <DetailMovie {...props} />}
        />
        <Redirect to={routes.home} />
      </Switch>
    </Router>
  );
}

export default App;
