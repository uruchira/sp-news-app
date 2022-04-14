import React, { createContext, useReducer } from "react";
import globalStateReducer from "./globalStateReducer";

import {
  SET_SEARCH_TEXT,
  SET_SORTING_OPTION,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from "../constants";

const GlobalStateContext = createContext();

function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(globalStateReducer, {
    searchText: "",
    sortingOption: "newest",
    bookmarks: [],
  });

  const setSearchText = (payload) => {
    dispatch({ type: SET_SEARCH_TEXT, payload });
  };

  const setSortingOption = (payload) => {
    dispatch({ type: SET_SORTING_OPTION, payload });
  };

  const addBookmark = (payload) => {
    dispatch({ type: ADD_BOOKMARK, payload });
  };

  const removeBookmark = (payload) => {
    dispatch({ type: REMOVE_BOOKMARK, payload });
  };

  const contextValues = {
    setSearchText,
    setSortingOption,
    addBookmark,
    removeBookmark,
    ...state,
  };

  return (
    <GlobalStateContext.Provider value={contextValues}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export { GlobalStateContext, GlobalStateProvider };
