import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { getTotal, getVisibleExpenses } from "../utils";

const Summary = ({ expenses }) => {
  return (
    <div className="summary">
      <div className="container">
        {expenses.length === 0 ? (
          <h1 className="summary-title">
            Congrats!! You didn't waste any money!
          </h1>
        ) : (
          <h1 className="summary-title">
            You wasted <span>€{numeral(getTotal(expenses)).format("0,0")}</span>{" "}
            in total.
          </h1>
        )}
        <Link className="button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(Summary);
