import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense_Components/Expenses/Expenses';
import NewExpense from './components/Expense_Components/NewExpense/NewExpense';

const dummyData = [
  {
    id: 1,
    title: 'Rent',
    date: new Date('1/10/19'),
    amount: 900.0,
  },
  {
    id: 2,
    title: 'Car Payment',
    date: new Date('2/7/20'),
    amount: 427.0,
  },
];

const App = () => {
  const [curExpenses, SetExpenses] = useState(dummyData);

  // Responsible for  adding an <Expense> to the array of expenses.
  const addExpenseItem = (expenseEntry) => {
    SetExpenses((prevState) => {
      return [expenseEntry, ...prevState];
    });
  };

  // ----------------------------------------------------------- JSX STARTS HERE ---------------------------------------------------------------------

  return (
    <div>
      <NewExpense onExpenseEntry={addExpenseItem} />
      <div>
        <Expenses item={curExpenses} filter={curExpenses} />
      </div>
    </div>
  );
};

export default App;
