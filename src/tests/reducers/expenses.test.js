import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set up the default state of the reducer", () => {
  const reducerState = expensesReducer(undefined, { type: undefined });

  expect(reducerState).toEqual([]);
});

test("should add new expense", () => {
  const newExpense = {
    id: "2",
    description: "chips",
    amount: 109,
    createdAt: 0
  };
  const reducerState = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense: newExpense
  });

  expect(reducerState).toEqual([...expenses, newExpense]);
});

test("should remove expense", () => {
  const reducerState = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id
  });

  expect(reducerState).toEqual([expenses[1], expenses[2]]);
});

test("should not remove expense if not found", () => {
  const reducerState = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: "55"
  });

  expect(reducerState).toEqual(expenses);
});

test("should edit expense", () => {
  const reducerState = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: { description: "potato chips" }
  });

  // expect(reducerState).toEqual([
  //   expenses[0],
  //   { ...expenses[1], description: "potato chips" },
  //   expenses[2]
  // ]);
  expect(reducerState[0].description).toBe("potato chips");
});

test("should not edit expense if not found", () => {
  const reducerState = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "55",
    updates: { description: "potato chips" }
  });

  expect(reducerState).toEqual(expenses);
});
