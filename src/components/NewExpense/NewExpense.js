import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

//Receives expenseData as paramter using props
const NewExpense = (props) => {
    //enteredExpenseData is a paramter to represent the entered data
    //This is the parameter to represent user input which is received from ExpenseForm

    //simply created to pass data up
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //This communicates with App.js
        //The function created in App.js is called here with expenseData as the paramter
        //Essentially using these newly created functions to pass up expenseData
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;