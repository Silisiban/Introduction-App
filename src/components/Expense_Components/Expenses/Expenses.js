import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expenses = (props) => {
  const [selectedYear, filteredYear] = useState('2021');

  const YearChangedHandler = (data) => {
    filteredYear(data);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // ----------------------------------------------------------- JSX STARTS HERE ---------------------------------------------------------------------

  return (
    <div>
      <div className='expenses'>
        <ExpenseFilter
          curYear={selectedYear}
          onYearChanged={YearChangedHandler}
        />
        {filteredExpenses.map((expenseData) => (
          <ExpenseItem
            key={expenseData.id}
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
