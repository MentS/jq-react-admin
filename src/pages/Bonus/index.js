import React, { Component } from 'react';
import { Tabs } from 'antd';
import ListTab from './list';
import SettingTab from './setting';
import ContractList from './contractList';
import ContractSetting from './contractSetting';

class BonusTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <ListTab tab="分红列表" key="1" />
        <SettingTab tab="分红设置" key="2" />
        <ContractSetting tab="契约分红设置" key="3" />
        <ContractList tab="契约分红列表" key="4" />
      </Tabs>
    );
  }
}

export default BonusTabs;
