import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ChildComponent) {
  class RequireAuthentification extends Component {
    componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push("/");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.history.push("/");
      }
    }
    render() {
      return this.props.isLoggedIn && <ChildComponent />;
    }
  }

  const mapStateToProps = state => ({
    isLoggedIn: state.authentification.isLoggedIn
  });

  return connect(mapStateToProps)(RequireAuthentification);
}
