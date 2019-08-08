import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import ExpenseListFilters from "./ExpenseListFilters";

function ExpenseList(props) {
  let element = props.expenses.map(expense => (
    <ExpenseListItem {...expense} key={expense.id} />
  ));

  return (
    <div>
      <h1>Expense List</h1>
      <ExpenseListFilters />
      {element}
    </div>
  );
}

//callback function here tells connect what information the component wants to access.

//before map state to props
// export default connect(state => {
//   return {
//     expenses: state.expenses
//   };
// })(ExpenseList);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
