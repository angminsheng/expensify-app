import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

describe("Component: AddExpensePage", () => {
  const startAddExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );

  test("Should render AddExpensePage correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should handle addExpense", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
    expect(startAddExpense).lastCalledWith(expenses[0]);
    expect(history.push).lastCalledWith("/");
  });
});
