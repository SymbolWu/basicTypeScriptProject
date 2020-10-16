import React, { useState } from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from "@ant-design/icons";
import { HashRouter } from "react-router-dom";
import Route from "@/routes";
import Menu from "./Menu";
// import Breadcrumb from "./Breadcrumb";
import styles from "./index.less";

const { Sider, Header, Content, Footer } = Layout;

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <HashRouter>
      <Layout className={styles.container}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={styles.sider}
        >
          <div className={styles.logo} />
          <Menu mode="inline"/>
        </Sider>
        <Layout className={styles.rightLayout}>
          <Header className={styles.header}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: styles.trigger,
                onClick: toggle,
              }
            )}
          </Header>
          <Content className={styles.contentContainer}>
            {/* <Breadcrumb /> */}
            <div className={styles.content}>
              <Route />
            </div>
          </Content>
          <Footer className={styles.footer}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </HashRouter>
  );
};
