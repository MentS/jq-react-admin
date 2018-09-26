import React, { Component } from 'react';

class BasicLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h3>BasicLayout</h3>
        {children}
      </div>
    );
  }
}

export default BasicLayout;
