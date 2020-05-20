import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

const configureStore = () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */
  return store;
};

export default configureStore;
