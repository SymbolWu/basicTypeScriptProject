import React from "react";
import { CornerBadge } from "@/components";
import styles from "./index.less";

export default () => {
  return (
    <div className={styles.container}>
      {/* <CornerBadge></CornerBadge> */}
      <CornerBadge>
        <div className={styles.card}></div>
      </CornerBadge>
    </div>
  );
};
