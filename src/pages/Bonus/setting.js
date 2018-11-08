import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class SettingTab extends Component {
  render() {
    return <TabPane {...this.props}>分红设置</TabPane>;
  }
}

export default SettingTab;
