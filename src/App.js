import React, { Component } from "react";
import { connect } from "react-redux";
import { dummyAction, checkoutAction } from "./actions";

class App extends Component {
  render() {
    return (
      <>
        {/* <button onClick={this.props.dummyAction}>Dispatch dummyAction</button> */}
        <button onClick={this.props.checkoutAction}>
          Dispatch checkoutRequest
        </button>
      </>
    );
  }
}

export default connect(
  () => ({}),
  { dummyAction, checkoutAction }
)(App);
