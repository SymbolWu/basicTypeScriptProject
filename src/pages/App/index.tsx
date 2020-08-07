import React from "react";
import { Button } from "antd";
import styles from "./style.less";

export default () => {
  return (
    <div className={styles.container}>
      <div>Welcome to React World</div>
      <Button type="primary">Click</Button>
    </div>
  );
};
