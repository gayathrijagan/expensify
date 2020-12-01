import React from 'react';
import {connect} from 'react-redux';
import expenseSelector from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {Link} from 'react-router-dom';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = expensesTotal.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });

    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedTotal}</span></h1> 
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = expenseSelector(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);



