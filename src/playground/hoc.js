import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminInfo = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Admin info</p>
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
            <WrappedComponent {...props} />
            : 'Please login to proceed.'}
        </div>
    );
};

const AdminInfo = withAdminInfo(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info='Some info'/>, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Some info'/>, document.getElementById('root'));