import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { startSetExpenses, login, logout } from "./actions";
import { firebase } from "./firebase/firebase";
import App from "./App";
import Loading from "./components/Loading";
import history from "./history";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let rendered = false;

const renderApp = () => {
  if (!rendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    rendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/home");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
