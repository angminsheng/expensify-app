import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
// eslint-disable-next-line no-unused-vars
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
// eslint-disable-next-line no-unused-vars
import SelectExpenses from "./selectors/expenses";
// import "normalize.css/normalize.css";
// import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 3000 }));
store.dispatch(
  addExpense({ description: "electricity bill", amount: 300, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "car bill", amount: 1000, createdAt: -100 })
);

const state = store.getState();
// eslint-disable-next-line no-unused-vars
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// store.dispatch(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
