import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
  <div>
    <h1>ExpenseDashboardPage</h1>
  </div>
);

const AddExpensePage = () => (
  <div>
    <h1>AddExpensePage</h1>
  </div>
);

const EditExpensePage = () => (
  <div>
    <h1>EditExpensePage</h1>
  </div>
);

const HelpPage = () => (
  <div>
    <h1>HelpPage</h1>
  </div>
);

const NotFoundPage = () => (
  <div>
    <h1>
      404! <Link to="/">Go Home</Link>
    </h1>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const jsx = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));
