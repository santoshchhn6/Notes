import { Actions } from "./actions";

export const notesInitialState = { notes: [] };
export const appInitialState = {
  showAddNote: false,
};

export const notesReducer = (state = notesInitialState, action) => {
  switch (action.type) {
    case Actions.ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};

export const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case Actions.SHOW_ADD_NOTE:
    case Actions.HIDE_ADD_NOTE: {
      return { ...state, showAddNote: action.payload };
    }

    default:
      return state;
  }
};
