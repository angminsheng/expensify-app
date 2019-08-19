import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import toJSON from "enzyme-to-json";

describe("Component: EditExpensePage", () => {
  const startEditExpense = jest.fn();
  const history = { push: jest.fn() };
  const startRemoveExpense = jest.fn();
  const wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expenses={expenses[0]}
    />
  );

  test("should render EditExpensePage correctly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should handle onSubmit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
    expect(startEditExpense).lastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).lastCalledWith("/");
  });

  test("should handle onClick", () => {
    wrapper.find("button").prop("onClick")();
    expect(startRemoveExpense).lastCalledWith({ id: expenses[0].id });
    expect(history.push).lastCalledWith("/");
  });
});
