import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpenseChart';

import Card from "../UI/Card";
import './Expenses.css';
function Expenses(props) 
{
    const[enteredYear,setEnteredYear]=useState('2021');
    const saveExpenseYear=(expenseYear)=>{setEnteredYear(expenseYear)};

    const filteredExpenses= props.item.filter((expense)=>
    {
        return expense.date.getFullYear().toString()===enteredYear;
    });

    
    return(
            <Card className="expenses">
                <ExpensesFilter 
                selected={enteredYear} 
                onSaveExpenseYear={saveExpenseYear}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
    );
}
export default Expenses;
