import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  const { expense, history, dispatch } = props;
  return (
    <div>
      <h1>EditExpensePage</h1>
      <ExpenseForm
        expense={expense}
        onSubmit={(updatedExpense) => {
          dispatch(editExpense(expense.id, updatedExpense));
          history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps;
  const { expenses } = state;
  // prettier-ignore
  return { expense: expenses.find((expense) => expense.id === match.params.id) };
};

export default connect(mapStateToProps)(EditExpensePage);
