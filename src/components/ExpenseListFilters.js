import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => {
  const { filters, dispatch } = props;
  const { text, sortBy } = filters;
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={sortBy}
        onChange={(e) => {
          switch (e.target.value) {
            case 'amount':
              dispatch(sortByAmount());
              break;
            case 'date':
              dispatch(sortByDate());
              break;
            default:
              break;
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>A
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filters: state.filters };
};
export default connect(mapStateToProps)(ExpenseListFilters);
