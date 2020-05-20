import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from '../actions/filters';

class ExpenseListFilters extends Component {
  state = { calenderFocused: null };

  handleDatesChange = ({ startDate, endDate }) => {
    const { dispatch } = this.props;
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  handleFocusChange = (calenderFocused) => {
    this.setState({ calenderFocused });
  };

  render() {
    const { filters, dispatch } = this.props;
    const { text, sortBy, startDate, endDate } = filters;
    const { calenderFocused } = this.state;

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
        <DateRangePicker
          startDate={startDate}
          startDateId="expense_filter_start_date"
          endDate={endDate}
          endDateId="expense_filter_end_date"
          onDatesChange={this.handleDatesChange}
          focusedInput={calenderFocused}
          onFocusChange={this.handleFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { filters: state.filters };
};
export default connect(mapStateToProps)(ExpenseListFilters);
