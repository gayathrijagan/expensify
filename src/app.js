import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import {addExpense} from '../src/actions/expenses';
import {setTextFilter} from '../src/actions/filters';
import getVisibleItems from '../src/selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'Water Bill', amount: 100, createdAt: 200}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 200, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 9000, createdAt: 200}));
store.dispatch(setTextFilter('water'));

console.log(getVisibleItems(store.getState().expenses, store.getState().filters));
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('root'));