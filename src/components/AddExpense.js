import React from "react";
import { connect } from "react-redux";
import { startAddExpense } from "../actions";
import ExpenseForm from "./ExpenseForm";

const AddExpense = ({ startAddExpense, history }) => {
  return (
    <div>
      <div className="summary">
        <div className="container">
          <h1>Add expense</h1>
        </div>
      </div>
      <div className="container">
        <ExpenseForm
          onSubmit={expense => {
            startAddExpense(expense);
            history.push("/home");
          }}
        />
      </div>
    </div>
  );
};

export default connect(null, { startAddExpense })(AddExpense);
