import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import toJSON from "enzyme-to-json";
// import expenses from "../fixtures/expenses";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

describe("Component: ExpenseListFilters", () => {
  let sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
    setTextFilter,
    wrapper;

  beforeEach(() => {
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    wrapper = shallow(
      <ExpenseListFilters
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        filters={filters}
      />
    );
  });

  test("should render ExpenseListFilters with default filters", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should render ExpenseListFilters with alternate filters", () => {
    wrapper.setProps({ filters: altFilters });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test("should handle text change", () => {
    wrapper
      .find("input")
      .at(0)
      .simulate("change", { target: { value: "rent" } });
    expect(setTextFilter).lastCalledWith("rent");
  });

  test("should sort by date", () => {
    wrapper.find("select").simulate("change", { target: { value: "date" } });

    expect(sortByDate).toBeCalled();
  });

  test("should sort by amount", () => {
    wrapper.find("select").simulate("change", { target: { value: "amount" } });

    expect(sortByAmount).toBeCalled();
  });

  test("should handle date change", () => {
    const startDate = moment(0).add(5, "days");
    const endDate = moment(0).add(10, "days");
    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
      startDate,
      endDate
    });
    expect(setStartDate).lastCalledWith(startDate);
    expect(setEndDate).lastCalledWith(endDate);
  });

  test("should handle date focus change", () => {
    const calendarFocused = "startDate";
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
      calendarFocused
    );

    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
  });
});
