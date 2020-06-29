import React, { useState, useCallback } from 'react'
import { Layout } from "antd";
import AppMenu from './app-menu'
import AppBreadcrumb from './app-breadcrumb'
import AppContent from './app-content'
import logo from '../assets/mi-logo.png';
import './style.css'
import AcountLogo from '../pages/common/Acount'
const { Content, Footer, Sider, Header } = Layout;

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = useCallback((val) => {
    setCollapsed(val);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        {/* 标题 */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>


        {/* 菜单 */}
        <AppMenu />

      </Sider>


      <Layout className="site-layout">

        {/* 头部 */}

        <Header className="site-layout-background" style={{ padding: 0, borderBottom: '1px solid #999' }} />
        <div className="acountlogo">

        </div>



        <Content style={{ margin: "0 16px" }}>
          {/* 面包屑 */}
          <AppBreadcrumb />

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* 页面 */}
            <AppContent />

          </div>

        </Content>

        {/* 底部 */}
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
          </Footer>

      </Layout>

    </Layout>
  )
}
