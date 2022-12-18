export const Actions = {
  ADD_NOTE: "ADD_NOTE",
  SHOW_ADD_NOTE: "SHOW_ADD_NOTE",
  HIDE_ADD_NOTE: "HIDE_ADD_NOTE",
};

export const add_Note = (payload) => {
  return { type: Actions.ADD_NOTE, payload: payload };
};

export const show_AddNote = () => {
  return { type: Actions.SHOW_ADD_NOTE, payload: true };
};

export const hide_AddNote = () => {
  return { type: Actions.HIDE_ADD_NOTE, payload: false };
};
