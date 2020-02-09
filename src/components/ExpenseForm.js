import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount : "",
      info: props.expense ? props.expense.info : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }
  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  handleAmount = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}$/)) {
      this.setState({ amount });
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: "Please provide description and amount" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseInt(this.state.amount),
        info: this.state.info,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          className="text-input"
          id="amount"
          type="number"
          name="amount"
          placeholder="Amount €"
          value={this.state.amount}
          onChange={this.handleAmount}
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          name="info"
          value={this.state.info}
          onChange={this.handleChange}
          placeholder="Some info..."
        ></textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
