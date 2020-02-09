import React from "react";
import ExpenseFilters from "./ExpenseFilters";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";

const Home = () => {
  return (
    <div>
      <Summary />
      <ExpenseFilters />
      <ExpenseList />
    </div>
  );
};

export default Home;
