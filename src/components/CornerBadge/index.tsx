import React, { cloneElement, ReactChild } from "react";
import classnames from "classnames";
import styles from "./index.less";
import { runInContext } from "vm";

interface CornerBadgeProps {
  text?: React.ReactNode;
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  shape?: "triangle" | "trapezoid";
  // children: ReactChild;
}

const CornerBadge: React.FC<CornerBadgeProps> = ({
  text = "",
  placement = "topRight",
  shape = "triangle",
  children,
}) => {
  if (React.isValidElement(children)) {
    return (
      <div className={styles.container}>
        {children}
        <div className={styles.badgeContainer}>Badge</div>
      </div>
    );
  }
  return null;
};

export default CornerBadge;

// export default class CornerBadge extends React.Component<
//   CornerBadgeProps,
//   any
// > {
//   render() {
//     const { children } = this.props;
//     return React.Children.map(children, (child) =>
//       React.cloneElement(child, {})
//     );
//   }
// }
