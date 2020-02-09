import React, { Fragment } from "react";
import { Route, Switch, Router } from "react-router-dom";
import Home from "./components/Home";
import AddExpense from "./components/AddExpense";
import EditExpense from "./components/EditExpense";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";
import history from "./history";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";

const App = () => {
  return (
    <Router history={history}>
      <Fragment>
        <Switch>
          <PublicRoute path="/" exact component={LoginPage} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/create" component={AddExpense} />
          <PrivateRoute path="/edit/:id" component={EditExpense} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
