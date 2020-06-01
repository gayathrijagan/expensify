import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenseSelector from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? 
            <p>No Expenses</p> :
            <div>
                <h1>Expense List</h1>
                {props.expenses.map(expense => <ExpenseListItem key = {expense.id} {...expense}/>)}
            </div>
        }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: expenseSelector(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList); 