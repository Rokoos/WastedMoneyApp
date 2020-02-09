import moment from "moment";

export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const matchStartDate = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const matchEndDate = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const matchText = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return matchStartDate && matchEndDate && matchText;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};

export const getTotal = expenses => {
  return expenses
    .map(expense => expense.amount)
    .reduce((acc, value) => acc + value, 0);
};
