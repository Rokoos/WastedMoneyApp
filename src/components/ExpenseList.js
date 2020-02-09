import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";
import { getVisibleExpenses } from "../utils";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="container">
      <div className="list-header">
        <div className="mobile">Expenses</div>
        <div className="desktop">Expense</div>
        <div className="desktop">Amount</div>
      </div>
      <div className="list-body">
        {expenses.length === 0 ? (
          <p className="list-item__message">No expenses</p>
        ) : (
          expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);
