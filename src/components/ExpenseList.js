import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
  const { expenses, filters } = props;
  return (
    <div>
      <h1>Expense List</h1>
      <p>{filters.text}</p>
      <p>{expenses.length}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseList);
