import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [toggleNavBar, setToggleNavBar] = useState(true);

  return (
    <Context.Provider value={{
      toggleNavBar,
      setToggleNavBar,
    }}>
      { children }
    </Context.Provider>
  );
};

export { Context, ContextProvider };
