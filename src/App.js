import React, { useState } from 'react';
import AllExpenses from './components/AllExpenses';
import NewExpense from './components/NewExpense/NewExpense';
//import ExpensesFilter from './components/NewExpense/ExpenseFilter';

const EXAMPLE_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2018, 7, 14),
  },
];


function App(props) {
  
  const [expenses, setExpenses] = useState(EXAMPLE_DATA);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <AllExpenses expenses={expenses} />
    </div>
  );
}

export default App;
