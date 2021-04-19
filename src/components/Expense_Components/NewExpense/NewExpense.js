import './NewExpense.css';
import NewExpenseForm from '../NewExpenseForm/NewExpenseForm';

const NewExpense = (props) => {
  // Function responsible for getting the form data from <NewExpenseForm> and sending up to app.js

  const formSubmissionHandler = (formData) => {
    const data = {
      ...formData,
      id: Math.random().toString(),
    };
    props.onExpenseEntry(data);
  };

  // ----------------------------------------------------------- JSX STARTS HERE ---------------------------------------------------------------------

  return (
    <div className='new-expense'>
      <NewExpenseForm onFormSubmit={formSubmissionHandler} />
    </div>
  );
};

export default NewExpense;
