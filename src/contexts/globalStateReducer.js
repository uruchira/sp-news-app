import {
  SET_SEARCH_TEXT,
  SET_SORTING_OPTION,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from "../constants";

export default function globalStateReducer(state, action) {
  switch (action.type) {
    case SET_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    case SET_SORTING_OPTION: {
      return {
        ...state,
        sortingOption: action.payload,
      };
    }
    case ADD_BOOKMARK: {
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    }
    case REMOVE_BOOKMARK: {
      const currentList = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload.id
      );
      return {
        ...state,
        bookmarks: currentList,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
