import React, { Component } from 'react';
import styles from './UserLayout.less';

class UserLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 style={{ textAlign: 'center' }}>JQ - React - Admin </h2>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default UserLayout;
