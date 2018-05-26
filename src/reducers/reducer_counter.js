const initialState = {
  count: 0
};
const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT":
      return {
        count: state.count + 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

export default CounterReducer;
