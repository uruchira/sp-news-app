export const SET_SEARCH_TEXT = "setSearchText";
export const SET_SORTING_OPTION = "setSortingOption";

export const ADD_BOOKMARK = "addBookmark";
export const REMOVE_BOOKMARK = "removeBookmark";

export const HOME_PATH = "/";
export const DETAIL_PATH = "/:id";
export const SEARCH_PATH = "/search";
export const BOOKMARKS_PATH = "/bookmarks";

export const SORTING_OPTIONS = [
  {
    id: "op1",
    label: "Newest First",
    value: "newest",
  },
  {
    id: "op2",
    label: "Oldest First",
    value: "oldest",
  },
];
