const getVisibleExpenses = (expenses, filters) => {
  const { text, sortBy, startDate, endDate } = filters;
  return expenses
    .filter((expense) => {
      const textMatch =
        expense.note.toLowerCase().includes(text.toLowerCase()) ||
        expense.description.toLowerCase().includes(text.toLowerCase());
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
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
