import React, { Component } from "react";
import Error from "../Error/index";
class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, value) {
    this.setState({ hasError: true });
    console.clear();
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <Error />;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
