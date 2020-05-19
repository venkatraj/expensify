import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(
  addExpense({ description: 'Rent', amount: 400000, createdAt: 2000 })
);

store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 78000, createdAt: -1000 })
);
store.dispatch(
  addExpense({ description: 'Water Bill', amount: 800, createdAt: 1000 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
