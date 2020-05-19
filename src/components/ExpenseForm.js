import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: 0,
    createdAt: moment(),
    calenderFocused: false,
  };

  handleDescriptionChange = (e) => {
    // this.setState({ description: e.target.value });
    // Synthetic Event reused issue
    const description = e.target.value;
    this.setState({ description });
  };

  handleNoteChange = (e) => {
    const note = e.target.value;
    this.setState({ note });
  };

  handleAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  handleDateChange = (createdAt) => {
    this.setState({ createdAt });
  };

  handleFocusChange = ({ focused }) => {
    this.setState({ calenderFocused: focused });
  };

  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calenderFocused,
    } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            onChange={this.handleDescriptionChange}
            value={description}
          />
          <input
            type="number"
            placeholder="Amount"
            onChange={this.handleAmountChange}
            value={amount}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.handleDateChange}
            focused={calenderFocused}
            onFocusChange={this.handleFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Enter a note for your expense"
            onChange={this.handleNoteChange}
            value={note}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
