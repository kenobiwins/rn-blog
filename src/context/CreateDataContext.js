import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

// import React, { useReducer, createContext, useContext } from "react";

// export default (reducer, actions, initialState) => {
//   const Context = createContext();

//   const Provider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const boundActions = {};
//     for (let key in actions) {
//       boundActions[key] = actions[key](dispatch);
//     }

//     return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
//   };

//   const useGlobalState = () => {
//     const context = useContext(Context);
//     if (!context) {
//       throw new Error("useGlobalState must be used within a Provider");
//     }
//     return context;
//   };

//   return { Provider, useGlobalState };
// };
