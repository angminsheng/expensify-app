import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should set up the default value of reducer", () => {
  let reducerState = filterReducer(undefined, { type: undefined });

  expect(reducerState).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  let reducerState = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });

  expect(reducerState.sortBy).toBe("amount");
});

// In this test case we need to initialize the reducerState to something different since the default sortBy is already in date

test("should set sortBy to date", () => {
  let currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  let reducerState = filterReducer(currentState, { type: "SORT_BY_DATE" });
  expect(reducerState.sortBy).toBe("date");
});

test("should set up text filter", () => {
  let reducerState = filterReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "this is the new text"
  });

  expect(reducerState.text).toBe("this is the new text");
});

test("should set startDate filter", () => {
  let reducerState = filterReducer(undefined, {
    type: "SET_START_DATE",
    startDate: moment()
      .startOf("month")
      .subtract(1, "months")
  });

  expect(reducerState.startDate).toEqual(
    moment()
      .startOf("month")
      .subtract(1, "months")
  );
});

test("should set endtDate filter", () => {
  let reducerState = filterReducer(undefined, {
    type: "SET_END_DATE",
    endDate: moment()
      .startOf("month")
      .add(1, "months")
  });

  expect(reducerState.endDate).toEqual(
    moment()
      .startOf("month")
      .add(1, "months")
  );
});
