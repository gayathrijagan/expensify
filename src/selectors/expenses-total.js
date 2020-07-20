export default (expenses) => {
    if(expenses.length !== 0)
        return expenses
            .map((expense) => expense.amount)
            .reduce((total, curr) => total + curr);
    else
        return 0;

}