import { createContext, useMemo, useReducer } from 'react';
import {  loginReducer } from '../reducers/reducer';

export const MyContext = createContext();

export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  GET_USER: 'GET_USER',
  LOGIN: 'LOGIN',
};

const initialState = {
  count: {
    value: 0,
  },
  user: [],
  login: {
    username: '',
    token: '',
  },
};

const mainReducer = ({ login }, action) => ({
  // count: counterReducer(count, action),
  // user: userReducer(user, action),
  login: loginReducer(login, action),
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  //get  //set
  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state, dispatch]);

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
