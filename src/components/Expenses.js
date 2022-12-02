
import ExpenseItem from "./ExpenseItem"
import { useState } from "react";
import "./Expenses.css"
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import ExpensesList from "./NewExpense/ExpensesList";
function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)

    }
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
   

    return (
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
    <ExpensesList items ={filteredExpenses}/>
    </Card>
    </div>
        
        

    )
}

export default Expenses;