import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expense = {description, note, amount, createdAt};

        database.ref(`users/${uid}/expenses`)
            .push(expense)
            .then(ref => {
                console.log(ref);
                dispatch(addExpense({id: ref.key, ...expense}));
            });
    }
};


//REMOVE_EXPENSE
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = (id) => {
 return (dispatch, getState) => {
     const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove()
    .then(() => {
        dispatch(removeExpense(id));
    });
 }
}

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updatedExpense) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).set(updatedExpense)
        .then(() => {
            dispatch(editExpense(id, updatedExpense));
        });
    }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const expenses = [];
        return database.ref(`users/${uid}/expenses`).once('value')
        .then((snapshot) => {
            snapshot.forEach(childSnapshot => {
                const expense = {id: childSnapshot.key, ...childSnapshot.val()};
                expenses.push(expense);
            });
            dispatch(setExpenses(expenses));
        });
    }
}