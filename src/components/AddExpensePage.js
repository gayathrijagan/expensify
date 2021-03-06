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
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Add Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm 
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
};

const matchDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, matchDispatchToProps)(AddExpensePage);