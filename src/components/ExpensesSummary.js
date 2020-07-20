import React from 'react';
import {connect} from 'react-redux';
import expenseSelector from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = expensesTotal.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });

    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {formattedTotal}</h1>
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



