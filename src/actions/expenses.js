import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expense = {description, note, amount, createdAt};

        database.ref('expenses')
            .push(expense)
            .then(ref => {
                console.log(ref);
                dispatch(addExpense({id: ref.key, ...expense}));
            });
    }
};

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        const expenses = [];
        return database.ref('expenses').once('value', (snapshot) => {
            snapshot.forEach(childSnapshot => {
                const expense = {id: childSnapshot.key, ...childSnapshot.val()};
                expenses.push(expense);
            });
            dispatch(setExpenses(expenses));
        });
    }
}