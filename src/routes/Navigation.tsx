import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import { LeazyPage1, LeazyPage2, LeazyPage3 } from '../01-leazyload/pages';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" activeClassName="nav-active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" activeClassName="nav-active" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" activeClassName="nav-active" exact>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lazy1">
            <LeazyPage1 />
          </Route>
          <Route path="/lazy2">
            <LeazyPage2 />
          </Route>
          <Route path="/lazy3">
            <LeazyPage3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}