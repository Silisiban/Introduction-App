import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  // Handles the year filter onChange Event
  const YearChangedHandler = (event) => {
    props.onYearChanged(event.target.value);
  };

  // ----------------------------------------------------------- JSX STARTS HERE ---------------------------------------------------------------------

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={YearChangedHandler} value={props.curYear}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
