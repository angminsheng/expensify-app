import React, { useEffect } from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import ExpenseListFilters from "./ExpenseListFilters";
import { startSetExpenses } from "../actions/expenses";

export const ExpenseList = props => {
  // placing the call here will make the data only called here.
  // useEffect(() => {
  //   props.startSetExpense();
  // }, [props]);
  let element = props.expenses.map(expense => (
    <ExpenseListItem {...expense} key={expense.id} />
  ));

  return (
    <div>
      <ExpenseListFilters />
      {props.expenses.length === 0 ? <p>Loading</p> : element}
    </div>
  );
};

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

const mapDispatchToProps = dispatch => ({
  startSetExpense: () => dispatch(startSetExpenses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseList);
