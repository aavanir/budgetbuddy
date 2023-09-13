import NewItem from './NewItem';
import './AllExpenses.css';
import Card from './Card';
import ExpenseFilter from './NewExpense/ExpenseFilter';
import ExpensesChart from './NewExpense/ExpensesChart';
import React, { useState } from 'react';

function AllExpenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    //function is created to receive datat that is passed up from ExpenseFilter 
    const addExpenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <NewItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onAddFilter={addExpenseFilterHandler}></ExpenseFilter>
                <ExpensesChart expenses={filteredExpenses} />
                {expensesContent}
            </Card>
        </div>
    );
}

export default AllExpenses;