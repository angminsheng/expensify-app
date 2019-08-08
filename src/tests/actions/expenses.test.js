import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    id: "123",
    type: "REMOVE_EXPENSE"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123", { note: "new note" });
  expect(action).toEqual({
    id: "123",
    type: "EDIT_EXPENSE",
    updates: {
      note: "new note"
    }
  });
});

test("Should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

test("Should setup add expense action object with given value", () => {
  const expenseData = {
    description: "rent",
    note: "this is a rent",
    amount: 500,
    createdAt: 20
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
