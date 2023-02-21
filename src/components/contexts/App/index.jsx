import P from 'prop-types';
import React, { useReducer, useState } from 'react';
import { globalState, stadoTeste, actions } from './data';

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, title: action.payload };
  }
  return { ...state };
};

export const GlobalContext = React.createContext();
export const Context = React.createContext();

function AppContext({ children }) {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider
      value={{ contextState, setContextState, stadoTeste }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function AppContext2({ children }) {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
}

AppContext.propTypes = {
  children: P.node,
};

AppContext2.propTypes = {
  children: P.node,
};

export { AppContext, AppContext2 };
