import CounterReducer from "./reducers/reducer_counter";
import { createStore } from "redux";

const store = createStore(CounterReducer);

export default store;
