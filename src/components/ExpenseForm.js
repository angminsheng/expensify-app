import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends Component {
  state = {
    description: this.props.expenses ? this.props.expenses.description : " ",
    note: this.props.expenses ? this.props.expenses.note : " ",
    amount: this.props.expenses ? this.props.expenses.amount.toString() : "",
    createdAt: this.props.expenses
      ? moment(this.props.expenses.createdAt)
      : moment(),
    calenderFocused: false,
    error: ""
  };

  onDescriptionChange = e => {
    let description = e.target.value;
    this.setState({ description });
  };

  onNoteChange = e => {
    let note = e.target.value;
    this.setState({ note });
  };

  onAmountChange = e => {
    let amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      console.log("true");
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) this.setState(() => ({ createdAt }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please enter description and amount" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: Number(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error}
        <form action="" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="number"
            placeholder="amount"
            onChange={this.onAmountChange}
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            onChange={this.onNoteChange}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
