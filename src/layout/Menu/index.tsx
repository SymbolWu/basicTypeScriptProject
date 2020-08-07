import React from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import menus from "@/routes/menus";
const WrapperMenu: React.FC<any> = (props) => {
  const {
    location: { pathname },
  } = props;
  const targetName: string[] | undefined = menus
    .filter((item) => item.path === pathname)
    .map((t) => t.name);
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={targetName}>
      {menus.map((menu) => (
        <Menu.Item key={menu.name}>
          <Link to={menu.path}>{menu.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
export default withRouter(WrapperMenu);
