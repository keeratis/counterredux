import React, { Component } from "react";
import { Button, Row } from "reactstrap";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const count = () => {
      this.props.dispatch({ type: "COUNT" });
    };

    const reset = () => {
      this.props.dispatch({ type: "RESET" });
    };
    return (
      <div className="counter">
        <p className="number">{this.props.count}</p>
        <Row>
          <Button color="success" onClick={count}>
            <p className="btnText">count</p>
          </Button>
          <Button color="danger" className="btnText" onClick={reset}>
            reset
          </Button>
        </Row>
      </div>
    );
  }
}
function mapStateToProps(state) {
  // retrun showup as props
  // whenever state changed it will rerender
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
//care about when state changed
