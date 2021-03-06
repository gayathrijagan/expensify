import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import {startSetExpenses} from '../src/actions/expenses';
import {login, logout} from '../src/actions/auth';
import Loader from './components/Loader';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {firebase} from './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}


ReactDOM.render(<Loader />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
        });
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

