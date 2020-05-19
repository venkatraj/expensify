import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: 0,
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

  render() {
    const { description, note, amount } = this.state;
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
