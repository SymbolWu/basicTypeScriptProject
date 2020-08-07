import React from "react";
import { Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";

import styles from "./index.less";

const WrapperBreadcrumb: React.FC<any> = (props) => {
  console.log("props:", props);
  
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default withRouter(WrapperBreadcrumb);
