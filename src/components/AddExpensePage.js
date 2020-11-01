import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage = (props) => {

    const onSubmit = (expense) => {
        props.startAddExpense(expense);
        props.history.push("/");
    }

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit={onSubmit}
            />
        </div>
    )
};

const matchDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, matchDispatchToProps)(AddExpensePage);