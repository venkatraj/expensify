import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [
    {
      id: 'sadfkj',
      description: 'January Rent',
      note: 'Final payment at that address',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: null,
    endDate: null,
  },
};
