import { database, firebase, googleAuthProvider } from "../firebase/firebase";
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE,
  SET_EXPENSES,
  LOGIN,
  LOGOUT
} from "./types";

export const login = uid => ({
  type: LOGIN,
  uid
});
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: LOGOUT
});
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      amount = 0,
      info = "",
      description = "",
      createdAt = 0
    } = expenseData;
    const expense = { description, amount, info, createdAt };
    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const removeExpense = ({ id }) => ({
  type: REMOVE_EXPENSE,
  id
});

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

export const setTextFilter = (text = "") => ({
  type: SET_TEXT_FILTER,
  text
});
export const sortByDate = () => ({
  type: SORT_BY_DATE
});

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate
});

export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate
});

export const setExpenses = expenses => ({
  type: SET_EXPENSES,
  expenses
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
