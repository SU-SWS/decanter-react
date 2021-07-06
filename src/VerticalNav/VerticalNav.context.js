/* eslint-disable no-param-reassign */

/**
 * Vertical Nav Context
 *
 * For handling the active path and click states.
 *
 */

import React, { createContext, useReducer } from "react";

/**
 * The default state.
 */
const defaultState = {
  tree: [],
  active: false,
};

// The context.
export const VerticalNavContext = createContext(defaultState);
export const VerticalNavContextConsumer = VerticalNavContext.Consumer;
export const VerticalNavContextProvider = VerticalNavContext.Provider;

/**
 * Reducer function for the VerticalNavContext state.
 *
 * @param {*} state
 * @param {*} action
 *
 * @return A new state.
 */
function VerticalNavContextReducer(state, action) {
  if (!state) {
    state = defaultState;
  }

  switch (action.type) {
    case "addGroup":
      state.tree.push(action.id);
      return state;

    case "setActive":
      state.active = action.id;
      return state;

    case "setTree":
      state.tree = action.tree;
      return state;

    case "keypress":
      state.active = action.val;
      return state;

    default:
      throw new Error("Vertical Nav Context does not have that action.");
  }
}

/**
 * VerticalNavStateProvider.
 *
 * This handles the state updates on the VerticalNavContext store.
 *
 * @param {*} param
 *
 * @return JSX template wrapper.
 */
export const VerticalNavStateProvider = ({ children, tree }) => {
  const [state, dispatch] = useReducer(VerticalNavContextReducer, { tree });
  return (
    <VerticalNavContextProvider value={{ state, dispatch }}>
      {children}
    </VerticalNavContextProvider>
  );
};