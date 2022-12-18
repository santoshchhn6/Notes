import { createStore, combineReducers } from "redux";
import { appReducer, notesReducer } from "./reducer";

const reducers = combineReducers({
  notes: notesReducer,
  app: appReducer,
});

const store = createStore(reducers, {});
export default store;
