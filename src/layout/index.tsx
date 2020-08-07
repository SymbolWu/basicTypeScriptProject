import React from "react";
import { Layout } from "antd";
import { HashRouter } from "react-router-dom";
import Route from "@/routes";
import Menu from "./Menu";
// import Breadcrumb from "./Breadcrumb";
import styles from "./index.less";

const { Header, Content, Footer } = Layout;

export default () => (
  <HashRouter>
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu />
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
  </HashRouter>
);
