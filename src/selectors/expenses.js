import moment from 'moment';

const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses
    .filter((expense) => {
      const momentCreatedAt = moment(expense.createdAt);
      const textMatch =
        expense.note.toLowerCase().includes(text.toLowerCase()) ||
        expense.description.toLowerCase().includes(text.toLowerCase());
      const startDateMatch = startDate
        ? momentCreatedAt.isSameOrAfter(startDate)
        : true;
      const endDateMatch = endDate
        ? momentCreatedAt.isSameOrBefore(endDate)
        : true;
      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return a.createdAt - b.createdAt;
        case 'amount':
          return a.amount - b.amount;
        default:
          return a.createdAt - b.createdAt;
      }
    });
};

export default getVisibleExpenses;
