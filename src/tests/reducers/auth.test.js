import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abcd1234'
    };

    const state = authReducer({}, action);
    expect(state.uid).toBe(auth.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({uid: 'abcd1234'}, action);
    expect(state).toEqual({});
});