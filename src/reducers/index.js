import { combineReducers } from "redux";
import CounterReducer from "./reducer_counter";

const rootReducer = combineReducers({
  counter: CounterReducer
});
// tell redux how to create application state
