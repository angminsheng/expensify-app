import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import toJSON from "enzyme-to-json";
import expenses from "../fixtures/expenses";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

describe("Component: ExpenseForm", () => {
  test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.state("error").length).toBe(0);
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.state("error").length).toBeGreaterThan(0);
  });

  test("should set description on input change", () => {
    const value = "this is a new description";
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value } });
    expect(wrapper.state("description")).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should set note on textarea change", () => {
    const value = "this is a new expense note";
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find("textarea").simulate("change", { target: { value } });
    expect(wrapper.state("note")).toBe(value);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should set amount on valid input change", () => {
    const value = "20.51";
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value } });
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.state("amount")).toBe(value);
  });

  test("should not setup amount on invalid input change", () => {
    const value = "20..551";
    const wrapper = shallow(<ExpenseForm />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper
      .find("input")
      .at(1)
      .simulate("change", { target: { value } });
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.state("amount")).toBe("");
  });

  test("should call onSubmit prop on successful submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
      <ExpenseForm expenses={expenses[1]} onSubmit={onSubmitSpy} />
    );
    const { id, ...expenseWithoutId } = expenses[1];
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).lastCalledWith({ ...expenseWithoutId });
  });

  test("should set new date on date change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop("onDateChange")(moment());
    expect(wrapper.state("createdAt")).toEqual(moment());
  });

  test("should change the focused state of the calendar on date change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
      focused: true
    });
    expect(wrapper.state("calenderFocused")).toBe(true);
  });
});
