import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => {
  const { filters, dispatch } = props;
  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filters: state.filters };
};
export default connect(mapStateToProps)(ExpenseListFilters);
