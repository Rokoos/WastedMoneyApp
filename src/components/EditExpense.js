import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions";

const EditExpense = ({
  expense,
  startEditExpense,
  match,
  history,
  startRemoveExpense
}) => {
  return (
    <div>
      <div className="summary">
        <div className="container">
          <h1>Edit expense</h1>
        </div>
      </div>
      <div className="container">
        <ExpenseForm
          expense={expense}
          onSubmit={expense => {
            console.log("updates", expense);
            startEditExpense(match.params.id, expense);
            history.push("/home");
          }}
        />
        <button
          className="remove"
          onClick={() => {
            startRemoveExpense({ id: expense.id });
            history.push("/home");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  expense: state.expenses.find(
    expense => expense.id === ownProps.match.params.id
  )
});
export default connect(mapStateToProps, {
  startEditExpense,
  startRemoveExpense
})(EditExpense);
