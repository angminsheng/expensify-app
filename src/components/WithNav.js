import React from "react";
import { Route, Switch } from "react-router-dom";
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import NotFoundPage from "./NotFoundPage";
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import Header from "./Header";

export default function WithNav() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} exact />
        <Route path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
