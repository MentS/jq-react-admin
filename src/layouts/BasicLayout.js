import React, { Component } from 'react';
import Link from 'umi/link';
import { Layout, Menu, Icon } from 'antd';
import styles from './BasicLayout.less';
import { getTopMenu } from '@/services/sidebar';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    // this.GetTopMenu();
  }

  //  mango api
  GetTopMenu = async () => {
    const res = await getTopMenu();
    console.log(res);
  };

  // filter route component
  menuDataFilter = items => items.filter(item => item.path);

  // props routers
  getMenuData = () => {
    const {
      route: { routes },
    } = this.props;

    const item = this.menuDataFilter(routes);
    return item;
  };

  getSubMenuOrItem = () => {
    const items = this.getMenuData();
    const itemDom = items.map(item => {
      const subMenu = this.menuDataFilter(item.routes || []);
      if (subMenu.length === 0) {
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        );
      }

      return (
        <SubMenu
          key={item.path}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }
        >
          {subMenu.map(item => (
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
      );
    });
    // console.log(itemDom);
    return itemDom;
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/dashboard/monitor']}
            defaultOpenKeys={['/dashboard']}
          >
            {this.getSubMenuOrItem()}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>

          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
