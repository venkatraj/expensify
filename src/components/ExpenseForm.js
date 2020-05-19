import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderFocused: false,
    error: null,
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
    if (amount && amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  handleDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };

  handleFocusChange = ({ focused }) => {
    this.setState({ calenderFocused: focused });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, amount, createdAt, note } = this.state;
    const { onSubmit } = this.props;
    if (!description && !amount) {
      const error = 'Please provide valid description and amount';
      this.setState({ error });
    } else {
      this.setState({ error: null });
      onSubmit({
        description,
        amount: parseFloat(amount) * 100,
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  };

  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calenderFocused,
      error,
    } = this.state;
    return (
      <div>
        {error && <p>{error}</p>}
        <form onSubmit={this.handleSubmit}>
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
