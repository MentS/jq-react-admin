import React, { Component } from 'react';
import Link from 'umi/link';
import { Layout, Menu, Icon, Popover, Badge, Dropdown, Avatar } from 'antd';
import { connect } from 'dva';
import styles from './BasicLayout.less';
import { getTopMenu } from '@/services/basic';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

@connect()
class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    // this.GetTopMenu();
    const { dispatch } = this.props;
    // 轮询 查询 message
    // dispatch({ type: 'basic/leaveCount' });
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
    const avatarmenu = (
      <Menu className={styles.menu} selectedKeys={[]}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          <span>个人设置</span>
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />
          退出登录
        </Menu.Item>
      </Menu>
    );

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

            <div className={styles.right}>
              <Popover title="消息" trigger="click">
                <span className={styles.action}>
                  <Badge
                    count={6}
                    className={`${styles.action} ${styles.account}`}
                    style={{ boxShadow: 'none' }}
                  >
                    <Icon
                      type="bell"
                      style={{
                        fontSize: 20,
                      }}
                    />
                  </Badge>
                </span>
              </Popover>

              <Dropdown overlay={avatarmenu}>
                <span className={`${styles.action} ${styles.account}`}>
                  <Avatar
                    size="small"
                    className={styles.avatar}
                    // src={currentUser.avatar}
                    alt="avatar"
                  />
                  <span className={styles.name}>WhLeo</span>
                </span>
              </Dropdown>
            </div>
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
