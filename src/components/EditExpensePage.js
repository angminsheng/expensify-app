import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";

export const EditExpensePage = props => {
  const onSubmit = expense => {
    props.startEditExpense(props.expenses.id, expense);
    props.history.push("/");
  };

  const onClick = () => {
    props.startRemoveExpense({ id: props.expenses.id });
    props.history.push("/");
  };

  return (
    <div>
      <ExpenseForm
        expenses={props.expenses}
        onSubmit={expense => onSubmit(expense)}
      />
      <button onClick={onClick}>remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expenses: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: id => dispatch(startRemoveExpense(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
