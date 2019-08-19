import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach(async () => {
  const expenseData = {};
  expenses.forEach(({ id, amount, description, createdAt, note }) => {
    expenseData[id] = { amount, description, createdAt, note };
  });
  await database.ref("expenses").set(expenseData);
});

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

test("Should setup add expense action object with given value", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", async () => {
  const store = createMockStore({});
  const expenseData = {
    description: "coffee",
    amount: "3000",
    note: "nice coffee",
    createdAt: 0
  };

  await store.dispatch(startAddExpense(expenseData)).then(async () => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    const snapshot = await database
      .ref(`expenses/${actions[0].expense.id}`)
      .once("value");

    expect(snapshot.val()).toEqual(expenseData);
  });
});

test("Should add default expense to database and store", async () => {
  const store = createMockStore({});
  await store.dispatch(startAddExpense({}));
  const actions = store.getActions();
  const id = actions[0].expense.id;
  const defaultExpense = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  expect(actions[0]).toEqual({
    type: "ADD_EXPENSE",
    expense: { id, ...defaultExpense }
  });

  let snapshot = await database.ref(`expenses/${id}`).once("value");

  expect(snapshot.val()).toEqual(defaultExpense);
});

test("should setup set expenses action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch the expenses from firebase", async () => {
  const store = createMockStore({});
  await store.dispatch(startSetExpenses());
  const action = store.getActions()[0];
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should remove the expenses from firebase", async () => {
  const store = createMockStore({});
  await store.dispatch(startRemoveExpense({ id: expenses[0].id }));
  const action = store.getActions()[0];
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: expenses[0].id
  });
  const snapshot = await database
    .ref(`expenses/${expenses[0].id}`)
    .once("value");
  expect(snapshot.val()).toBeFalsy();
});

test("should edit the correct expense on firebase and store", async () => {
  const updates = { note: "this is an edited note" };
  const id = expenses[0].id;

  const store = createMockStore({});
  await store.dispatch(startEditExpense(id, updates));
  const action = store.getActions();

  expect(action[0]).toEqual({
    type: "EDIT_EXPENSE",
    id,
    updates
  });
});
