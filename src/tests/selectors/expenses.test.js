import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should filter by text", () => {
  const filters = {
    text: "e",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date"
  };
  expect(selectExpenses(expenses, filters)).toEqual([expenses[0], expenses[2]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    startDate: moment(0),
    endDate: undefined,
    sortBy: "date"
  };
  expect(selectExpenses(expenses, filters)).toEqual([expenses[0], expenses[1]]);
});

test("should filter by end date", () => {
  const filter = {
    text: "",
    startDate: undefined,
    endDate: moment(0),
    sortBy: "date"
  };
  expect(selectExpenses(expenses, filter)).toEqual([expenses[1], expenses[2]]);
});

test("should sort by date", () => {
  const filter = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date"
  };

  expect(selectExpenses(expenses, filter)).toEqual([
    expenses[0],
    expenses[1],
    expenses[2]
  ]);
});

test("should sort by amount", () => {
  const filter = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };

  expect(selectExpenses(expenses, filter)).toEqual([
    expenses[0],
    expenses[2],
    expenses[1]
  ]);
});
