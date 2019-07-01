import React from 'react';
import Users from './Users'
import './admin.scss'
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class Admin extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const logo = this.state.collapsed ? <Icon type="home" /> : 'InmobApp';
    return (
      <Layout className="admin">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}
        breakpoint="lg" 
        collapsedWidth="0"
        onBreakpoint={
          broken => {
            console.log(broken);
          }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}>
          <div className="logo">{logo}</div> 
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Usuarios</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />  
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Transacciones</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Usuarios
            <Users></Users>

          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;