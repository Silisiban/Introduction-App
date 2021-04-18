import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
  const [selectedYear, filteredYear] = useState('2021');

  const YearChangedHandler = (data) => {
    filteredYear(data);
  };

  // ----------------------------------------------------------- JSX STARTS HERE ---------------------------------------------------------------------

  return (
    <div>
      <div className='expenses'>
        <ExpenseFilter
          curYear={selectedYear}
          onYearChanged={YearChangedHandler}
        />
        {props.item.map((expenseData) => (
          <ExpenseItem
            date={expenseData.date}
            title={expenseData.title}
            amount={expenseData.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;
