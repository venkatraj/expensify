const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

const sortByDate = () => ({ type: 'SORT_BY_DATE' });

const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });

const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate,
});

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate };
