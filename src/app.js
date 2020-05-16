import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    <h1>404! NotFoundPage</h1>
  </div>
);

const jsx = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));
