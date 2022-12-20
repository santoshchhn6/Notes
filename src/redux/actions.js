export const Actions = {
  ADD_NOTE: "ADD_NOTE",
  UPDATE_NOTE: "UPDATE_NOTE",
  SHOW_ADD_NOTE: "SHOW_ADD_NOTE",
  HIDE_ADD_NOTE: "HIDE_ADD_NOTE",
  EDIT_NOTE: "EDIT_NOTE",
  RESET_SELECTED: "RESET_SELECTED",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

export const add_Note = (payload) => {
  return { type: Actions.ADD_NOTE, payload: payload };
};

export const update_Note = (payload) => {
  return { type: Actions.UPDATE_NOTE, payload: payload };
};

export const show_AddNote = () => {
  return { type: Actions.SHOW_ADD_NOTE, payload: true };
};

export const hide_AddNote = () => {
  return { type: Actions.HIDE_ADD_NOTE, payload: false };
};

export const edit_note = (payload) => {
  return { type: Actions.EDIT_NOTE, payload: payload };
};

export const reset_selected = () => {
  return { type: Actions.RESET_SELECTED };
};

export const set_searchTerm = (payload) => {
  return { type: Actions.SET_SEARCH_TERM, payload: payload };
};
