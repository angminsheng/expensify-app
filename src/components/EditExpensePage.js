import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expenses={props.expenses}
        onSubmit={expense => {
          props.editExpense(props.expenses.id, expense);
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.removeExpense({ id: props.expenses.id });
          props.history.push("/");
        }}
      >
        remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expenses: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => {
  console.log(dispatch);
  return {
    editExpense: (id, expense) => editExpense(id, expense),
    removeExpense: id => dispatch(removeExpense(id))
  };
};

export default connect(
  mapStateToProps,
  { editExpense, removeExpense }
)(EditExpensePage);
