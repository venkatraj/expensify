import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.subscribe(() => {
  const { expenses, filters } = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 400000, createdAt: -1000 })
);
store.dispatch(
  addExpense({ description: 'Water Bill', amount: 800, createdAt: 1000 })
);

store.dispatch(setTextFilter('water'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
