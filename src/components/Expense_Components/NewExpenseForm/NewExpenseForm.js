import React, { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
  // Initializing the initial state.
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Responsible for changing the title of the expense Item.
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // Responsible for changing the Amount of the expense Item.
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  // Responsible for changing the Date of the expense Item.
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // Responsible for fixing the date object that javascript uses.
  const fixDate = (date) => {
    const splitDate = date.split('-');
    const day = Number(splitDate[2]) + 1;
    const fixedDate = splitDate[0] + '-' + splitDate[1] + '-' + day;
    return fixedDate;
  };

  // Submits the form and using two way binding resets the state to be null and therefor resets the form through the value attribue on the input elements.
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(fixDate(enteredDate)),
    };

    props.onFormSubmit(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  // ----------------------------------------------------------- JSX STARTS HERE ---------------------------------------------------------------------

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onInput={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
