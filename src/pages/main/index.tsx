import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom'
import './index.css';
const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div className='layout-main'>

            <Layout className='layoutantd'>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                            (icon, index) => ({
                                key: String(index + 1),
                                icon: React.createElement(icon),
                                label: `nav ${index + 1}`,
                            }),
                        )}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <Outlet></Outlet>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>

    )
}