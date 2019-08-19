import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

// const newExpense = {
//   id: "2",
//   description: "chips",
//   amount: 109,
//   createdAt: 0
// };

// let action = {
//   default: { type: undefined },
//   add: {
//     type: "ADD_EXPENSE",
//     expense: newExpense
//   },
//   remove: {
//     type: "REMOVE_EXPENSE",
//     id: expenses[0].id
//   },
//   edit: {
//     type: "EDIT_EXPENSE",
//     id: expenses[0].id,
//     updates: { description: "potato chips" }
//   }
// };

// let updatedState = {
//   default: expenses,
//   add: [...expenses, newExpense],
//   remove: [expenses[1], expenses[2]],
//   edit: [
//     expenses[0],
//     { ...expenses[1], description: "potato chips" },
//     expenses[2]
//   ]
// };

// describe("Reducers: CRUD operation for expenses", () => {
//   test.each`
//     case                | currentState | action            | updatedState
//     ${"set up default"} | ${expenses}  | ${action.default} | ${updatedState.default}
//     ${"add"}            | ${expenses}  | ${action.add}     | ${updatedState.add}
//     ${"remove"}         | ${expenses}  | ${action.remove}  | ${updatedState.remove}
//     ${"edit"}           | ${expenses}  | ${action.edit}    | ${updatedState.edit}
//   `();
// });

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

describe("Reducers: remove expense", () => {
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
});

describe("Reducers: edit expense", () => {
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
});

describe("Reducer: SET_EXPENSES", () => {
  test("should set expense state with data", () => {
    const reducerState = expensesReducer(undefined, {
      type: "SET_EXPENSES",
      expenses
    });

    expect(reducerState).toEqual(expenses);
  });
});
