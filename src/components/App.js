import React, { Component } from "react";
import { Provider } from "react-redux";
import Counter from "../containers/counter";
import store from "../store.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App text-center">
          <h1>Counter App created by knot</h1>
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
